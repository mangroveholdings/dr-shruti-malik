import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaPlay } from "react-icons/fa";

import { NextSeo } from "next-seo";
import portfolio from "@utils/siteSettings/portfolio.json";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

type GalleryItem = (typeof portfolio.data)[number];

const isVideo = (item: GalleryItem) =>
  item.category === "Youtube" || item.category === "Shorts";

const categoryLabels: Record<string, string> = {
  "*": "All",
  Youtube: "YouTube",
  Shorts: "Shorts",
  Gallery: "Gallery",
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("*");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const photoOrder = ["Chambers", "Gallery", "Team"];
  const filteredItems = useMemo(() => {
    const items =
      activeCategory === "*"
        ? [...portfolio.data]
        : portfolio.data.filter((item) => item.category === activeCategory);
    if (activeCategory === "*") {
      items.sort((a, b) => {
        const aPhoto = photoOrder.includes(a.category);
        const bPhoto = photoOrder.includes(b.category);
        if (aPhoto && !bPhoto) return -1;
        if (!aPhoto && bPhoto) return 1;
        return photoOrder.indexOf(a.category) - photoOrder.indexOf(b.category);
      });
    }
    return items;
  }, [activeCategory]);

  const countFor = (cat: string) =>
    cat === "*"
      ? portfolio.data.length
      : portfolio.data.filter((item) => item.category === cat).length;

  return (
    <>
      <NextSeo
        title="Clinic Gallery & Videos | Dr. Shruti Malik — Radix Cosmo Dental"
        description="Explore our clinic gallery — treatment rooms, our team of doctors, patient care videos, and a glimpse inside Radix Cosmo Dental, Nirman Vihar, East Delhi."
        canonical="https://drshrutimalik.com/gallery"
        openGraph={{
          title: "Clinic Gallery & Videos | Dr. Shruti Malik — Radix Cosmo Dental",
          description: "Explore our clinic gallery — treatment rooms, our team of doctors, patient care videos, and a glimpse inside Radix Cosmo Dental, Nirman Vihar, East Delhi.",
          url: "https://drshrutimalik.com/gallery",
          images: [{ url: "https://drshrutimalik.com/Shruti.png", width: 1200, height: 630, alt: "Radix Cosmo Dental Gallery" }],
        }}
      />
      <div className="lg-root">
        <Nav />

        {/* ====== PAGE HERO ====== */}
        <section className="lg-page-hero">
          <div className="lg-container">
            <Link href="/" className="lg-page-back">
              <FaArrowLeft size={11} /> Back to Home
            </Link>
            <span className="lg-eyebrow-plain">OUR PRACTICE</span>
            <h1 className="lg-page-title">
              Inside <em>Our Clinic</em>
            </h1>
            <p className="lg-page-sub">
              A glimpse of our space, our team, and the care we deliver every day.
            </p>
          </div>
        </section>

        {/* ====== FILTERS + GRID ====== */}
        <section className="lg-section-tight">
          <div className="lg-container">
            <div className="lg-gallery-filters" role="tablist" aria-label="Gallery categories">
              {portfolio.categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`lg-gallery-filter ${activeCategory === cat ? "is-active" : ""}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setHoveredIdx(null);
                  }}
                >
                  {categoryLabels[cat] ?? cat}
                  <span className="lg-gallery-filter-count">{countFor(cat)}</span>
                </button>
              ))}
            </div>

            <div className="lg-gallery-page-grid">
              {filteredItems.map((item, i) => {
                const itemIsVideo = isVideo(item);
                const isPlaying = hoveredIdx === i && itemIsVideo;
                const previewSrc = itemIsVideo
                  ? `${item.link}${item.link.includes("?") ? "&" : "?"}mute=1&controls=0&modestbranding=1&rel=0&autoplay=1`
                  : item.link;
                const isFeatured = i % 5 === 0;
                return (
                  <div
                    key={`${item.title}-${i}`}
                    className={`lg-gallery-page-card ${itemIsVideo ? "is-video" : ""} ${
                      isPlaying ? "is-playing" : ""
                    } ${isFeatured ? "is-featured" : ""}`}
                    onMouseEnter={() => itemIsVideo && setHoveredIdx(i)}
                    onMouseLeave={() =>
                      setHoveredIdx((prev) => (prev === i ? null : prev))
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
                    aria-label={item.title}
                  >
                    <img src={item.imageSrc} alt={item.title} loading="lazy" />

                    <div className="lg-gallery-card-cat-badge">{categoryLabels[item.category] ?? item.category}</div>

                    {itemIsVideo && !isPlaying && (
                      <div className="lg-gallery-play" aria-hidden="true">
                        <FaPlay />
                      </div>
                    )}
                    {isPlaying && (
                      <iframe
                        key={`g-iframe-${i}`}
                        src={previewSrc}
                        title={item.title}
                        className="lg-gallery-iframe"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    )}

                    <div className="lg-gallery-card-overlay">
                      <div className="lg-gallery-card-title">{item.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <p className="lg-gallery-empty">No items in this category yet.</p>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
