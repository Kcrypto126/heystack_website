import NavBar from "@/components/navbars/NavBar";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";

export const metadata = {
  title: "Career | Hey-Stack",
  description:
    "We focus more on your passion and work ethic than your resume. If you are a person who believes in getting things done, we welcome you. Come join us! You can work remote, have flexible hours, enjoy ownership and independence.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="bg-[#E4ECFF] ">
        <NavBar />
        <Heading>Careers</Heading>
      </div>
      {children}
      <Footer />
    </>
  );
}
