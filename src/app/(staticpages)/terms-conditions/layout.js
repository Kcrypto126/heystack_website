import NavBar from "@/components/navbars/NavBar";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";

export const metadata = {
  title: " Terms and Conditions | Hey-Stack",
  description:
    "By accessing this web site or our mobile applications, you are agreeing to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="bg-gradient-to-b from-[#E4ECFF] via-blue-100 to-white lg:h-[20rem] bg-opacity-20">
        <NavBar />
        <Heading>Terms of Service</Heading>
      </div>
      {children}
      <Footer />
    </>
  );
}
