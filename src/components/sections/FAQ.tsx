import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "Is root canal treatment (RCT) painful?",
    a: "No. At Radix Cosmo Dental, Dr. Shruti Malik uses advanced rotary endodontics and local anaesthesia to make root canal treatment completely painless. Most patients report the procedure feels no different from a routine filling.",
  },
  {
    q: "What is laser dental filling?",
    a: "Laser dental filling is a minimally invasive technique where a dental laser removes tooth decay without drill noise or vibration. It is faster, virtually painless, and requires little to no anaesthesia.",
  },
  {
    q: "Do you offer Invisalign clear aligners?",
    a: "Yes. We offer Invisalign clear aligners and traditional metal/ceramic braces for teeth straightening at our East Delhi clinic. Dr. Shruti Malik will recommend the best option based on your alignment needs.",
  },
  {
    q: "Is there a kids dentist near Nirman Vihar, East Delhi?",
    a: "Yes. Radix Cosmo Dental provides gentle paediatric dental care for children of all ages, including cavity treatment, fluoride application, dental sealants, and habit-breaking appliances.",
  },
  {
    q: "How much do dental implants cost in East Delhi?",
    a: "Dental implant cost depends on the number of implants and material chosen. We offer affordable single-tooth, multiple, and full-mouth implants with EMI options. Book a free consultation with Dr. Shruti Malik for an exact quote.",
  },
  {
    q: "Do you accept insurance or cashless treatment?",
    a: "We accept cash, card, and UPI payments. Please contact us directly to discuss insurance and cashless treatment options available at our clinic.",
  },
  {
    q: "How long does professional teeth whitening take?",
    a: "In-clinic professional teeth whitening at Radix Cosmo Dental typically takes 45–60 minutes. Results are immediately visible and can last 6–12 months with proper care.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call us immediately at 1800-120-5457. We prioritise emergency cases including severe toothache, broken teeth, dental abscess, and trauma. Same-day emergency appointments are available Mon–Sat.",
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="lg-section" id="faq">
      <div className="lg-container">
        <div className="lg-section-head">
          <span className="lg-eyebrow-plain">HAVE QUESTIONS?</span>
          <h2 className="lg-section-title">
            Frequently Asked <em>Questions</em>
          </h2>
          <p className="lg-section-sub">
            Answers to the most common questions about our treatments, pricing, and clinic.
          </p>
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
                <span className="lg-faq-icon">
                  <FaChevronDown />
                </span>
              </button>
              <div className="lg-faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
