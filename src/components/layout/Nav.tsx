import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import info from "@utils/siteSettings/info.json";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Treatments", href: "/#service" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/#media" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

const HomeNav: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="lg-nav">
        <div className="lg-nav-inner">
          <Link href="/" className="lg-logo" aria-label={`Dr. ${info.name} - Home`}>
            <span className="lg-logo-mark">S</span>
            <span className="lg-logo-text-wrap">
              <span className="lg-logo-name">
                Dr. <em>Shruti</em> Malik
              </span>
              <span className="lg-logo-tag">BDS &middot; MDS Endodontics</span>
            </span>
          </Link>

          <ul className="lg-nav-menu">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="lg-nav-cta">
            <Link href="/#book-an-appointment" className="lg-btn lg-btn-primary">
              Book Now
            </Link>
          </div>

          <button
            className="lg-mobile-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div className={`lg-mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#book-an-appointment"
              onClick={() => setMobileOpen(false)}
              className="lg-btn lg-btn-primary"
              style={{ width: "100%", marginTop: 8 }}
            >
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeNav;
