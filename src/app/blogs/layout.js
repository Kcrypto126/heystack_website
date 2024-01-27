import { Inter } from "next/font/google";

import NavBar from "@/components/NavBar";
import MobileNavbar from "@/components/MobileNavBar";
import Footer from "@/components/Footer";
import { BlogsProvider } from "@/context/BlogContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { template: "Blogs | %s", default: "Hey-Stack | Blogs" },
  description: { default: "Hey-stack blogs created by @Hey-stack" },
  keywords: ["hey-stack", "hey-stack.com", "hey-stack blogs", "blogs"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <BlogsProvider>
          <NavBar />
          {children}
          <Footer />
        </BlogsProvider>
      </body>
    </html>
  );
}
