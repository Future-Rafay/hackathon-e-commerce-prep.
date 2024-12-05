import Navbar from "@/components/Navbar";
import {Seperator,  SeparatorVertical } from "@/components/Seperator";
import TopHeader from "@/components/TopHeader";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";
import Category from "@/components/Category";
import ThisMonth from "@/components/ThisMonth";

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
    <FeaturedProducts />
    <Category />
    <ThisMonth />
    <Footer />
   </div>
    </>
  );
}
