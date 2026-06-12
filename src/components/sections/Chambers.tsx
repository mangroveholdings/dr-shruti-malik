import React from "react";
import Image from "next/image";

const chambers = [
  {
    label: "Consultation Room",
    src: "/images/chambers/consultation/consultation-room-05.webp",
    alt: "Private patient consultation room at Radix Cosmo Dental, Nirman Vihar, East Delhi",
  },
  {
    label: "Kids' Chamber",
    src: "/images/chambers/kids/kids-chamber-01.webp",
    alt: "Child-friendly paediatric dental chamber at Radix Cosmo Dental, Nirman Vihar, East Delhi",
  },
  {
    label: "Treatment Suite",
    src: "/images/chambers/treatment/treatment-suite-01.webp",
    alt: "Advanced dental treatment suite with modern equipment at Radix Cosmo Dental, East Delhi",
  },
  {
    label: "Endodontic Suite",
    src: "/images/chambers/endodontic/endodontic-suite-01.webp",
    alt: "State-of-the-art endodontic treatment suite for root canal therapy at Radix Cosmo Dental, East Delhi",
  },
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
          Four dedicated treatment chambers — each designed for comfort,
          privacy, and precision care.
        </p>
      </div>

      <div className="lg-chambers-grid">
        {chambers.map((c) => (
          <div className="lg-chamber-card" key={c.label}>
            <div className="lg-chamber-img-wrap">
              <Image
                src={c.src}
                alt={c.alt}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={90}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="lg-chamber-label">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ChambersSection;
