import { DefaultSeo as NextDefaultSeo } from "next-seo";
import Head from "next/head";
import siteSettings from "@utils/siteSettings/siteSettings.json";
import info from "@utils/siteSettings/info.json";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
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
      ],
      hasMap: info.contact.addressLink,
      areaServed: [
        { "@type": "City", name: "East Delhi" },
        { "@type": "City", name: "Delhi" },
        { "@type": "Neighborhood", name: "Nirman Vihar" },
        { "@type": "Neighborhood", name: "Vikas Marg" },
        { "@type": "Neighborhood", name: "Preet Vihar" },
        { "@type": "Neighborhood", name: "Pandav Nagar" },
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
        "Dental Implants",
        "Endodontics",
        "Cosmetic Dentistry",
        "Braces and Aligners",
        "Teeth Whitening",
        "Dental Crowns",
        "Paediatric Dentistry",
      ],
      sameAs: [
        "https://www.linkedin.com/in/drshrutimalik/",
        "https://www.instagram.com/drshrutimalik.08/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://drshrutimalik.com/#website",
      url: "https://drshrutimalik.com",
      name: "Dr. Shruti Malik — Dentist & Endodontist East Delhi",
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
          { name: "keywords", content: siteSettings.keywords },
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
