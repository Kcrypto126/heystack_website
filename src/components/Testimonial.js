import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import Container from "./Container";

function Testimonial() {
  return (
    <div className="testimonial">
      <Container>
        <div>
          <div className="text-center">
            <p className="text-center md:text-[2.5rem] text-2xl px-3 heading">
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
