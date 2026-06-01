import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaGoogle } from "react-icons/fa";
import testimonials from "@utils/siteSettings/testimonial.json";

const avatarColors = [
  "#b89968", "#7c6b4e", "#9a7c5a", "#c4a87a", "#8a7055",
  "#d4a96a", "#6b5c42", "#b8956a", "#a08060", "#c8a878",
];

const TestimonialsSection: React.FC = () => (
  <section className="lg-section" id="reviews">
    <div className="lg-container">

      {/* Header */}
      <div className="lg-section-head">
        <span className="lg-eyebrow-plain">PATIENT REVIEWS</span>
        <h2 className="lg-section-title">
          What Our <em>Patients</em> Say
        </h2>
      </div>

      {/* Google rating bar */}
      <div className="lg-reviews-summary">
        <div className="lg-reviews-rating-big">4.9</div>
        <div className="lg-reviews-rating-detail">
          <div className="lg-stars lg-stars-lg">
            {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
          </div>
          <span className="lg-reviews-count">Based on 200+ Google Reviews</span>
        </div>
        <div className="lg-reviews-google-logo">
          <FaGoogle />
          <span>Google</span>
        </div>
      </div>

      {/* Carousel */}
      <div className="lg-testimonials-carousel">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          loop
          grabCursor
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={t.name}>
              <div className="lg-testimonial-card">

                {/* Top row: stars + Google icon */}
                <div className="lg-testimonial-top">
                  <div className="lg-stars">
                    {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
                  </div>
                  <div className="lg-testimonial-google-badge">
                    <FaGoogle />
                  </div>
                </div>

                {/* Quote */}
                <p className="lg-testimonial-text">{t.details}</p>

                {/* Author */}
                <div className="lg-testimonial-author">
                  <div
                    className="lg-testimonial-avatar"
                    style={{ background: avatarColors[idx % avatarColors.length] }}
                  >
                    {t.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="lg-testimonial-author-info">
                    <div className="lg-testimonial-name">{t.name}</div>
                    <div className="lg-testimonial-source">Google Review</div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA */}
      <div className="lg-reviews-cta">
        <a
          href="https://www.google.com/search?q=Radix+Healthcare+Dr+Shruti+Malik+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="lg-btn lg-btn-ghost"
        >
          <FaGoogle style={{ color: "#4285F4" }} /> View All Reviews on Google
        </a>
      </div>

    </div>
  </section>
);

export default TestimonialsSection;
