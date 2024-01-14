import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <div className="mt-20 md:mt-28 testimonial">
      <div>
        <div className="text-center">
          <p className="text-center md:text-[2.5rem] text-[1.5rem] px-3 heading">
            Testimonials
          </p>
          <p className="text-base text-gray-600 md:text-2xl">
            What peoaple say about us
          </p>
        </div>
        <div className="w-[90%] mx-auto ">
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
