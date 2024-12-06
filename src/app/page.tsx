import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeaturedProduct from "@/components/FeaturedProduct";
import Category from "@/components/Category";
import ThisMonth from "@/components/BestSellingProduct";
import ExploreProducts from "@/components/ExploreProducts";
import NewArrival from "@/components/NewArrival";

export default function Home() {
  return (
    <>
   <div>
   <TopHeader />
   </div>
   <div>
    <Navbar />
    <HeroSection />
    <FeaturedProduct />
    <Category />
    <ThisMonth />
    <ExploreProducts />
    <NewArrival />
    <Footer />
   </div>
    </>
  );
}
