import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Discipline from "../components/Discipline";
import Equipment from "../components/Equipment";
import Stay from "../components/Stay";
import Lessons from "../components/Lessons";
import Gallery from "../components/Gallery";
import Conditions from "../components/Conditions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <About />

      <Discipline
        id="windsurf"
        image="/images/windsurf-discipline.jpg"
        alt="Windsurfer sailing off Rhodes"
        kicker="DISCIPLINE 01"
        title="Windsurfing"
        paragraphs={[
          "From flat-water first tacks to full planing on a chop, our racks are set up for every level — freeride, freestyle and slalom gear tuned to the day's wind.",
          "Rental is by the hour, day, or week, with quick swaps if conditions change.",
        ]}
        tags={[
          { label: "Center info", href: "/blank" },
          { label: "Freeride & slalom kit", href: "/blank" },
          { label: "Daily gear checks", href: "/blank" },
        ]}
      />

      <Discipline
        id="wingfoil"
        reverse
        image="/images/wingfoil-sunset.jpg"
        alt="Wing foiler jumping off Rhodes"
        kicker="DISCIPLINE 02"
        title="Wing Foil"
        paragraphs={[
          "The newest addition to the station, and the fastest-growing. Foil boards, wings in every size, and coaches who can get most beginners up and gliding within a few sessions.",
          "Safety-boat cover runs across the bay while you find your balance.",
        ]}
        tags={["Foil-specific coaching", "All wing sizes", "Safety boat on the water"]}
      />

      <Equipment />
      <Stay />
      <Lessons />
      <Gallery />
      <Conditions />
      <Contact />
      <Footer />
    </>
  );
}
