import React from "react";
import { FaUserMd, FaShieldAlt, FaRegCheckCircle } from "react-icons/fa";

const whyUsCards = [
  {
    icon: <FaUserMd />,
    title: "Experience & Knowledge",
    text: "10+ years of focused expertise in endodontics and complex root canal treatments.",
  },
  {
    icon: <FaShieldAlt />,
    title: "State-of-the-art Sterilization",
    text: "Highest standards of sterilization and safety to ensure a completely hygienic experience.",
  },
  {
    icon: <FaRegCheckCircle />,
    title: "Safe & Successful",
    text: "Evidence-based protocols that ensure predictable, long-lasting results.",
  },
];

const WhyUsSection: React.FC = () => (
  <section className="lg-section" id="why-us">
    <div className="lg-container">
      <div className="lg-section-head">
        <span className="lg-eyebrow-plain">WHY CHOOSE US</span>
        <h2 className="lg-section-title">
          Experience the <em>Difference</em>
        </h2>
        <p className="lg-section-sub">
          Thoughtful care. Advanced skills. Lasting results.
        </p>
      </div>

      <div className="lg-cards-3">
        {whyUsCards.map((item) => (
          <div className="lg-why-card" key={item.title}>
            <div className="lg-why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
