export default function Conditions() {
  const hourly = [
    { time: "09:00", wind: "12 kt" },
    { time: "11:00", wind: "18 kt" },
    { time: "13:00", wind: "22 kt" },
    { time: "15:00", wind: "24 kt" },
    { time: "17:00", wind: "20 kt" },
  ];

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
          <div className="kicker">LIVE ON SITE</div>
          <p>
            A beach webcam and live forecast run on our booking site so you
            can check conditions before every session.
          </p>
          <a href="#contact" className="btn btn-solid">
            Ask us about today&apos;s wind
          </a>
          <div className="cond-note">
            Webcam & forecast widgets connect once this page is live on your
            own domain.
          </div>
        </div>
      </div>

      <div className="wrap forecast-wrap">
        <div className="forecast-card">
          <div className="forecast-header">
            <span className="forecast-label">Wind forecast</span>
            <span className="forecast-date">Today · Ialyssos</span>
          </div>

          <div className="forecast-summary">
            <div className="summary-value">
              18<span>–24</span>
              <small>kt</small>
            </div>

            <div className="summary-metrics">
              <div>
                <span>Direction</span>
                <strong>NW</strong>
              </div>
              <div>
                <span>Water</span>
                <strong>23°C</strong>
              </div>
              <div>
                <span>Wave</span>
                <strong>0.8 m</strong>
              </div>
            </div>
          </div>

          <div className="hourly-forecast" aria-label="Hourly wind forecast">
            {hourly.map((item) => (
              <div className="hour-card" key={item.time}>
                <span>{item.time}</span>
                <strong>{item.wind}</strong>
                <div className="mini-bar">
                  <i style={{ width: `${Math.min(100, Number.parseInt(item.wind, 10) * 4)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

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
