const STATS = [
  { num: "35+", lbl: "Years on the water" },
  { num: "200+", lbl: "Windsurf sets in stock" },
  { num: "40+", lbl: "Wing foil sets in stock" },
  { num: "Apr–Oct", lbl: "Reliable wind season" },
];

export default function Stats() {
  return (
    <div className="stats">
      <div className="wrap stats-row">
        {STATS.map((s) => (
          <div className="stat" key={s.lbl}>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
