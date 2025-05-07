import CoursesOverview from "@/components/CoursesOverview";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Partners />
      <CoursesOverview />
      <CTA />
      <Footer />
    </>
  );
}
