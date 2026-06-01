import React from "react";
import { InlineWidget } from "react-calendly";
import info from "@utils/siteSettings/info.json";
import bookSettings from "@utils/siteSettings/book-appointment.json";

const BookingSection: React.FC = () => (
  <section className="lg-section" id="book-an-appointment">
    <div className="lg-container">
      <div className="lg-section-head">
        <span className="lg-eyebrow-plain">PICK YOUR PERFECT TIME</span>
        <h2 className="lg-section-title">
          Book Your Appointment With Dr. {info.name.split(" ")[0]}
        </h2>
      </div>

      <div className="lg-calendly-wrap">
        <InlineWidget
          url={bookSettings.calendlyLink}
          styles={{ width: "100%" }}
          pageSettings={{
            backgroundColor: "091529",
            primaryColor: "d4b88a",
            textColor: "f5ecd9",
          }}
        />
      </div>
    </div>
  </section>
);

export default BookingSection;
