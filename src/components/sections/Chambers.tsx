import React from "react";

const chambers = [
  { label: "Consultation Room", src: "/images/chambers/consultation/DSC02483.JPG" },
  { label: "Kids' Chamber", src: "/images/chambers/kids/DSC02469.JPG" },
  { label: "Treatment Suite", src: "/images/chambers/treatment/DSC02468.JPG" },
  { label: "Endodontic Suite", src: "/images/chambers/endodontic/DSC02473.JPG" },
];

const ChambersSection: React.FC = () => (
  <section className="lg-section lg-section-tight" id="chambers">
    <div className="lg-container">
      <div className="lg-section-head">
        <span className="lg-eyebrow-plain">OUR TREATMENT CHAMBERS</span>
        <h2 className="lg-section-title">
          State-of-the-Art <em>Spaces</em>
        </h2>
        <p className="lg-section-sub">
          Four dedicated treatment chambers — each designed for comfort, privacy, and precision care.
        </p>
      </div>

      <div className="lg-chambers-grid">
        {chambers.map((c) => (
          <div className="lg-chamber-card" key={c.label}>
            <div className="lg-chamber-img-wrap">
              <img src={c.src} alt={c.label} loading="lazy" className="lg-chamber-img" />
            </div>
            <div className="lg-chamber-label">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ChambersSection;
