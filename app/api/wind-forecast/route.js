const WINDY_API_URL = "https://api.windy.com/api/point-forecast/v2";
const WINDY_API_KEY = process.env.WINDY_POINT_FORECAST_API_KEY;
const LOCATION = { lat: 36.42, lon: 28.15 };

export const dynamic = "force-dynamic";

async function getPointForecast(model, parameters) {
  const response = await fetch(WINDY_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...LOCATION,
      model,
      parameters,
      levels: ["surface"],
      key: WINDY_API_KEY,
    }),
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    throw new Error(`Windy returned HTTP ${response.status} for ${model}.`);
  }

  return response.json();
}

function requireSeries(data, key) {
  const series = data[key];
  if (!Array.isArray(series)) {
    throw new Error(`Windy response is missing ${key}.`);
  }
  return series;
}

function unitFor(data, key) {
  const unit = data.units?.[key];
  if (typeof unit !== "string") {
    throw new Error(`Windy response is missing units for ${key}.`);
  }
  return unit.toLowerCase().replaceAll(" ", "");
}

function toKnots(value, unit) {
  if (unit === "m*s-1" || unit === "m/s") return value * 1.943844;
  if (unit === "km/h" || unit === "kmh-1") return value * 0.539957;
  if (unit === "kt" || unit === "knot" || unit === "knots") return value;
  throw new Error(`Unsupported Windy wind speed unit: ${unit}.`);
}

function toCelsius(value, unit) {
  if (unit === "°c" || unit === "c") return value;
  if (unit === "k") return value - 273.15;
  if (unit === "°f" || unit === "f") return ((value - 32) * 5) / 9;
  throw new Error(`Unsupported Windy temperature unit: ${unit}.`);
}

function toMeters(value, unit) {
  if (unit === "m" || unit === "meter" || unit === "meters") return value;
  if (unit === "ft" || unit === "feet") return value * 0.3048;
  throw new Error(`Unsupported Windy wave height unit: ${unit}.`);
}

function compassDirection(degrees) {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return directions[Math.round(degrees / 22.5) % directions.length];
}

const IALYSSOS_DATE_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Athens",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const IALYSSOS_DAY_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Athens",
  weekday: "short",
  day: "2-digit",
  month: "short",
});

function dateParts(timestamp) {
  return Object.fromEntries(
    IALYSSOS_DATE_FORMATTER.formatToParts(timestamp)
      .filter((part) => part.type !== "literal")
      .map(({ type, value }) => [type, Number(value)]),
  );
}

function dateAfter(parts, days) {
  const date = new Date(
    Date.UTC(parts.year, parts.month - 1, parts.day + days, 12),
  );
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

function athensTime(date, hour) {
  const utcGuess = Date.UTC(date.year, date.month - 1, date.day, hour);
  const local = dateParts(utcGuess);
  const localAsUtc = Date.UTC(
    local.year,
    local.month - 1,
    local.day,
    local.hour,
    local.minute,
  );
  return utcGuess + utcGuess - localAsUtc;
}

function interpolateAt(timestamps, values, target) {
  let before = null;
  let after = null;

  for (let index = 0; index < timestamps.length; index += 1) {
    const timestamp = timestamps[index];
    const value = values[index];

    if (!Number.isFinite(timestamp) || !Number.isFinite(value)) continue;
    if (timestamp === target) return value;
    if (timestamp < target) before = { timestamp, value };
    if (timestamp > target) {
      after = { timestamp, value };
      break;
    }
  }

  if (!before || !after) {
    throw new Error("Windy does not have enough forecast data for 17:00.");
  }

  const progress =
    (target - before.timestamp) / (after.timestamp - before.timestamp);
  return before.value + (after.value - before.value) * progress;
}

function makeForecast(weather, sea) {
  const timestamps = requireSeries(weather, "ts");
  const windU = requireSeries(weather, "wind_u-surface");
  const windV = requireSeries(weather, "wind_v-surface");
  const airTemperature = requireSeries(weather, "temp-surface");
  const waveTimestamps = requireSeries(sea, "ts");
  const waveHeights = requireSeries(sea, "waves_height-surface");

  if (
    timestamps.length === 0 ||
    windU.length !== timestamps.length ||
    windV.length !== timestamps.length ||
    airTemperature.length !== timestamps.length ||
    waveTimestamps.length === 0 ||
    waveHeights.length !== waveTimestamps.length
  ) {
    throw new Error("Windy returned incomplete forecast series.");
  }

  const windUnit = unitFor(weather, "wind_u-surface");
  const temperatureUnit = unitFor(weather, "temp-surface");
  const waveUnit = unitFor(sea, "waves_height-surface");
  const now = Date.now();
  const today = dateParts(now);
  const todayAt17 = athensTime(today, 17);
  const firstDayOffset = todayAt17 > now ? 0 : 1;
  const days = Array.from({ length: 5 }, (_, index) => {
    const date = dateAfter(today, firstDayOffset + index);
    const target = athensTime(date, 17);
    const u = interpolateAt(timestamps, windU, target);
    const v = interpolateAt(timestamps, windV, target);
    const air = interpolateAt(timestamps, airTemperature, target);
    const wave = interpolateAt(waveTimestamps, waveHeights, target);
    const direction = (Math.atan2(-u, -v) * (180 / Math.PI) + 360) % 360;

    return {
      day: IALYSSOS_DAY_FORMATTER.format(target),
      wind: Math.round(toKnots(Math.hypot(u, v), windUnit)),
      direction: compassDirection(direction),
      airTemperature: Math.round(toCelsius(air, temperatureUnit)),
      waveHeight: Number(toMeters(wave, waveUnit).toFixed(1)),
    };
  });
  const speeds = days.map((day) => day.wind);
  const firstDay = days[0];

  return {
    daily: days,
    windMin: Math.round(Math.min(...speeds)),
    windMax: Math.round(Math.max(...speeds)),
    direction: firstDay.direction,
    airTemperature: firstDay.airTemperature,
    waveHeight: firstDay.waveHeight,
    forecastTime: "17:00",
    updatedAt: new Date().toISOString(),
  };
}

export async function GET() {
  if (!WINDY_API_KEY) {
    return Response.json(
      {
        error:
          "Live Windy forecast is not configured. Set WINDY_POINT_FORECAST_API_KEY on the server.",
      },
      { status: 503 },
    );
  }

  try {
    const [weather, sea] = await Promise.all([
      getPointForecast("gfs", ["wind", "temp"]),
      getPointForecast("gfsWave", ["waves"]),
    ]);

    return Response.json(makeForecast(weather, sea), {
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error("Unable to load the Windy forecast for Ialyssos.", error);
    return Response.json(
      { error: "The live Windy forecast is temporarily unavailable." },
      { status: 502 },
    );
  }
}
