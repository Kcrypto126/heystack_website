"use client";
import brands from "@/constants/brands";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./Container";
import "swiper/css";
import "swiper/css/autoplay";
function Brands() {
  return (
    <div className="brands-section">
      <Container>
        <div className="w-full mx-auto mt-8">
          <p className="md:text-3xl md:text-[2.5rem] text-2xl font-bold text-center">
            Brands that <span className="text-secondary">trust us</span>
          </p>
          <div className="md:mt-8">
            <div className="mx-auto">
              <div className="ease-linear delay-100">
                <Swiper
                  autoplay={{
                    delay: 0,
                    pauseOnMouseEnter: true,
                  }}
                  spaceBetween={30}
                  initialSlide={1}
                  speed={7000}
                  freeMode={false}
                  slidesPerView={6}
                  loop={true}
                  slidesPerGroupAuto={true}
                  centeredSlides={true}
                  modules={[Autoplay]}
                  reverseDirection={true}
                  breakpoints={{
                    320: {
                      slidesPerView: 3,
                    },
                    640: {
                      slidesPerView: 5,
                    },
                  }}
                  className="ease-linear"
                  style={{ transitionTimingFunction: "linear" }}
                >
                  {brands.map((item, ind) => (
                    <SwiperSlide
                      key={ind}
                      className="py-10"
                      style={{ transitionTimingFunction: "linear" }}
                    >
                      <div className="object-contain w-full h-full py-2 border-2 rounded-lg drop-shadow-lg border-primary">
                        <Image
                          alt="image"
                          src={item.src}
                          className={`object-contain w-full h-full rounded-xl`}
                          height={"100"}
                          width={"100"}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  autoplay={{
                    delay: 0,
                    pauseOnMouseEnter: true,
                  }}
                  slidesPerGroupAuto={true}
                  reverseDirection={true}
                  spaceBetween={30}
                  initialSlide={1}
                  speed={7000}
                  freeMode={false}
                  slidesPerView={6}
                  loop={true}
                  centeredSlides={true}
                  modules={[Autoplay]}
                  breakpoints={{
                    320: {
                      slidesPerView: 3,
                    },
                    640: {
                      slidesPerView: 5,
                    },
                  }}
                  className="-my-12 ease-linear swiper-container"
                  style={{ transitionTimingFunction: "linear" }}
                >
                  {brands.map((item, ind) => (
                    <SwiperSlide
                      key={ind}
                      className="py-10"
                      style={{ transitionTimingFunction: "linear" }}
                    >
                      <div className="object-contain w-full h-full py-2 border-2 rounded-lg drop-shadow-lg border-primary">
                        <Image
                          alt="image"
                          src={item.src}
                          className={`object-contain w-full h-full rounded-xl`}
                          height={"100"}
                          width={"100"}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Brands;
