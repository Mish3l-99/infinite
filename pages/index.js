import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

import content from "../content.json";
import About from "../components/About";
import Services from "../components/Services";
import Steps from "../components/Steps";
import Branding from "../components/Branding";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const { locale } = useRouter();
  return (
    <div className="">
      <Head>
        <title>Infinite Soft</title>
      </Head>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Steps />
        {/* <Branding /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
