import { NextSeo } from "next-seo";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Services from "@/components/sections/Services";
import Clinic from "@/components/sections/Clinic";
import Chambers from "@/components/sections/Chambers";
import Media from "@/components/sections/Media";
import dynamic from "next/dynamic";
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="lg-root">
      <NextSeo
        title="Dr. Shruti Malik — Best Dentist in Delhi & East Delhi | Endodontist | Radix Cosmo Dental"
        description="Dr. Shruti Malik — Best Dentist in Delhi & East Delhi. Painless root canal, laser fillings, dental implants, Invisalign/braces, kids/paediatric dentistry & cosmetic dentistry at Radix Cosmo Dental, Nirman Vihar. BDS, MDS with 10+ years experience. Book online."
        canonical="https://drshrutimalik.com/"
      />
      <Nav />
      <Hero />
      <WhyUs />
      <About />
      <Services />
      <Clinic />
      <Chambers />
      <Team />
      <Media />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}
