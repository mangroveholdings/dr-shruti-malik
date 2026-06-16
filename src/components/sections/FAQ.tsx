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
  {
    q: "Who is the best dentist in East Delhi?",
    a: "Dr. Shruti Malik at Radix Cosmo Dental, Nirman Vihar, is widely regarded as one of the best dentists in East Delhi. A BDS, MDS Endodontics specialist with 10+ years of experience, she is trusted by 5,000+ patients from Preet Vihar, Laxmi Nagar, Mayur Vihar, and across East Delhi.",
  },
  {
    q: "How do I choose the right dental clinic in East Delhi?",
    a: "Look for a clinic with advanced technology, experienced specialists, and genuine patient reviews. Radix Cosmo Dental offers dedicated suites for endodontics, paediatric dentistry, and cosmetic treatments — all under one roof in Nirman Vihar, East Delhi.",
  },
  {
    q: "What makes Dr. Shruti Malik stand out as a dentist in Delhi?",
    a: "Dr. Shruti Malik combines specialist MDS training in Endodontics with hands-on expertise in microscopic root canal treatment, laser dentistry, and smile makeovers. Her patient-first approach, advanced equipment, and consistently painless outcomes make her a top choice for dental care in Delhi and East Delhi.",
  },
  {
    q: "Is Radix Cosmo Dental good for families and children?",
    a: "Yes. We have a dedicated kids' dental chamber designed to make young patients feel at ease. Our paediatric dentist handles everything from cavity fillings and fluoride treatments to habit-breaking appliances — making us a trusted family dental clinic in East Delhi.",
  },
  {
    q: "Can I get a smile makeover at Radix Cosmo Dental?",
    a: "Absolutely. We offer complete smile makeovers combining teeth whitening, veneers, crowns, and Invisalign aligners. Dr. Shruti Malik and her team create personalised smile plans based on your facial profile and goals.",
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
