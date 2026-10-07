"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // No backend is wired up yet — this just confirms the form works.
    // Connect this to an email service or API route when you're ready.
    setStatus("Thanks! This form isn't connected to anything yet — wire it up to an email service or API route.");
  }

  return (
    <section id="contact" className="contact-sec">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <div className="kicker">GET IN TOUCH</div>
          <h2 className="title">Let&apos;s plan your wind week</h2>
          <p className="lead">
            Tell us your dates and level — we&apos;ll put together
            accommodation, rental and lessons in one offer.
          </p>
          <dl>
            <dt>Location</dt>
            <dd>Ialyssos Beach, Rhodes, Greece</dd>
            <dt>Email</dt>
            <dd>info@yourcenter.com</dd>
            <dt>Phone (Apr–Oct)</dt>
            <dd>+30 22410 00000</dd>
          </dl>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label htmlFor="fname">First name</label>
              <input id="fname" type="text" placeholder="Your first name" />
            </div>
            <div>
              <label htmlFor="lname">Last name</label>
              <input id="lname" type="text" placeholder="Your last name" />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="msg">Message</label>
            <textarea
              id="msg"
              placeholder="Dates, group size, experience level..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-solid">
            Send message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
