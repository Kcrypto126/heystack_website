"use client";
import brands from "@/constants/brands";
import Slider from "./Slider";

export default function Brands() {
  // Calculate the midpoint of the array
  const midpoint = Math.ceil(brands.length / 2);

  // Split the array into two equal parts
  const firstHalf = brands.slice(0, midpoint);
  const secondHalf = brands.slice(midpoint);

  return (
    <div className="py-8 md:py-16">
      <p className="text-3xl font-bold text-center sm:text-4xl md:mb-8">
        Brands that <span className="text-secondary">trust us</span>
      </p>
      <Slider items={firstHalf} />
      <Slider items={secondHalf} direction="left" speed="slow" className="" />
    </div>
  );
}
