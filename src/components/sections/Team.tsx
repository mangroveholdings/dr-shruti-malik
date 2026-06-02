import React from "react";
import Image from "next/image";
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
        <Image
          src="/images/team/full-team-2.png"
          alt="The Cosmo Dental Team"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Individual doctor cards */}
      <div className="lg-doctors-grid">
        {team.map((doctor) => (
          <div className="lg-doctor-card" key={doctor.name}>
            <div className="lg-doctor-photo">
              {doctor.photo ? (
                <Image
                  src={doctor.photo}
                  alt={doctor.name}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition:
                      (doctor as any).objectPosition ?? "center 20%",
                    filter: (doctor as any).brightness
                      ? `brightness(${(doctor as any).brightness})`
                      : undefined,
                  }}
                  quality={90}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              ) : (
                <div className="lg-doctor-avatar-placeholder">
                  {doctor.name.split(" ").slice(-1)[0].charAt(0)}
                </div>
              )}
            </div>
            <div className="lg-doctor-info">
              <h3>{doctor.name}</h3>
              <span className="lg-doctor-role">{doctor.role}</span>
              {(doctor as any).speciality && (
                <span className="lg-doctor-speciality">
                  {(doctor as any).speciality}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
