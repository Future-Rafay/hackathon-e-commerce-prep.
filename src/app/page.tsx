import Navbar from "@/components/Navbar";
import {Seperator,  SeparatorVertical } from "@/components/Seperator";
import TopHeader from "@/components/TopHeader";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
   <div>
   <TopHeader />
   </div>
   <div>
    <Navbar />
    <Seperator />
    <SeparatorVertical />
    <HeroSection />
    <Footer />
   </div>
    </>
  );
}
