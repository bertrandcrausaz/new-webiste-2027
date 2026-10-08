import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Beginner to Advanced — Rhodes Wind Center",
  description:
    "The windsurfing progression path at Rhodes Wind Center, from first balance drills to carve gybes and slalom.",
};

const STEPS = [
  {
    no: 1,
    kicker: "STAGE ONE",
    title: "Beginner — finding your balance",
    image: "/images/progression-beginner.jpg",
    alt: "Instructor teaching a child to windsurf in shallow water",
    paragraphs: [
      "We start on flat, sheltered water with an instructor right beside you. Dry-land sail handling first, then your first metres afloat — learning to balance the board, hold the rig, and turn without falling in (too often).",
      "Most first-timers are standing and steering within their first session, and sailing short distances independently by the end of day two.",
    ],
  },
  {
    no: 2,
    kicker: "STAGE TWO",
    title: "Improver — building speed and control",
    image: "/images/progression-intermediate.jpg",
    alt: "Two windsurfers preparing their boards on the beach",
    reverse: true,
    paragraphs: [
      "Once the basics are second nature, we move into waterstarts, stance work, and your first taste of planing — that moment the board lifts and speeds up underneath you.",
      "This stage is about independence: reading the wind, choosing your line, and sailing comfortably in a bit more chop.",
    ],
  },
  {
    no: 3,
    kicker: "STAGE THREE",
    title: "Advanced — carving, jumping, racing",
    image: "/images/progression-advanced.jpg",
    alt: "Experienced windsurfers riding waves side by side",
    paragraphs: [
      "For riders who already plane confidently, coaching shifts to technique: carve gybes, footstraps and harness work, chop-hop jumps, and — for the strongest winds on our beach — full-power slalom sailing.",
      "Video review on the beach helps you see exactly what to adjust between sessions.",
    ],
  },
];

export default function BeginnerToAdvanced() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="/">Home</a> / Windsurfing / Beginner to Advanced
          </div>
          <h1>
            Beginner to <em>Advanced</em>
          </h1>
          <p className="lead">
            Every windsurfer on our beach started exactly where you are now.
            Here&apos;s the path we take riders through — from the first
            dry-land balance drills to full planing and carve gybes on open
            water.
          </p>
        </div>
      </section>

      <section className="progress-steps">
        <div className="wrap">
          {STEPS.map((s) => (
            <div
              className={`step-row${s.reverse ? " reverse" : ""}`}
              key={s.no}
            >
              <div className="step-media">
                <div className="step-no">{s.no}</div>
                <img src={s.image} alt={s.alt} />
              </div>
              <div className="step-text">
                <div className="kicker">{s.kicker}</div>
                <h3>{s.title}</h3>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Ready to start your progression?</h2>
          <p>
            Tell us your current level and how many days you&apos;ve got —
            we&apos;ll build a lesson plan that fits.
          </p>
          <div className="cta-actions">
            <a href="/#contact" className="btn btn-solid">
              Book your lesson
            </a>
            <a href="/" className="btn btn-outline">
              Back to home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
