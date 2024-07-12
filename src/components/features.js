import Image from "next/image";
import Container from "./Container";

import { featuresData } from "@/constants/features";

function Features() {
  return (
    <section className="bg-gradient-to-b from-[#EAF0FF]" id="technology">
      <Container>
        <h1 className="px-3 text-3xl text-center sm:text-4xl heading">
          What is Unique about Heystack?
        </h1>
        <div className="grid grid-cols-1 mt-16 lg:grid-cols-3 md:grid-cols-2">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 p-6 transition cursor-pointer hover:shadow-2xl
                ${index < 3 ? "border-b" : ""}
                ${index % 2 === 0 && index < 4 ? "border-r" : ""}
                ${index === 1 ? "md:border-r" : ""}
                ${index === 2 ? "sm:border-r md:border-r-0" : ""}
                ${index === 3 ? "md:border-r md:border-b-0" : ""}
                ${index === 4 ? "border-r sm:border-b-0" : ""}
              `}
            >
              <Image
                height={50}
                width={50}
                src={feature.icon}
                alt={feature.title}
              />
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="text-[#1A1A1A]">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
