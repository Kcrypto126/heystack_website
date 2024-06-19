"use client";
import brands from "@/constants/brands";
import Slider from "./Slider";

export default function Brands() {
  const midpoint = Math.ceil(brands.length / 2);

  const firstHalf = brands.slice(0, midpoint - 1);
  const secondHalf = brands.slice(midpoint);

  return (
    <div className="py-8 md:py-16" id="customers">
      <p className="lg:text-4xl md:text-3xl text-2xl text-center font-bold md:mb-8">
        Brands that <span className="text-secondary">trust us</span>
      </p>
      <Slider items={firstHalf} />
      <Slider items={secondHalf} direction="left" speed="slow" className="" />
    </div>
  );
}
