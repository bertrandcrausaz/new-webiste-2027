import { Fragment } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Windsurf & Wing Foil Prices — Rhodes Wind Center",
  description:
    "Explore windsurfing lessons, private coaching, clinics, and wing-foil starter prices at Rhodes Wind Center.",
};

const PRICE_SECTIONS = [
  {
    id: "starters",
    number: "01",
    kicker: "EQUIPMENT INCLUDED",
    title: "Starters & refreshers",
    description:
      "Get comfortable on the water with a group session and the equipment you need.",
    prices: [
      {
        name: "Group starter session",
        detail: "2 hours",
        price: "€75",
      },
      {
        name: "Starter course",
        detail: "4 hours total · 2 days of 2 hours",
        price: "€120",
        featured: true,
      },
      {
        name: "Kids session",
        detail: "1 hour · for children up to 13 years old",
        price: "€65",
      },
      {
        name: "Kids course",
        detail: "3 hours total · 3 days of 1 hour · for children up to 13",
        price: "€180",
      },
    ],
  },
  {
    id: "advanced",
    number: "02",
    kicker: "EQUIPMENT NOT INCLUDED",
    title: "Advanced coaching",
    description:
      "Focused coaching for experienced windsurfers. Equipment is not included in these session prices.",
    prices: [
      {
        name: "Private session",
        detail: "1.5 hours",
        price: "€85",
      },
      {
        name: "Private session",
        detail: "4 hours",
        price: "€195",
      },
      {
        name: "Semi-private session",
        detail: "2 hours · minimum 2 people",
        price: "€75",
      },
      {
        name: "Semi-private session",
        detail: "4 hours · minimum 2 people",
        price: "€145",
        featured: true,
      },
    ],
  },
  {
    id: "clinics",
    number: "03",
    kicker: "COACHING DURING YOUR STAY",
    title: "Windsurfing clinics",
    description:
      "Make the most of your time on Rhodes with coaching arranged across your stay.",
    prices: [
      {
        name: "Private coaching",
        detail: "During your stay · up to 7 hours",
        price: "€285",
      },
      {
        name: "Group coaching",
        detail: "During your stay · minimum 2 people · up to 10 hours",
        price: "€245",
        featured: true,
      },
    ],
  },
  {
    id: "wingfoil",
    number: "04",
    kicker: "EQUIPMENT & ALL-DAY USE INCLUDED",
    title: "Wing-foil starters",
    description:
      "Semi-private lessons with equipment included, plus all-day equipment use.",
    prices: [
      {
        name: "Starter session",
        detail: "2 hours · semi-private",
        price: "€150",
      },
      {
        name: "2-day starter course",
        detail: "2 × 2-hour sessions · semi-private",
        price: "€270",
        featured: true,
      },
      {
        name: "Complete 3-day starter course",
        detail: "3 × 2-hour sessions · semi-private",
        price: "€330",
      },
    ],
  },
];

const RENTAL_PERIODS = [
  {
    period: "1 hour rental",
    standard: "40",
    standardCover: "5",
    highTech: "50",
    highTechCover: "5",
    premium: "60",
    premiumCover: "7",
    accessory: "4",
  },
  {
    period: "1/2 day (3 hours)",
    standard: "85",
    standardCover: "10",
    highTech: "105",
    highTechCover: "10",
    premium: "120",
    premiumCover: "10",
    accessory: "6",
  },
  {
    period: "5 hours card",
    standard: "185",
    standardCover: "15",
    highTech: "240",
    highTechCover: "15",
    premium: "270",
    premiumCover: "15",
    accessory: "12",
  },
  {
    period: "10 hours card",
    standard: "305",
    standardCover: "25",
    highTech: "365",
    highTechCover: "25",
    premium: "395",
    premiumCover: "25",
    accessory: "20",
  },
  {
    period: "1 day",
    standard: "105",
    standardCover: "10",
    highTech: "120",
    highTechCover: "10",
    premium: "140",
    premiumCover: "10",
    accessory: "8",
    groupStart: "Daily rental",
  },
  {
    period: "3 days card",
    standard: "260",
    standardCover: "25",
    highTech: "290",
    highTechCover: "30",
    premium: "320",
    premiumCover: "35",
    accessory: "20",
  },
  {
    period: "5 days card",
    standard: "305",
    standardCover: "30",
    highTech: "365",
    highTechCover: "40",
    premium: "395",
    premiumCover: "45",
    accessory: "30",
  },
  {
    period: "Extend days on 3- and 5-day cards",
    standard: "45",
    standardCover: "5",
    highTech: "55",
    highTechCover: "5",
    premium: "65",
    premiumCover: "5",
    accessory: "5",
  },
  {
    period: "1 week (7 consecutive days)",
    standard: "365",
    standardCover: "35",
    highTech: "415",
    highTechCover: "40",
    premium: "465",
    premiumCover: "45",
    accessory: "35",
    groupStart: "Weekly rental",
  },
  {
    period: "2 weeks (14 consecutive days)",
    standard: "500",
    standardCover: "65",
    highTech: "580",
    highTechCover: "70",
    premium: "625",
    premiumCover: "75",
    accessory: "50",
  },
  {
    period: "3 weeks (21 consecutive days)",
    standard: "610",
    standardCover: "80",
    highTech: "715",
    highTechCover: "90",
    premium: "765",
    premiumCover: "100",
    accessory: "70",
  },
];

function RentalPrices() {
  return (
    <section className="rental-prices" id="rental">
      <div className="wrap">
        <div className="price-intro rental-intro">
          <div>
            <div className="kicker">WINDSURF EQUIPMENT RENTAL</div>
            <h2 className="title">Rent your setup</h2>
          </div>
          <p>
            Choose a rental period and equipment tier. Cover and accessory
            prices are listed separately in euros.
          </p>
        </div>

        <div
          className="rental-table-scroll"
          role="region"
          aria-label="Windsurf rental prices"
          tabIndex={0}
        >
          <table className="rental-table">
            <thead>
              <tr className="rental-tier-head">
                <th rowSpan={2} scope="col">
                  Rental period
                </th>
                <th colSpan={2} scope="colgroup">Standard</th>
                <th colSpan={2} scope="colgroup">High-tech</th>
                <th colSpan={2} scope="colgroup">Premium</th>
                <th rowSpan={2} scope="col">Accessory</th>
              </tr>
              <tr className="rental-subhead">
                <th scope="col">Rental</th>
                <th scope="col">Cover</th>
                <th scope="col">Rental</th>
                <th scope="col">Cover</th>
                <th scope="col">Rental</th>
                <th scope="col">Cover</th>
              </tr>
            </thead>
            <tbody>
              {RENTAL_PERIODS.map((item) => (
                <Fragment key={item.period}>
                  {item.groupStart && (
                    <tr className="rental-group-row">
                      <th colSpan={8} scope="rowgroup">
                        {item.groupStart}
                      </th>
                    </tr>
                  )}
                  <tr>
                    <th className="rental-period" scope="row">{item.period}</th>
                    <td>€{item.standard}</td>
                    <td>€{item.standardCover}</td>
                    <td>€{item.highTech}</td>
                    <td>€{item.highTechCover}</td>
                    <td>€{item.premium}</td>
                    <td>€{item.premiumCover}</td>
                    <td>€{item.accessory}</td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <p className="rental-table-note">
          Standard, High-tech, and Premium rental and cover rates are shown
          separately. All prices are in euros.
        </p>
      </div>
    </section>
  );
}

export default function WindsurfPrices() {
  return (
    <>
      <Nav />

      <main>
        <section className="price-hero">
          <div className="wrap price-hero-content">
            <div className="breadcrumb">
              <a href="/">Home</a> / Windsurfing / Prices
            </div>
            <div className="kicker">RHODES WIND CENTER · 2026</div>
            <h1>
              Time on the water.
              <br />
              <em>Prices made clear.</em>
            </h1>
            <p>
              From your first windsurf session to advanced coaching and wing
              foil, find the right lesson for your time on Rhodes.
            </p>
            <a className="btn btn-solid" href="#rental">
              Explore rental prices
            </a>
          </div>
          <div className="price-hero-note">IALYSSOS BAY · RHODES, GREECE</div>
        </section>

        <RentalPrices />

        <section className="price-list" id="price-list">
          <div className="wrap">
            <div className="price-intro">
              <div>
                <div className="kicker">LESSONS & COACHING</div>
                <h2 className="title">Choose your session</h2>
              </div>
              <p>
                All prices are shown in euros. Check the equipment and group
                details for each option before booking.
              </p>
            </div>

            <nav className="price-jump-links" aria-label="Jump to lesson price category">
              {PRICE_SECTIONS.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>

            <div className="price-section-list">
              {PRICE_SECTIONS.map((section) => (
                <section
                  className="price-category"
                  id={section.id}
                  key={section.id}
                >
                  <div className="price-category-heading">
                    <span className="price-number">{section.number}</span>
                    <div>
                      <div className="kicker">{section.kicker}</div>
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                    </div>
                  </div>
                  <div className="price-cards">
                    {section.prices.map((item) => (
                      <article
                        className={`price-card${item.featured ? " featured" : ""}`}
                        key={`${item.name}-${item.detail}`}
                      >
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.detail}</p>
                        </div>
                        <div className="price-amount">{item.price}</div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <aside className="price-note">
              <span className="price-note-mark" aria-hidden="true">
                *
              </span>
              <div>
                <h3>A note about one-person group sessions</h3>
                <p>
                  If you are the only person booked for a group session, the
                  session time will be reduced.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="cta-band price-cta">
          <div className="wrap">
            <div className="kicker">READY TO BOOK?</div>
            <h2>Your next session starts here.</h2>
            <p>
              Tell us your dates, experience, and the session you have in mind.
              We&apos;ll help you find the right fit.
            </p>
            <div className="cta-actions">
              <a href="/#contact" className="btn btn-solid">
                Ask about availability
              </a>
              <a href="/" className="btn btn-outline">
                Back to home
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
