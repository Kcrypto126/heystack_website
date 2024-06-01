import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import RetailPartner from "@/components/RetailPartner";
import Tab from "@/components/Tab";
import Testimonial from "@/components/Testimonial";
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
