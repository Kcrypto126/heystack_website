import Image from "next/image";
import Container from "./Container";

function Features() {
  return (
    <section className="bg-gradient-to-b from-[#EAF0FF]" id="technology">
      <Container>
        <h1 className="px-3 text-3xl text-center sm:text-4xl heading">
          What is Unique about Heystack?
        </h1>
        <div className="grid grid-cols-1 mt-16 lg:grid-cols-3 md:grid-cols-2">
          <div className="flex flex-col gap-4 p-6 transition border-b border-r cursor-pointer hover:shadow-2xl">
            <Image height={"50"} width={"50"} src="/brain.svg" alt="brain" />
            <h2 className="text-xl font-semibold">
              Robust & Massively trained models
            </h2>
            <p className="text-[#1A1A1A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet scelerisque eros, sed tempor velit consectetur in. Morbi
              tincidunt
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 transition border-b cursor-pointer md:border-r hover:shadow-2xl">
            <Image height={"50"} width={"50"} src="/Data.svg" alt="brain" />
            <h2 className="text-xl font-semibold">
              Data From Everywhere & Anywhere{" "}
            </h2>
            <p className="text-[#1A1A1A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet scelerisque eros, sed tempor velit consectetur in. Morbi
              tincidunt
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 transition border-b cursor-pointer sm:border-r md:border-r-0 hover:shadow-2xl">
            <Image height={"50"} width={"50"} src="/key.svg" alt="brain" />
            <h2 className="text-xl font-semibold">
              Data From Everywhere & Anywhere{" "}
            </h2>
            <p className="text-[#1A1A1A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet scelerisque eros, sed tempor velit consectetur in. Morbi
              tincidunt
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 transition border-b cursor-pointer md:border-r md:border-b-0 hover:shadow-2xl">
            <Image height={"50"} width={"50"} src="/Business.svg" alt="brain" />
            <h2 className="text-xl font-semibold">
              Robust & Massively trained models
            </h2>
            <p className="text-[#1A1A1A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet scelerisque eros, sed tempor velit consectetur in. Morbi
              tincidunt
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 transition border-b border-r cursor-pointer sm:border-b-0 hover:shadow-2xl">
            <Image
              height={"50"}
              width={"50"}
              src="/Business 2.svg"
              alt="brain"
            />
            <h2 className="text-xl font-semibold">
              Data From Everywhere & Anywhere{" "}
            </h2>
            <p className="text-[#1A1A1A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet scelerisque eros, sed tempor velit consectetur in. Morbi
              tincidunt
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 transition cursor-pointer hover:shadow-2xl">
            <Image height={"50"} width={"50"} src="/Business.svg" alt="brain" />
            <h2 className="text-xl font-semibold">
              Data From Everywhere & Anywhere{" "}
            </h2>
            <p className="text-[#1A1A1A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet scelerisque eros, sed tempor velit consectetur in. Morbi
              tincidunt
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features;
