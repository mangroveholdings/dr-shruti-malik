import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { FaArrowLeft, FaCheckCircle, FaPhoneAlt, FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import treatments, { Treatment } from "@utils/siteSettings/treatments";

/* ── static generation ───────────────────────────────────────── */
export const getStaticPaths: GetStaticPaths = () => ({
  paths: treatments.map((t) => ({ params: { slug: t.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ treatment: Treatment }> = ({ params }) => {
  const treatment = treatments.find((t) => t.slug === params?.slug) ?? null;
  if (!treatment) return { notFound: true };
  return { props: { treatment } };
};

/* ── page component ─────────────────────────────────────────── */
export default function TreatmentPage({ treatment }: { treatment: Treatment }) {
  const related = treatments.filter((t) => treatment.relatedSlugs.includes(t.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.title,
    description: treatment.metaDescription,
    url: `https://drshrutimalik.com/treatments/${treatment.slug}`,
    procedureType: "https://schema.org/TherapeuticProcedure",
    followup: "Follow-up appointment at Radix Cosmo Dental, Nirman Vihar, East Delhi",
    howPerformed: treatment.steps.map((s) => s.desc).join(" "),
    performer: {
      "@type": "Physician",
      name: "Dr. Shruti Malik",
      url: "https://drshrutimalik.com",
    },
  };

  return (
    <div className="lg-root">
      <NextSeo
        title={treatment.metaTitle}
        description={treatment.metaDescription}
        canonical={`https://drshrutimalik.com/treatments/${treatment.slug}`}
        openGraph={{
          title: treatment.metaTitle,
          description: treatment.metaDescription,
          url: `https://drshrutimalik.com/treatments/${treatment.slug}`,
        }}
        additionalMetaTags={[{ name: "keywords", content: treatment.keywords }]}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Nav />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="lg-tx-hero">
        <div className="lg-container">
          <Link href="/#service" className="lg-page-back">
            <FaArrowLeft /> All Treatments
          </Link>
          <div className="lg-tx-hero-inner">
            <div className="lg-tx-hero-text">
              <span className="lg-eyebrow-plain">RADIX COSMO DENTAL · {treatment.title.toUpperCase()}</span>
              <h1 className="lg-tx-headline">{treatment.headline}</h1>
              <p className="lg-tx-subheadline">{treatment.subheadline}</p>
              <div className="lg-tx-hero-ctas">
                <Link href="/#book-an-appointment" className="lg-btn lg-btn-primary">
                  <FaCalendarAlt /> Book Appointment
                </Link>
                <a href="tel:1800-120-5457" className="lg-btn lg-btn-dark">
                  <FaPhoneAlt /> 1800-120-5457
                </a>
              </div>
            </div>

            {/* Highlights */}
            <div className="lg-tx-highlights">
              {treatment.highlights.map((h) => (
                <div key={h.label} className="lg-tx-highlight-item">
                  <span className="lg-tx-highlight-val">{h.value}</span>
                  <span className="lg-tx-highlight-lbl">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────── */}
      <section className="lg-section lg-section-tight" id="overview">
        <div className="lg-container">
          <div className="lg-tx-two-col">
            <div className="lg-tx-overview-text">
              <span className="lg-eyebrow-plain">OVERVIEW</span>
              <h2 className="lg-section-title" style={{ textAlign: "left", margin: "12px 0 20px" }}>
                About <em>{treatment.title}</em>
              </h2>
              <p className="lg-tx-body">{treatment.overview}</p>

              <ul className="lg-tx-benefits">
                {treatment.benefits.map((b) => (
                  <li key={b}>
                    <span className="lg-tx-benefit-icon"><FaCheckCircle /></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div className="lg-tx-steps">
              <span className="lg-eyebrow-plain">THE PROCESS</span>
              <h3 className="lg-tx-steps-heading">Step-by-Step</h3>
              <ol className="lg-tx-step-list">
                {treatment.steps.map((s, i) => (
                  <li key={s.title} className="lg-tx-step">
                    <span className="lg-tx-step-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{s.title}</strong>
                      <p>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <TreatmentFAQ faqs={treatment.faqs} title={treatment.title} />

      {/* ── Related Treatments ───────────────────────── */}
      {related.length > 0 && (
        <section className="lg-section lg-section-tight">
          <div className="lg-container">
            <div className="lg-section-head">
              <span className="lg-eyebrow-plain">EXPLORE MORE</span>
              <h2 className="lg-section-title">Related <em>Treatments</em></h2>
            </div>
            <div className="lg-tx-related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/treatments/${r.slug}`} className="lg-tx-related-card">
                  <img src={r.icon} alt={r.title} width={40} height={40} />
                  <div>
                    <strong>{r.title}</strong>
                    <span>{r.subheadline.split("—")[0].trim()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Banner ───────────────────────────────── */}
      <section className="lg-section lg-section-tight">
        <div className="lg-container">
          <div className="lg-tx-cta-banner">
            <div>
              <h2 className="lg-tx-cta-heading">Ready to get started?</h2>
              <p>Book a consultation with Dr. Shruti Malik at Radix Cosmo Dental, Nirman Vihar, East Delhi.</p>
            </div>
            <div className="lg-tx-cta-actions">
              <Link href="/#book-an-appointment" className="lg-btn lg-btn-primary">
                <FaCalendarAlt /> Book Online
              </Link>
              <a href="tel:1800-120-5457" className="lg-btn lg-btn-dark">
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ── FAQ accordion (client-interactive) ─────────────────────── */
function TreatmentFAQ({ faqs, title }: { faqs: Treatment["faqs"]; title: string }) {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <section className="lg-section lg-section-tight">
      <div className="lg-container">
        <div className="lg-section-head">
          <span className="lg-eyebrow-plain">FAQ</span>
          <h2 className="lg-section-title"><em>{title}</em> — Common Questions</h2>
        </div>
        <div className="lg-faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`lg-faq-item${open === idx ? " open" : ""}`}>
              <button
                className="lg-faq-question"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span>{faq.q}</span>
                <span className="lg-faq-icon"><FaChevronDown /></span>
              </button>
              <div className="lg-faq-answer"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
