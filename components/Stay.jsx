const STAYS = [
  {
    img: "/images/stay-pool-aerial.jpg",
    alt: "Hotel pool near the beach",
    name: "Hotel Comfort",
    desc: "Pool, restaurant, right by the beach",
  },
  {
    img: "/images/stay-pool-volleyball.jpg",
    alt: "Poolside at the resort",
    name: "Family Resort",
    desc: "Space for kids and non-surfing guests",
  },
  {
    img: "/images/stay-beach-lounge.jpg",
    alt: "Windsurf station and accommodation",
    name: "Surf House",
    desc: "Budget rooms, social, close to the sand",
  },
];

export default function Stay() {
  return (
    <section id="stay" className="stay-sec">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">WHERE TO STAY</div>
          <h2 className="title">Accommodation, steps from the station</h2>
          <p className="lead">
            Pick the setup that matches your trip — hotel comfort, a
            self-catered studio, or a social surf house.
          </p>
        </div>
        <div className="stay-grid">
          {STAYS.map((s) => (
            <div className="stay-card" key={s.name}>
              <img src={s.img} alt={s.alt} />
              <div className="cap">
                <div className="name">{s.name}</div>
                <div className="desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
