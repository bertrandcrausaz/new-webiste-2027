export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="/" className="brand" aria-label="Rhodes Wind Center home">
          RHODES<span>PRO</span>CENTER
        </a>
        <nav className="links">
          <a href="/#windsurf">Windsurfing</a>
          <a href="/#wingfoil">Wing Foil</a>
          <a href="/#stay">Accommodation</a>
          <a href="/#gallery">Gallery</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a href="/#contact" className="nav-cta">
          Book now
        </a>
      </div>
    </header>
  );
}
