import WindForecast from "./WindForecast";

export default function Conditions() {
  return (
    <section className="conditions">
      <div className="wrap cond-grid">
        <div>
          <div className="kicker">CONDITIONS</div>
          <h2 className="title" style={{ color: "var(--foam)" }}>
            Check the wind before you pack
          </h2>
          <p style={{ color: "var(--sand)", marginTop: 16, maxWidth: "52ch" }}>
            Rhodes&apos; west coast sees a steady thermal wind most
            afternoons from April through October, building through the day
            and easing toward sunset — ideal for both first lessons and
            full-power sessions.
          </p>
        </div>
        <div className="cond-box">
          <div className="kicker">LIVE WIND FORECAST</div>
          <p>
            Check the latest Windy forecast for Ialyssos Bay before your
            session. See the next five days at 17:00 local time, with wind
            speed, direction, air temperature, and wave height.
          </p>
          <a href="#contact" className="btn btn-solid">
            Ask us about today&apos;s wind
          </a>
          <div className="cond-note">
            Wind forecast updates every 30 minutes. Conditions on the water
            may vary.
          </div>
        </div>
      </div>

      <div className="wrap forecast-wrap">
        <WindForecast />

        <div className="webcam-card">
          <div className="webcam-viewport">
            <iframe
              src="https://g0.ipcamlive.com/player/player.php?alias=procentercam1"
              title="Live beach webcam at Ialyssos, Rhodes"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
