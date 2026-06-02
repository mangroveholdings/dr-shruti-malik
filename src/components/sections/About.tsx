import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import info from "@utils/siteSettings/info.json";
import about from "@utils/siteSettings/about.json";

const essentialCarePoints = [
  "BDS, MDS (Endodontics)",
  "10+ Years of Experience",
  "Director & Head of Department",
  "Trusted by 5,000+ Patients",
];

const AboutSection: React.FC = () => (
  <section className="lg-section lg-section-tight" id="about">
    <div className="lg-container">
      <div className="lg-essential-grid">
        <div className="lg-essential-photo">
          <Image
            src="/images/doctors/shruti/DSC02454.JPG"
            alt={`Dr. ${info.name} at work`}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={90}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="lg-essential-stat lg-essential-stat-top">
            <div className="lg-essential-stat-num">5,000+</div>
            <div className="lg-essential-stat-label">Smiles</div>
          </div>
          <div className="lg-essential-stat lg-essential-stat-bottom">
            <div className="lg-essential-stat-num">{about.customerSatisfaction}%</div>
            <div className="lg-essential-stat-label">Success<br />Rate</div>
          </div>
        </div>

        <div className="lg-essential-text">
          <span className="lg-eyebrow-plain">ABOUT DR. SHRUTI</span>
          <h2 className="lg-essential-title">Meet Dr. <em>Shruti Malik</em></h2>
          <div className="lg-essential-role">
            Director &amp; Head of Department &middot; Malik Radix Healthcare
            <br />
            <span>Dentist &middot; Endodontist &middot; 10+ Years Experience</span>
          </div>
          <p>
            A passionate Endodontist on a mission for perfect oral health. With a BDS &amp; MDS
            (Endodontics) from Lucknow and a decade of experience treating thousands, she
            champions Community &amp; Family Dentistry at Radix Cosmo Dental &mdash; where the
            best equipment meets the most skilled hands.
          </p>
          <ul className="lg-essential-points">
            {essentialCarePoints.map((p) => (
              <li key={p}>
                <span className="lg-essential-check"><FaCheck /></span>
                {p}
              </li>
            ))}
          </ul>
          <div className="lg-essential-ctas">
            <Link href="#book-an-appointment" className="lg-btn lg-btn-primary">
              Book Your Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
