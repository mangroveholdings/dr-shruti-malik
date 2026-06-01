import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
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
  const close = () => setMobileOpen(false);

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

      {/* Backdrop */}
      <div
        className={`lg-drawer-backdrop ${mobileOpen ? "open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Right sidebar drawer */}
      <div className={`lg-mobile-drawer ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="lg-drawer-header">
          <Link href="/" className="lg-logo" onClick={close}>
            <span className="lg-logo-mark">S</span>
            <span className="lg-logo-text-wrap">
              <span className="lg-logo-name">Dr. <em>Shruti</em> Malik</span>
              <span className="lg-logo-tag">BDS &middot; MDS Endodontics</span>
            </span>
          </Link>
          <button className="lg-drawer-close" onClick={close} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>

        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={close}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg-drawer-cta">
          <Link
            href="/#book-an-appointment"
            onClick={close}
            className="lg-btn lg-btn-primary"
          >
            Book Appointment
          </Link>
          <div className="lg-drawer-actions">
            <a
              href={`tel:${info.contact.phn}`}
              className="lg-drawer-action-btn"
            >
              <FaPhoneAlt /> Call Us
            </a>
            <a
              href={info.contact.addressLink}
              target="_blank"
              rel="noopener noreferrer"
              className="lg-drawer-action-btn"
            >
              <FaMapMarkerAlt /> Directions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNav;
