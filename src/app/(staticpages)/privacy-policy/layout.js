import NavBar from "@/components/navbars/NavBar";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";

export const metadata = {
  title: "Privacy Policy | Hey-Stack",
  description:
    "When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address, phone number or social media credentials. You may, however, visit our site anonymously.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="bg-gradient-to-b from-[#E4ECFF] via-blue-100 to-white lg:h-[20rem] bg-opacity-20">
        <NavBar />
        <Heading>Privacy Policy</Heading>
      </div>
      {children}
      <Footer />
    </>
  );
}
