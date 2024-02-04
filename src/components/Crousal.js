"use client";
import React from "react";
import Image from "next/image";
import brands from "@/constants/brands";
import { brandsBreakPoint } from "@/constants/breakpoints";
import Carousel from "better-react-carousel";
import Container from "./Container";

const Carousal = () => {
  return (
    <Container>
      <Carousel
        loop
        showDots
        dotColorActive="#1943cc"
        scrollSnap
        cols={6}
        rows={2}
        gap={10}
        mobileBreakpoint={20}
        responsiveLayout={brandsBreakPoint}
        scroll-snap={true}
      >
        {brands.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="border-[#1943cc] border-[1.7px] px-1 py-2 rounded-md flex justify-center">
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
    </Container>
  );
};

export default Carousal;
