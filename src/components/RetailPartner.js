"use client";
import React from "react";
import Carousel from "better-react-carousel";
import partners from "../constants/partners";
import Image from "next/image";
import { Retailbreakpoints } from "@/constants/breakpoints";

function RetailPartner() {
  return (
    <div className="brands-section">
      <div className="w-full mt-20 md:mt-26 container mx-auto">
        <p className="text-center md:text-[2.5rem] text-[1.5rem] px-3 heading">
          Retail Partners
        </p>
        <div className="my-6 relative">
          <div className="w-[90] ">
            <Carousel
              loop
              showDots
              dotColorActive="#1943cc"
              scrollSnap
              cols={6}
              rows={2}
              gap={20}
              mobileBreakpoint={20}
              responsiveLayout={Retailbreakpoints}
              scroll-snap={true}
              containerClassName="container"
            >
              {partners.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="retail-div px-1 py-2 rounded-md">
                    <Image
                      src={item.src}
                      height={130}
                      width={130}
                      alt="brand"
                      className="m-1"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RetailPartner;
