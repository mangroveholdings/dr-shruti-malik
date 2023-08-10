import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import BookAppointment from "../src/components/BookAppointment";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Dr shruti Malik | Radix Health Care</title>
      </Head>
      <Home />
      {/* HERO */}
      {/* PROCESS */}
      <Process />
      {/* /PROCESS */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* SERVICES */}
      <Service />
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      <Testimonial />
      {/* /TESTIMONIALS */}
      {/* News */}
      <News />
      {/* /News */}
      {/* News */}
      <BookAppointment />
    </Layout>
  );
};
export default Index;
