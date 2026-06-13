import React from "react";
import Image from "next/image";

interface SmileCase {
  name: string;
  treatment: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

const cases: SmileCase[] = [
  {
    name: "Anukriti Tyagi",
    treatment: "Smile Transformation",
    before: "/images/smile-gallery/anukriti-tyagi-before.webp",
    after: "/images/smile-gallery/anukriti-tyagi-after.webp",
    beforeAlt:
      "Anukriti Tyagi before dental treatment at Radix Cosmo Dental, Nirman Vihar, East Delhi",
    afterAlt:
      "Anukriti Tyagi smile transformation result at Radix Cosmo Dental, Nirman Vihar, East Delhi",
  },
  {
    name: "B.K. Sharma",
    treatment: "Smile Transformation",
    before: "/images/smile-gallery/bk-sharma-before.webp",
    after: "/images/smile-gallery/bk-sharma-after.webp",
    beforeAlt:
      "B.K. Sharma before dental treatment at Radix Cosmo Dental, Nirman Vihar, East Delhi",
    afterAlt:
      "B.K. Sharma smile transformation result at Radix Cosmo Dental, Nirman Vihar, East Delhi",
  },
  {
    name: "Roop Kishore",
    treatment: "Smile Transformation",
    before: "/images/smile-gallery/roop-kishore-before.webp",
    after: "/images/smile-gallery/roop-kishore-after.webp",
    beforeAlt:
      "Roop Kishore before dental treatment at Radix Cosmo Dental, Nirman Vihar, East Delhi",
    afterAlt:
      "Roop Kishore smile transformation result at Radix Cosmo Dental, Nirman Vihar, East Delhi",
  },
];

const SmileGallerySection: React.FC = () => (
  <section className="lg-section" id="smile-gallery">
    <div className="lg-container">
      <div className="lg-section-head">
        <span className="lg-eyebrow-plain">REAL RESULTS</span>
        <h2 className="lg-section-title">
          Smile <em>Transformations</em>
        </h2>
        <p className="lg-section-sub">
          Real patients, real smiles — treated at Radix Cosmo Dental, Nirman
          Vihar.
        </p>
      </div>

      <div className="lg-ba-cases">
        {cases.map((c) => (
          <div key={c.name} className="lg-ba-case">
            <div className="lg-ba-pair">
              <div className="lg-ba-side">
                <div className="lg-ba-img-wrap">
                  <Image
                    src={c.before}
                    alt={c.beforeAlt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    sizes="(max-width: 768px) 50vw, 20vw"
                    quality={88}
                  />
                </div>
                <span className="lg-ba-tag lg-ba-tag--before">Before</span>
              </div>

              <div className="lg-ba-side">
                <div className="lg-ba-img-wrap">
                  <Image
                    src={c.after}
                    alt={c.afterAlt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    sizes="(max-width: 768px) 50vw, 20vw"
                    quality={88}
                  />
                </div>
                <span className="lg-ba-tag lg-ba-tag--after">After</span>
              </div>
            </div>

            <div className="lg-ba-info">
              <span className="lg-ba-treatment">{c.treatment}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="lg-ba-consent">
        ✦ Images published with written patient consent. Individual results may
        vary.
      </p>
    </div>
  </section>
);

export default SmileGallerySection;
