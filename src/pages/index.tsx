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
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="lg-root">
      <NextSeo
        title="Dr. Shruti Malik — Best Dentist & Endodontist in East Delhi | Radix Cosmo Dental"
        description="Dr. Shruti Malik is a leading Endodontist & Dentist in East Delhi at Radix Cosmo Dental, Nirman Vihar. Root canal, implants, braces, whitening & cosmetic dentistry. BDS, MDS with 10+ years experience. Book online."
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
