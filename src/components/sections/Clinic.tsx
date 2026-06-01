import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import clinic from "@utils/siteSettings/clinic.json";

const ClinicSection: React.FC = () => (
  <section className="lg-section" id="clinic">
    <div className="lg-container">
      <div className="lg-section-head">
        <span className="lg-eyebrow-plain">INSIDE OUR CLINIC</span>
        <h2 className="lg-section-title">
          A Space Built for <em>Your Comfort</em>
        </h2>
        <p className="lg-section-sub">{clinic.subtitle}</p>
      </div>

      <div className="lg-clinic-bento">
        {clinic.photos.map((photo, i) => (
          <div
            className={`lg-clinic-bento-item${i === 0 ? " lg-clinic-bento-featured" : ""}`}
            key={photo.src}
          >
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <div className="lg-clinic-caption">{photo.caption}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
        <Link href="/gallery" className="lg-btn lg-btn-ghost">
          View Full Gallery <FaArrowRight size={11} />
        </Link>
      </div>
    </div>
  </section>
);

export default ClinicSection;
