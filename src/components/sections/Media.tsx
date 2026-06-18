import React, { useState } from "react";
import info from "@utils/siteSettings/info.json";
import newsFeatures from "@utils/siteSettings/news.json";

const MediaSection: React.FC = () => {
  const [hoveredMediaIdx, setHoveredMediaIdx] = useState<number | null>(null);

  return (
    <section className="lg-section" id="media">
      <div className="lg-container">
        <div className="lg-section-head">
          <span className="lg-eyebrow-plain">FEATURED ON</span>
          <h2 className="lg-section-title">
            <em>Leading News Platforms</em>
          </h2>
        </div>

        <div className="lg-media-grid">
          {newsFeatures.map((item, i) => {
            const name = item.logo
              .split("/")
              .pop()!
              .replace(/\.webp$/i, "")
              .replace(/_/g, " ")
              .replace(/-freelogovectors\.net/i, "")
              .replace(/logo/i, "")
              .trim();
            const previewSrc = item.link.includes("mute=")
              ? item.link
              : `${item.link}${item.link.includes("?") ? "&" : "?"}mute=1&controls=0&modestbranding=1&rel=0`;
            const mediaKey = `media-${i}`;
            const isPlaying = hoveredMediaIdx === 1000 + i;
            return (
              <div
                key={mediaKey}
                className={`lg-media-card ${isPlaying ? "is-playing" : ""}`}
                onMouseEnter={() => setHoveredMediaIdx(1000 + i)}
                onMouseLeave={() =>
                  setHoveredMediaIdx((prev) =>
                    prev === 1000 + i ? null : prev,
                  )
                }
                onClick={() =>
                  window.open(item.link, "_blank", "noopener,noreferrer")
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    window.open(item.link, "_blank", "noopener,noreferrer");
                  }
                }}
                aria-label={`Watch Dr. ${info.name} featured on ${name}`}
              >
                <img
                  src={item.logo}
                  alt={`${name} logo`}
                  loading="lazy"
                  className="lg-media-logo"
                />
                {isPlaying && (
                  <iframe
                    src={previewSrc}
                    title={`${name} feature`}
                    className="lg-media-iframe"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
