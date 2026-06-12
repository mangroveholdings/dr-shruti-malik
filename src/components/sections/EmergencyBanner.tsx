import React from "react";
import { FaPhoneAlt, FaExclamationTriangle } from "react-icons/fa";
import info from "@utils/siteSettings/info.json";

const EmergencyBanner: React.FC = () => (
  <div className="lg-container" style={{ position: "relative", zIndex: 1 }}>
    <div className="lg-emergency-inner">
      <div className="lg-emergency-icon">
        <FaExclamationTriangle />
      </div>
      <div className="lg-emergency-text">
        <strong>Dental Emergency?</strong>
        <span>Severe toothache, broken tooth, or trauma — we&apos;re here for you. Same-day appointments available.</span>
      </div>
      <a href={`tel:${info.contact.phn}`} className="lg-btn lg-btn-emergency">
        <FaPhoneAlt /> Call Now: {info.contact.phn}
      </a>
    </div>
  </div>
);

export default EmergencyBanner;
