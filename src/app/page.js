import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import MobileNavBar from "@/components/MobileNavBar";
import RetailPartner from "@/components/RetailPartner";
import Tab from "@/components/Tab";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Herosection />
      <Tab />
      <Brands />
      <Work />
      <Testimonial />
      <RetailPartner />
      <Footer />
    </div>
  );
}
