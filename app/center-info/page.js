import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Windsurfing Center Info — Rhodes Wind Center",
  description:
    "Explore the windsurfing centers in Ialyssos, Rhodes, with beachside equipment, team support, and safety services.",
};

const CENTER_SECTIONS = [
  {
    no: 1,
    kicker: "THREE BEACHFRONT CENTERS",
    title: "Find your place on the bay",
    image: "/images/station-overview.jpg",
    alt: "Overview of a windsurf center beside the beach in Rhodes",
    paragraphs: [
      "ProCenter's windsurf stations are in Ialyssos, directly by the water and within about 500 metres of one another. The bay's steady side-shore wind offers options for a range of experience levels.",
      "The third center, near the old windmill, is more sheltered from stronger wind and waves, making it a quieter option for beginners and families.",
    ],
  },
  {
    no: 2,
    kicker: "EQUIPMENT",
    title: "Choose gear for your session",
    image: "/images/station-grass-sails.jpg",
    alt: "Windsurf sails rigged and ready at the beach station",
    reverse: true,
    paragraphs: [
      "The centers offer boards and sails across different equipment packages, including Standard, High-Tech, and Premium options. The team can help you choose a setup for your level and the day's conditions.",
      "Equipment is kept close to the water, so you can get ready at the station and spend more time on the bay.",
    ],
  },
  {
    no: 3,
    kicker: "TEAM & SAFETY",
    title: "Support from arrival to launch",
    image: "/images/windsurf-discipline.jpg",
    alt: "Windsurfer sailing along the Rhodes coastline",
    paragraphs: [
      "The center team welcomes guests, helps with equipment selection, and offers coaching to help riders progress. Baywatch towers and powerboats support the center's on-water safety measures.",
      "Facilities described by the center include fresh-water showers, beach volleyball, sunbeds, and a garden setting beside the beach.",
    ],
  },
];

export default function CenterInfo() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="/">Home</a> / Windsurfing / Center info
          </div>
          <h1>
            Windsurfing <em>Center Info</em>
          </h1>
          <p className="lead">
            Three beachside stations, equipment for different riding levels,
            and a local team ready to help you make the most of Ialyssos Bay.
          </p>
        </div>
      </section>

      <section className="progress-steps">
        <div className="wrap">
          {CENTER_SECTIONS.map((item) => (
            <div
              className={`step-row${item.reverse ? " reverse" : ""}`}
              key={item.no}
            >
              <div className="step-media">
                <div className="step-no">{item.no}</div>
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="step-text">
                <div className="kicker">{item.kicker}</div>
                <h3>{item.title}</h3>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Ready to get on the water?</h2>
          <p>Ask our team about the right center, equipment, or lesson for your visit.</p>
          <div className="cta-actions">
            <a href="/#contact" className="btn btn-solid">
              Contact the center
            </a>
            <a href="/beginner-to-advanced" className="btn btn-outline">
              Beginner to Advanced
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