import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
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

      <div className="lg-contact-grid">
        <div className="lg-contact-info">
          <h3>Contact Details</h3>
          <p>We&apos;re here to help. Reach out anytime.</p>

          <div className="lg-contact-item">
            <div className="lg-contact-icon"><FaMapMarkerAlt /></div>
            <div className="lg-contact-text">
              <strong>Address</strong>
              <Link href={info.contact.addressLink} target="_blank" rel="noopener noreferrer">
                {info.contact.address}
              </Link>
            </div>
          </div>

          <div className="lg-contact-item">
            <div className="lg-contact-icon"><FaPhoneAlt /></div>
            <div className="lg-contact-text">
              <strong>Phone</strong>
              <Link href={`tel:${info.contact.phn}`}>{info.contact.phn}</Link>
            </div>
          </div>

          <div className="lg-contact-item">
            <div className="lg-contact-icon"><FaEnvelope /></div>
            <div className="lg-contact-text">
              <strong>Email</strong>
              <Link href={`mailto:${info.contact.email}`}>{info.contact.email}</Link>
            </div>
          </div>

          <div className="lg-contact-item">
            <div className="lg-contact-icon"><FaClock /></div>
            <div className="lg-contact-text">
              <strong>Hours</strong>
              Monday &ndash; Saturday
              <br />
              10:00 AM &ndash; 2:00 PM
              <br />
              6:00 PM &ndash; 8:30 PM
              <br />
              <span style={{ opacity: 0.7 }}>Sunday closed</span>
            </div>
          </div>
        </div>

        <div className="lg-map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5847596731847!2d77.28579937549574!3d28.638293384411654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2ba76d1c5d%3A0x0!2sNirman%20Vihar%2C%20Delhi%20110092!5e0!3m2!1sen!2sin!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Clinic Location"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
