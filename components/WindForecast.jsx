"use client";

import { useEffect, useState } from "react";

function formatTime(timestamp) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "Europe/Athens",
  }).format(new Date(timestamp));
}

export default function WindForecast() {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let active = true;

    async function loadForecast() {
      try {
        const response = await fetch("/api/wind-forecast");
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Unable to load the live forecast.");
        }

        if (active) setState({ status: "ready", forecast: result });
      } catch (error) {
        if (active) {
          setState({
            status: "error",
            message:
              error.message || "Unable to load the live forecast. Please retry.",
          });
        }
      }
    }

    loadForecast();
    const interval = window.setInterval(loadForecast, 30 * 60 * 1000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  if (state.status === "loading") {
    return (
      <div className="forecast-card forecast-state" role="status">
        <div className="forecast-header">
          <span className="forecast-label">WINDY FORECAST</span>
          <span className="forecast-date">Ialyssos · Rhodes</span>
        </div>
        <p>Loading the latest forecast…</p>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="forecast-card forecast-state" role="alert">
        <div className="forecast-header">
          <span className="forecast-label">WINDY FORECAST</span>
          <span className="forecast-date">Ialyssos · Rhodes</span>
        </div>
        <p>{state.message}</p>
      </div>
    );
  }

  const { forecast } = state;
  const maxWind = Math.max(...forecast.daily.map((item) => item.wind), 1);

  return (
    <div className="forecast-card">
      <div className="forecast-header">
        <span className="forecast-label">WINDY FORECAST</span>
        <span className="forecast-date">
          Ialyssos · 5 days at {forecast.forecastTime}
        </span>
      </div>

      <div className="forecast-summary">
        <div className="summary-value">
          {forecast.windMin}
          <span>–{forecast.windMax}</span>
          <small>kt</small>
        </div>

        <div className="summary-metrics">
          <div>
            <span>Direction</span>
            <strong>{forecast.direction}</strong>
          </div>
          <div>
            <span>Air</span>
            <strong>{forecast.airTemperature}°C</strong>
          </div>
          <div>
            <span>Wave</span>
            <strong>{forecast.waveHeight.toFixed(1)} m</strong>
          </div>
        </div>
      </div>

      <div
        className="five-day-forecast"
        aria-label="Five-day wind forecast at 17:00 Ialyssos time"
      >
        {forecast.daily.map((item) => (
          <div className="hour-card" key={item.day}>
            <span className="forecast-day">{item.day}</span>
            <span className="forecast-time">{forecast.forecastTime}</span>
            <strong>{item.wind} kt</strong>
            <span className="daily-wind-direction">{item.direction}</span>
            <div className="mini-bar">
              <i
                style={{
                  width: `${Math.max(4, Math.round((item.wind / maxWind) * 100))}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <a
        className="forecast-attribution"
        href="https://www.windy.com/"
        target="_blank"
        rel="noreferrer"
      >
        Windy forecast · updated {formatTime(forecast.updatedAt)}
      </a>
    </div>
  );
}
