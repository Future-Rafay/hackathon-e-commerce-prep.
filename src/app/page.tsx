import Navbar from "@/components/Navbar";
import Seperator from "@/components/Seperator";
import TopHeader from "@/components/TopHeader";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
   <div>
   <TopHeader />
   </div>
   <div>
    <Navbar />
    <Seperator />
    <HeroSection />
   </div>
    </>
  );
}
