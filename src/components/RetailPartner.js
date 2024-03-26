"use client";
import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import partners from "../constants/partners";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Container from "./Container";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";

import "swiper/css";

function RetailPartner() {
  const swiper = useSwiper();
  return (
    <div>
      <Container>
        <div className="w-full mx-auto mt-8">
          <p className="text-3xl font-bold text-center sm:text-4xl heading">
            Retail Partners
          </p>
          <div className="md:mt-8">
            <div className="mx-auto">
              <div className="">
                <Swiper
                  spaceBetween={30}
                  navigation={true}
                  initialSlide={1}
                  slidesPerView={1}
                  loop={true}
                  reverseDirection={true}
                  breakpoints={{
                    320: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 6,
                    },
                  }}
                  modules={[Navigation]}
                >
                  {partners.map((item, ind) => (
                    <SwiperSlide key={ind} className="relative py-10">
                      <div className="flex flex-col items-center justify-center gap-10">
                        <Image
                          alt="image"
                          src={item.src}
                          className={`object-contain w-full rounded-xl`}
                          height={"100"}
                          width={"80"}
                        />
                        <Image
                          alt="image"
                          src={item.src}
                          className={`object-contain w-full h-full rounded-xl`}
                          height={"100"}
                          width={"80"}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className=" hidden group-hover:block absolute top-[40%] -translate-x-0  left-0 text-xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer">
                    <BsChevronCompactLeft
                      onClick={() => swiper.slidePrev()}
                      size={24}
                    />
                  </div>
                  {/* Right Arrow */}
                  <div className=" hidden group-hover:block absolute top-[40%] -translate-x-0  right-0 text-xl rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer">
                    <BsChevronCompactRight
                      onClick={() => swiper.slideNext()}
                      size={24}
                    />
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RetailPartner;
