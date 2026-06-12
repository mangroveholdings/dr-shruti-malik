import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaUserMd, FaMicroscope, FaHeart } from "react-icons/fa";
import info from "@utils/siteSettings/info.json";

const heroFeatures = [
  { icon: <FaUserMd />, title: "10+ Years of Expertise", text: "Specialist endodontic care backed by experience." },
  { icon: <FaMicroscope />, title: "Advanced Technology", text: "Microscopic precision for better outcomes." },
  { icon: <FaHeart />, title: "Patient Comfort", text: "Gentle, stress-free care in a calm environment." },
];

const HomeHero: React.FC = () => (
  <section className="lg-hero" id="home">
    <div className="lg-container">
      <div className="lg-hero-layout">
        <div className="lg-hero-left">
          <span className="lg-eyebrow lg-eyebrow-plain">DENTISTRY THAT&apos;S</span>
          <h1 className="lg-hero-headline">
            Painless &amp;<br /><em>Precise</em><br /><em>Dentistry</em>
          </h1>
          <p className="lg-hero-desc">
            Advanced care. Gentle approach. Delivering beautiful, healthy smiles with expertise you can trust.
          </p>
          <div className="lg-hero-ctas">
            <Link href="#book-an-appointment" className="lg-btn lg-btn-primary">
              Book Your Consultation
            </Link>
            <Link href={`tel:${info.contact.phn}`} className="lg-btn lg-btn-dark">
              <FaPhoneAlt size={11} /> {info.contact.phn}
            </Link>
          </div>
        </div>

        <div className="lg-hero-right">
          <div className="lg-hero-photo-circle">
            <Image
              src="/images/doctors/shruti/dr-shruti-malik-13.webp"
              alt="Dr. Shruti Malik — BDS, MDS Endodontist and Director at Radix Cosmo Dental, Nirman Vihar, East Delhi"
              fill
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
              priority
              quality={90}
              sizes="(max-width: 768px) 300px, 500px"
            />
          </div>
        </div>
      </div>

      <div className="lg-hero-features">
        {heroFeatures.map((f) => (
          <div className="lg-hero-feature" key={f.title}>
            <div className="lg-hero-feature-icon">{f.icon}</div>
            <div><h3>{f.title}</h3><p>{f.text}</p></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeHero;
