import React from "react";
import {
  FaTooth,
  FaTeeth,
  FaTeethOpen,
  FaCrown,
  FaShieldAlt,
  FaMagic,
  FaGem,
  FaSmile,
  FaChild,
  FaSun,
  FaStar,
} from "react-icons/fa";
import services from "@utils/siteSettings/service.json";

const serviceIcons: Record<string, JSX.Element> = {
  "Scaling And Polishing": <FaTeeth />,
  "Root Canal Treatment": <FaTeethOpen />,
  "Dental Fillings": <FaTooth />,
  "Dental Bridges & Crowns": <FaCrown />,
  "Wisdom Tooth Extraction": <FaTooth />,
  "Dental Implants": <FaShieldAlt />,
  "Laser Gum De-pigmentation": <FaMagic />,
  "Veneers Treatment": <FaGem />,
  "Braces and Aligners": <FaSmile />,
  "Paediatric dentistry": <FaChild />,
  "Teeth Whitening": <FaSun />,
  "Cosmetic Dentistry": <FaStar />,
};

const ServicesSection: React.FC = () => (
  <section className="lg-section" id="service">
    <div className="lg-container">
      <div className="lg-section-head">
        <span className="lg-eyebrow-plain">OUR SERVICES</span>
        <h2 className="lg-section-title">
          Complete <em>Dental Care</em>
        </h2>
        <p className="lg-section-sub">
          Comprehensive solutions for your healthiest smile.
        </p>
      </div>

      <div className="lg-services-grid">
        {services.map((s) => (
          <div className="lg-service-card" key={s.title}>
            <div className="lg-service-icon">{serviceIcons[s.title] ?? <FaTooth />}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
