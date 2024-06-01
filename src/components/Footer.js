import React from "react";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className="md:mt-28 mt-20 xl:p-6 text-xl ">
      <div className="bg-[#F5F5F5] xl:rounded-xl md:p-20 p-10 flex  md:justify-between flex-wrap text-sm  ">
        <div className="flex flex-col gap-3 mx-auto md:mx-0  md:items-start  ">
          <div className="flex md:items-center justify-center gap-2 mr-auto">
            <Image src={"/logo.png"} width={"28"} height="28" alt="logo" />
            <p className="text-xl font-bold text-[#415082] tracking-wider">
              Heystack
            </p>
          </div>
          <p className="w-[14rem] md:text-left text-left text-xs">
            A feedback data platform to get a 360 degree view of customer
            perception of your products. Understand the WHY behind the WHAT and
            get actionable insights.
          </p>
          <div className="flex gap-4 my-2">
            <Link href="/">
              <Image src={"/logo.png"} width={"24"} height="24" alt="logo" />
            </Link>
            <Link href="/">
              <Image src={"/logo.png"} width={"24"} height="24" alt="logo" />
            </Link>
            <Link href="/">
              <Image src={"/logo.png"} width={"24"} height="24" alt="logo" />
            </Link>
            <Link href="/">
              <Image src={"/logo.png"} width={"24"} height="24" alt="logo" />
            </Link>
          </div>

          <div className="flex flex-col mb-5 lg:my-2">
            <p>Phone: +1 281-865-1192</p>
            <p>Email: contact@hey-stack.com</p>
          </div>
        </div>
        <div className="flex gap-20 flex-wrap lg:justify-center">
          <div className="flex gap-20 ">
            <div className="space-y-4">
              <p className="font-bold mb-3">Home</p>
              <Link href="#customers" className="block">
                Customers
              </Link>
              <Link href="#products" className="block">
                Products
              </Link>
              <Link href="#testimonials" className="block">
                Testimonials
              </Link>
              <Link href="#technology" className="block">
                Features
              </Link>
              <Link href="#retailers" className="block">
                Retail Partners
              </Link>
            </div>
            <div className="space-y-4">
              <p className="font-bold mb-3">Resources</p>
              <Link href="/blogs" className="block">
                Blogs
              </Link>
              <Link href="/careers" className="block">
                Careers
              </Link>
              <Link href="/terms-conditions" className="block">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="block">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="space-y-4">
              <p className="font-bold mb-3">Our Office</p>
              <p>Sunnyvale, CA</p>
              <p>Boston, MA</p>
              <p>Bangalore, India</p>
              <p>Pune, India</p>
            </div>
          </div>
          <div className="flex ">
            <div className="bg-white p-2 rounded-md">
              <Image
                src={"/location.png"}
                width={"300"}
                height="300"
                alt="footer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
