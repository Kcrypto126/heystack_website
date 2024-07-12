import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { ApolloWrapper } from "@/utils/apollo-wrapper";
import MobileNavbar from "@/components/navbars/MobileNavBar";
import Top from "@/components/Top";
import Navbar from "@/components/navbars/MobileNavBar";
import ToastProvider from "@/providers/ToastProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Hey-Stack",
  description:
    "A feedback data platform to get a 360 degree view of customer perception of your products. Understand the WHY behind the WHAT and get actionable insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className={`${poppins.className} scroll-smooth`}>
        <ToastProvider>
          <ApolloWrapper>
            <div className="sticky inset-0 z-50 block w-full lg:hidden">
              <MobileNavbar />
            </div>
            {children}
          </ApolloWrapper>
          <Top />
        </ToastProvider>
      </body>
    </html>
  );
}
