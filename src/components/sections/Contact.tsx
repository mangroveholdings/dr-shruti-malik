import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaStar, FaWhatsapp } from "react-icons/fa";
import info from "@utils/siteSettings/info.json";

const ContactSection: React.FC = () => (
  <section className="lg-section" id="contact">
    <div className="lg-container">
      <div className="lg-section-head">
        <span className="lg-eyebrow-plain">GET IN TOUCH</span>
        <h2 className="lg-section-title">
          Visit Our <em>Clinic</em>
        </h2>
        <p className="lg-section-sub">
          Conveniently located in East Delhi. Walk in or book an appointment online.
        </p>
      </div>

      {/* Info strip */}
      <div className="lg-contact-strip">
        <div className="lg-contact-strip-item">
          <div className="lg-contact-strip-icon"><FaMapMarkerAlt /></div>
          <div className="lg-contact-strip-text">
            <strong>Address</strong>
            <Link href={info.contact.addressLink} target="_blank" rel="noopener noreferrer">
              {info.contact.address}
            </Link>
          </div>
        </div>
        <div className="lg-contact-strip-item lg-phone-card">
          <strong className="lg-phone-card-label">Call / WhatsApp</strong>
          <div className="lg-phone-row">
            <span className="lg-phone-row-icon lg-phone-row-icon--call"><FaPhoneAlt /></span>
            <div>
              <span className="lg-phone-row-tag">Helpline</span>
              <Link href={`tel:${info.contact.phn}`} className="lg-phone-row-num">{info.contact.phn}</Link>
            </div>
          </div>
          <div className="lg-phone-divider" />
          <div className="lg-phone-row">
            <span className="lg-phone-row-icon lg-phone-row-icon--wa"><FaWhatsapp /></span>
            <div>
              <span className="lg-phone-row-tag">WhatsApp</span>
              <Link
                href={`https://wa.me/${(info.contact as any).whatsappPhn}?text=${encodeURIComponent("Hello Dr. Shruti, I'd like to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="lg-phone-row-num"
              >
                +91 98115 50650
              </Link>
            </div>
          </div>
        </div>
        <div className="lg-contact-strip-item">
          <div className="lg-contact-strip-icon"><FaClock /></div>
          <div className="lg-contact-strip-text">
            <strong>Clinic Hours</strong>
            <span className="lg-hours-slot">10:00 AM – 2:00 PM</span>
            <span className="lg-hours-slot">6:00 PM – 8:30 PM</span>
            <span className="lg-hours-days">Mon – Sat &nbsp;·&nbsp; Sun Closed</span>
          </div>
        </div>
        <div className="lg-contact-strip-item">
          <div className="lg-contact-strip-icon"><FaEnvelope /></div>
          <div className="lg-contact-strip-text">
            <strong>Email</strong>
            <Link href={`mailto:${info.contact.email}`}>{info.contact.email}</Link>
          </div>
        </div>
      </div>

      {/* Full-width map with overlay card */}
      <div className="lg-map-redesign">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954!2d77.288039!3d28.6354172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb55e077a683%3A0x17bea14df2def9ce!2sDr.+Shruti+Malik!5e0!3m2!1sen!2sin!4v1700000000000"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="Radix Cosmo Dental — Nirman Vihar, East Delhi"
        />

        <div className="lg-map-overlay-card">
          <div className="lg-map-overlay-top">
            <div>
              <div className="lg-map-overlay-name">Radix Cosmo Dental</div>
              <div className="lg-map-overlay-sub">Nirman Vihar, Vikas Marg · East Delhi 110092</div>
            </div>
            <div className="lg-map-overlay-rating">
              <FaStar /> 4.9
            </div>
          </div>
          <div className="lg-map-overlay-actions">
            <Link
              href={info.contact.addressLink}
              target="_blank"
              rel="noopener noreferrer"
              className="lg-btn lg-btn-primary"
            >
              <FaMapMarkerAlt /> Get Directions
            </Link>
            <Link href={`tel:${info.contact.phn}`} className="lg-btn lg-btn-dark">
              <FaPhoneAlt /> Call Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
