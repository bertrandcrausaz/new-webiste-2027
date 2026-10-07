const PATHS = [
  {
    lvl: "First timer",
    desc: "Land-based basics, then your first metres on flat water with an instructor alongside.",
  },
  {
    lvl: "Improver",
    desc: "Waterstarts, planing and stance work to get you sailing independently.",
  },
  {
    lvl: "Advanced",
    desc: "Video review and on-water coaching for carve gybes, freestyle and foil technique.",
  },
  {
    lvl: "Kids & teens",
    desc: "Small groups, life-jacketed, in the shallow and sheltered part of the bay.",
  },
];

export default function Lessons() {
  return (
    <section className="lesson-sec">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">LESSONS & PROGRESSION</div>
          <h2 className="title">
            Whatever level you&apos;re at, we&apos;ll take you further
          </h2>
          <p className="lead">
            Structured coaching for first-timers, and technique clinics for
            riders chasing their next manoeuvre.
          </p>
        </div>
        <div className="lesson-grid">
          <div className="lesson-media">
            <img
              src="/images/lesson-instructor-kids.jpg"
              alt="Instructor teaching a child to windsurf"
            />
            <img
              src="/images/lesson-two-women.jpg"
              alt="Two windsurfers on the beach"
            />
          </div>
          <ul className="path-list">
            {PATHS.map((p) => (
              <li key={p.lvl}>
                <span className="lvl">{p.lvl}</span>
                <span>{p.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
