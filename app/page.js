import WhyChoose from "@/components/WhyChoose";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
// import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Benefits />
      <WhyChoose/>
      <Process />
      <Products />
      <Projects/>
      <Testimonials/>
      <FAQ/>
      <CTA />
      {/* <Contact /> */}
    </main>
  );
}
