import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import Container from "./Container";

function Testimonial() {
  return (
    <div className="testimonial bg-gradient-to-t from-[#EAF0FF]">
      <Container>
        <div>
          <div className="text-center">
            <p className="px-3 text-3xl text-center sm:text-4xl heading">
              Testimonials
            </p>
            <p className="mt-1 text-base text-gray-600 md:text-2xl">
              What peoaple say about us
            </p>
          </div>
          <div className="">
            <TestimonialCard />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;
