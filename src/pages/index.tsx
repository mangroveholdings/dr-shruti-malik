import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Hero from "../components/home";
import Process from "@/components/process";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";
import News from "@/components/news";
import BookAppointment from "@/components/book-appointment";
import Contact from "@/components/contact";
import { DefaultSeo } from "@/components/seo";

export default function Home() {
  return (
    <Layout>
      <DefaultSeo />
      <main>
        <Hero />
        <Process />
        <About />
        <Portfolio />
        <Service />
        <Testimonial />
        <News />
        <BookAppointment />
        <Contact />
      </main>
    </Layout>
  );
}
