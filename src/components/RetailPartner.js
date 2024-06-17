"use client";
import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { partners } from "@/constants/partners";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Container from "./Container";
import { Navigation } from "swiper/modules";
import { Retailers } from "@/constants/retailers";

import "swiper/css/navigation";
import "swiper/css";

function RetailPartner() {
  const [swiper, setSwiperInstance] = React.useState(null);
  return (
    <Container>
      <div className="w-full mx-auto mt-8 px-5" id="retailers">
        <p className="text-3xl font-bold text-center sm:text-4xl heading">
          Retail Partners
        </p>
        <div className="md:mt-8">
          <div className="">
            <Swiper
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              spaceBetween={30}
              initialSlide={1}
              slidesPerView={1}
              loop={true}
              reversedirection
              autoplay={true}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              modules={[Navigation]}
            >
              {Retailers.reduce((result, value, index, array) => {
                if (index % 2 === 0) result.push(array.slice(index, index + 2));
                return result;
              }, []).map((itemPair, ind) => (
                <SwiperSlide key={ind} className="relative py-10 px-5">
                  <div className="flex flex-col items-center justify-center md:gap-10 gap-5">
                    {itemPair.map((item, index) => (
                      <div
                        key={index}
                        className="relative w-[600px] h-[80px]   overflow-hidden flex items-center justify-center rounded-lg"
                      >
                        <Image
                          alt={item.name}
                          src={item.src}
                          layout="cover"
                          className="grayscale w-64 h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
              <div className="mr-4 z-40 absolute top-[40%] -translate-x-0 -left-3 text-xl rounded-full py-2 px-1 text-blue-600 cursor-pointer">
                <BsChevronCompactLeft
                  size={28}
                  onClick={() => swiper.slidePrev()}
                />
              </div>
              {/* Right Arrow */}
              <div className="ml-4 z-40 absolute top-[40%] -translate-x-0 -right-3 text-xl rounded-full py-2 px-1 text-blue-600 cursor-pointer">
                <BsChevronCompactRight
                  onClick={() => swiper.slideNext()}
                  size={28}
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default RetailPartner;
