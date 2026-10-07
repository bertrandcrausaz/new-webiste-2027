'use client';

import { useEffect, useState } from 'react';

const slides = [
  '/images/wingfoil-sunset.jpg',
  '/images/station-overview.jpg',
  '/images/hero-wingfoil-jump.jpg',
  '/images/gallery-sails-rack.jpg',
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero hero-carousel"
      style={{ backgroundImage: `url('${slides[activeIndex]}')` }}
    >
      <div className="hero-content">
        <div className="hero-eyebrow">IALYSSOS, RHODES — GREECE</div>
        <h1 className="hero-title">
          RIDE THE <em>MELTEMI</em>
        </h1>
        <p className="hero-sub">
          Windsurfing and wing foil holidays on one of the windiest
          coastlines in the Mediterranean — steady thermals, warm water,
          all levels welcome.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-solid">
            Plan your trip
          </a>
          <a href="#windsurf" className="btn btn-outline">
            Explore the center
          </a>
        </div>
      </div>

      <div className="hero-dots" aria-label="Carousel indicators">
        {slides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            className={`hero-dot ${index === activeIndex ? 'active' : ''}`}
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
