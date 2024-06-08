import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import Customizable from "@/components/Customizable";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Advantages />
      <Testimonials/>
      <FAQ />
      <Footer/>
   </div>
  );
}
