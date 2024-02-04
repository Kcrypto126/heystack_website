import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import MobileNavBar from "@/components/MobileNavBar";
import RetailPartner from "@/components/RetailPartner";
// import RetailPartner from "@/components/Slider";
import Tab from "@/components/Tab";
import Testimonial from "@/components/Testimonial";
import Top from "@/components/Top";
import Work from "@/components/Work";
import Features from "@/components/features";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <Herosection />
      <Tab />
      <Brands />
      <Work />
      <Testimonial />
      <Features />
      <RetailPartner />
      <Footer />
    </div>
  );
}
