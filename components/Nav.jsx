export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          RHODES<span>WIND</span>CENTER
        </div>
        <nav className="links">
          <a href="#windsurf">Windsurfing</a>
          <a href="#wingfoil">Wing Foil</a>
          <a href="#stay">Accommodation</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="nav-cta">
          Book now
        </a>
      </div>
    </header>
  );
}
