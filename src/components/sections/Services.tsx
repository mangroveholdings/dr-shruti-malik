import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import services from "@utils/siteSettings/service.json";

const slugMap: Record<string, string> = {
  "Scaling And Polishing":      "scaling-and-polishing",
  "Root Canal Treatment":       "root-canal-treatment",
  "Dental Fillings":            "dental-fillings",
  "Dental Bridges & Crowns":    "dental-bridges-crowns",
  "Wisdom Tooth Extraction":    "wisdom-tooth-extraction",
  "Dental Implants":            "dental-implants",
  "Laser Gum De-pigmentation":  "laser-gum-depigmentation",
  "Veneers Treatment":          "veneers-treatment",
  "Braces and Aligners":        "braces-and-aligners",
  "Paediatric dentistry":       "paediatric-dentistry",
  "Teeth Whitening":            "teeth-whitening",
  "Cosmetic Dentistry":         "cosmetic-dentistry",
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
        {services.map((s) => {
          const slug = slugMap[s.title];
          return (
            <Link
              href={slug ? `/treatments/${slug}` : "/#service"}
              key={s.title}
              className="lg-service-card lg-service-card-link"
            >
              <div className="lg-service-icon">
                <img src={s.icon} alt={s.title} loading="lazy" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <span className="lg-service-learn-more">
                Learn more <FaArrowRight />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;
