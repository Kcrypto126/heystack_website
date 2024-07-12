import { Inter } from "next/font/google";

import NavBar from "@/components/navbars/NavBar";
import MobileNavbar from "@/components/navbars/MobileNavBar";
import Footer from "@/components/Footer";
import { BlogsProvider } from "@/context/BlogContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hey-Stack | Tags",
  description: "Blog posts on various topics from Hey-Stack.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <BlogsProvider>
        <NavBar />
        {children}
        <Footer />
      </BlogsProvider>
    </>
  );
}
