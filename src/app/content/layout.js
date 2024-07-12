import NavBar from "@/components/navbars/NavBar";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";

export const metadata = {
  title: "Content | Hey-Stack",
  description:
    "A feedback data platform to get a 360 degree view of customer perception of your products. Understand the WHY behind the WHAT and get actionable insights.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="bg-gradient-to-b from-[#E4ECFF] via-blue-100 to-white lg:h-[12rem] bg-opacity-20">
        <NavBar />
      </div>
      {children}
      <Footer />
    </>
  );
}
