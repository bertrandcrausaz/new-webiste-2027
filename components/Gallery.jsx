const PHOTOS = [
  { img: "/images/gallery-wingfoil-jump.jpg", alt: "Wing foiler mid-air jump" },
  { img: "/images/wingfoil-discipline.jpg", alt: "Wing foil rider carving on the wing" },
  { img: "/images/gallery-sails-rack.jpg", alt: "Windsurf equipment on the rack" },
  { img: "/images/gallery-jump-cruiseship.jpg", alt: "Windsurfer jumping with cruise ship in the background" },
  { img: "/images/gallery-sup-sailing.jpg", alt: "Stand up paddling with a sail on Rhodes" },
  { img: "/images/gallery-carrying-gear.jpg", alt: "Carrying gear down to the beach" },
  { img: "/images/gallery-foil-closeup.jpg", alt: "Close-up windsurf foiling action" },
  { img: "/images/gallery-wave-riding.jpg", alt: "Windsurfers riding waves side by side" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-sec">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">FROM THE WATER</div>
          <h2 className="title">On the beach, on the wind</h2>
        </div>
      </div>
      <div className="wrap">
        <div className="gallery-strip">
          {PHOTOS.map((p) => (
            <img src={p.img} alt={p.alt} key={p.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
