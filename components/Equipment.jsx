const BRANDS = [
  { name: "Duotone", note: "Sails & wings" },
  { name: "JP Australia", note: "Boards" },
  { name: "Neilpryde", note: "Sails & rigs" },
  { name: "Tabou", note: "Boards" },
  { name: "Severne", note: "Sails" },
  { name: "GA Sails", note: "Sails & rigs" },
];

export default function Equipment() {
  return (
    <section className="center-sec">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">THE STATION</div>
          <h2 className="title">Equipment, refreshed every season</h2>
          <p className="lead">
            Three centers along the beach hold everything you&apos;ll need —
            no need to bring your own gear.
          </p>
        </div>
        <div className="equip-grid">
          <div className="equip-photos">
            <img
              className="tall"
              src="/images/station-overview.jpg"
              alt="Rows of sails at the windsurf station"
            />
            <img
              src="/images/station-grass-sails.jpg"
              alt="Windsurf boards on the grass"
            />
            <img
              src="/images/station-model-walking.jpg"
              alt="Windsurf station overview"
            />
          </div>
          <div className="brand-list">
            {BRANDS.map((b) => (
              <div className="brand-item" key={b.name}>
                <span className="brand-name">{b.name}</span>
                <span className="brand-note">{b.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
