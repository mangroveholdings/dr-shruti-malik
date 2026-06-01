import React from "react";
import team from "@utils/siteSettings/team.json";

const TeamSection: React.FC = () => (
  <section className="lg-section" id="team">
    <div className="lg-container">
      <div className="lg-section-head">
        <span className="lg-eyebrow-plain">MEET OUR TEAM</span>
        <h2 className="lg-section-title">
          The <em>Cosmo Dental</em> Family
        </h2>
        <p className="lg-section-sub">
          A passionate team of specialists, united by one mission — delivering
          the finest dental care possible.
        </p>
      </div>

      {/* Group photo */}
      <div className="lg-team-group-photo">
        <img
          src="/images/team/full-team-2.png"
          alt="The Cosmo Dental Team"
          loading="lazy"
        />
      </div>

      {/* Individual doctor cards */}
      <div className="lg-doctors-grid">
        {team.map((doctor) => (
          <div className="lg-doctor-card" key={doctor.name}>
            <div className="lg-doctor-photo">
              <img
                src={doctor.photo}
                alt={doctor.name}
                loading="lazy"
                style={{
                  objectPosition: (doctor as any).objectPosition ?? "center 20%",
                  filter: (doctor as any).brightness
                    ? `brightness(${(doctor as any).brightness})`
                    : undefined,
                }}
              />
            </div>
            <div className="lg-doctor-info">
              <h3>{doctor.name}</h3>
              <span>{doctor.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
