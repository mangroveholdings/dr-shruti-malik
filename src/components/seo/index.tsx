import { DefaultSeo as NextDefaultSeo } from "next-seo";
import Head from "next/head";
import siteSettings from "@utils/siteSettings/siteSettings.json";
import info from "@utils/siteSettings/info.json";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Dentist", "LocalBusiness", "MedicalBusiness", "MedicalOrganization"],
      "@id": "https://drshrutimalik.com/#practice",
      name: "Radix Cosmo Dental — Dr. Shruti Malik",
      alternateName: [
        "Malik Radix Healthcare",
        "Radix Healthcare Nirman Vihar",
      ],
      description: siteSettings.description,
      url: "https://drshrutimalik.com",
      telephone: info.contact.phn,
      email: info.contact.email,
      image: "https://drshrutimalik.com/Shruti.png",
      logo: "https://drshrutimalik.com/Shruti.png",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Card, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "C/217 - C/218, Nirman Vihar, Vikas Marg",
        addressLocality: "East Delhi",
        addressRegion: "Delhi",
        postalCode: "110092",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.638293,
        longitude: 77.285799,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "14:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "18:00",
          closes: "20:30",
        },
      ],
      medicalSpecialty: [
        "Endodontics",
        "General Dentistry",
        "Cosmetic Dentistry",
        "Orthodontics",
        "Paediatric Dentistry",
        "Implantology",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dental Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Painless Root Canal Treatment",
              alternateName: ["RCT", "Endodontic Treatment"],
              description:
                "Pain-free root canal treatment in East Delhi using advanced rotary endodontics and single-sitting RCT by specialist endodontist Dr. Shruti Malik.",
              procedureType: "https://schema.org/TherapeuticProcedure",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Laser Dental Filling",
              alternateName: ["Laser Cavity Treatment", "Laser Tooth Filling"],
              description:
                "Painless laser dental fillings for cavities in East Delhi. Minimally invasive laser dentistry for tooth decay treatment.",
              procedureType: "https://schema.org/TherapeuticProcedure",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Invisalign & Dental Braces",
              alternateName: [
                "Clear Aligners",
                "Invisible Braces",
                "Orthodontic Treatment",
                "Metal Braces",
              ],
              description:
                "Straighten teeth with Invisalign clear aligners or metal/ceramic braces in East Delhi. Expert orthodontic treatment at Radix Cosmo Dental, Nirman Vihar.",
              procedureType: "https://schema.org/TherapeuticProcedure",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Paediatric Dentistry",
              alternateName: ["Kids Dentist", "Children Dental Treatment", "Pediatric Dentistry"],
              description:
                "Gentle, child-friendly dental care in East Delhi. Tooth decay treatment, fluoride application, sealants and more for infants, children and teenagers.",
              procedureType: "https://schema.org/TherapeuticProcedure",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Dental Implants",
              alternateName: [
                "Tooth Implant",
                "Single Tooth Implant",
                "Full Mouth Implants",
              ],
              description:
                "Permanent tooth replacement with dental implants in East Delhi. Single, multiple and full-mouth implants by expert implantologist at Radix Cosmo Dental.",
              procedureType: "https://schema.org/TherapeuticProcedure",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Teeth Whitening",
              description:
                "Professional teeth whitening and bleaching treatment in East Delhi for a brighter, whiter smile.",
              procedureType: "https://schema.org/TherapeuticProcedure",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Dental Crowns & Bridges",
              description:
                "High-quality ceramic and zirconia crowns and bridges to restore damaged or missing teeth in East Delhi.",
              procedureType: "https://schema.org/TherapeuticProcedure",
            },
          },
        ],
      },
      hasMap: info.contact.addressLink,
      areaServed: [
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "East Delhi" },
        { "@type": "City", name: "New Delhi" },
        { "@type": "Neighborhood", name: "Nirman Vihar" },
        { "@type": "Neighborhood", name: "Vikas Marg" },
        { "@type": "Neighborhood", name: "Preet Vihar" },
        { "@type": "Neighborhood", name: "Pandav Nagar" },
        { "@type": "Neighborhood", name: "Laxmi Nagar" },
        { "@type": "Neighborhood", name: "Shakarpur" },
        { "@type": "Neighborhood", name: "Krishna Nagar" },
        { "@type": "Neighborhood", name: "Mayur Vihar" },
        { "@type": "Neighborhood", name: "Patparganj" },
        { "@type": "Neighborhood", name: "IP Extension" },
      ],
      sameAs: [
        "https://www.facebook.com/shruti08malik/",
        "https://twitter.com/shruti08malik/",
        "https://www.linkedin.com/in/drshrutimalik/",
        "https://www.instagram.com/drshrutimalik.08/",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "200",
        bestRating: "5",
      },
    },
    {
      "@type": "Physician",
      "@id": "https://drshrutimalik.com/#doctor",
      name: "Dr. Shruti Malik",
      givenName: "Shruti",
      familyName: "Malik",
      honorificPrefix: "Dr.",
      jobTitle: "Endodontist & Dentist",
      description:
        "Dr. Shruti Malik is a BDS, MDS (Endodontics) specialist with 10+ years of experience, Head of Department at Radix Cosmo Dental, Nirman Vihar, East Delhi. Trusted by 5,000+ patients.",
      medicalSpecialty: "Endodontics",
      image: "https://drshrutimalik.com/Shruti.png",
      url: "https://drshrutimalik.com",
      worksFor: { "@id": "https://drshrutimalik.com/#practice" },
      alumniOf: "King George's Medical University, Lucknow",
      knowsAbout: [
        "Root Canal Treatment",
        "Painless Root Canal",
        "Single Sitting RCT",
        "Dental Implants",
        "Single Tooth Implant",
        "Full Mouth Implants",
        "Endodontics",
        "Cosmetic Dentistry",
        "Invisalign Clear Aligners",
        "Braces and Aligners",
        "Orthodontics",
        "Laser Dental Filling",
        "Laser Dentistry",
        "Paediatric Dentistry",
        "Kids Dentistry",
        "Teeth Whitening",
        "Dental Crowns",
        "Veneers",
        "Laser Gum Depigmentation",
      ],
      sameAs: [
        "https://www.linkedin.com/in/drshrutimalik/",
        "https://www.instagram.com/drshrutimalik.08/",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://drshrutimalik.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is root canal treatment painful in East Delhi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. At Radix Cosmo Dental, Dr. Shruti Malik uses advanced rotary endodontics and local anaesthesia to make root canal treatment completely painless. Most patients report the procedure feels no different from a routine filling.",
          },
        },
        {
          "@type": "Question",
          name: "What is laser dental filling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Laser dental filling is a minimally invasive technique where a dental laser removes tooth decay without the drill noise or vibration. It is faster, virtually painless, and requires little to no anaesthesia.",
          },
        },
        {
          "@type": "Question",
          name: "Does Radix Cosmo Dental offer Invisalign clear aligners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer Invisalign clear aligners and traditional metal/ceramic braces for teeth straightening at our East Delhi clinic. Dr. Shruti Malik will recommend the best option based on your teeth alignment needs.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a kids dentist near Nirman Vihar East Delhi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Radix Cosmo Dental, Nirman Vihar provides gentle paediatric dental care for children of all ages, including cavity treatment, fluoride application, dental sealants and habit-breaking appliances.",
          },
        },
        {
          "@type": "Question",
          name: "How much do dental implants cost in East Delhi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dental implant cost at Radix Cosmo Dental depends on the number of implants and material chosen. We offer affordable single-tooth, multiple and full-mouth implants with EMI options. Book a consultation with Dr. Shruti Malik for an exact quote.",
          },
        },
        {
          "@type": "Question",
          name: "What dental services does Dr. Shruti Malik offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Shruti Malik offers root canal treatment, laser fillings, dental implants, Invisalign and braces, paediatric dentistry, teeth whitening, crowns, bridges, veneers, laser gum treatment, and cosmetic dentistry at Radix Cosmo Dental, Nirman Vihar, East Delhi.",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://drshrutimalik.com/#website",
      url: "https://drshrutimalik.com",
      name: "Dr. Shruti Malik — Best Dentist in Delhi & East Delhi | Endodontist",
      description: siteSettings.description,
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://drshrutimalik.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const DefaultSeo = () => {
  return (
    <>
      <NextDefaultSeo
        title={siteSettings.title}
        defaultTitle={siteSettings.title}
        description={siteSettings.description}
        canonical="https://drshrutimalik.com/"
        openGraph={{
          type: "website",
          locale: "en_IN",
          url: "https://drshrutimalik.com/",
          site_name: "Dr. Shruti Malik — Radix Cosmo Dental",
          title: siteSettings.title,
          description: siteSettings.description,
          images: [
            {
              url: "https://drshrutimalik.com/Shruti.png",
              width: 1200,
              height: 630,
              alt: "Dr. Shruti Malik — Best Dentist in East Delhi",
            },
          ],
        }}
        twitter={{
          handle: "@shruti08malik",
          site: "@shruti08malik",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { name: "author", content: "Dr. Shruti Malik" },
          { name: "robots", content: "index, follow" },
          { name: "googlebot", content: "index, follow" },
          { name: "geo.region", content: "IN-DL" },
          { name: "geo.placename", content: "East Delhi, Delhi" },
          { name: "geo.position", content: "28.638293;77.285799" },
          { name: "ICBM", content: "28.638293, 77.285799" },
          { name: "theme-color", content: "#050d1a" },
          { name: "apple-mobile-web-app-capable", content: "yes" },
          { name: "msapplication-TileColor", content: "#050d1a" },
        ]}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          { rel: "icon", href: "/favicon.ico" },
          { rel: "manifest", href: "/site.webmanifest" },
        ]}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
    </>
  );
};
