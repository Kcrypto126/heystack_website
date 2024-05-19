import Image from "next/image";
import NavBar from "./NavBar";
import Container from "./Container";
import mobileImage from "../assets/mobile.png";

function Herosection() {
  return (
    <div className="relative bg-hero-section">
      <div className="z-50">
        <NavBar />
      </div>

      <div className="absolute h-full top-3 opacity-90">
        <Image
          src={"/Blob.png"}
          alt="blob"
          width={"350"}
          height={"350"}
          className="h-full w-[100%]"
        />
      </div>
      <Container>
        <div className="relative z-10 lg:my-16 my-8">
          <div className="lg:flex hidden justify-between">
            <div className="text-center max-w-[18rem]">
              <h1 className="text-[#415082] font-semibold text-xl mb-4">
                Customer segment
              </h1>
              <p className="text-gray-700">
                Connect your sales and marketing apps and products data
              </p>
            </div>
            <div className="text-center max-w-[18rem] mt-8">
              <h1 className="text-[#415082] font-semibold text-xl mb-4">
                Customer segment
              </h1>
              <p className="text-gray-700">
                Connect your sales and marketing apps and products data
              </p>
            </div>
            <div className="text-center max-w-[18rem]">
              <h1 className="text-[#415082] font-semibold text-xl mb-4">
                Customer segment
              </h1>
              <p className="text-gray-700">
                Connect your sales and marketing apps and products data
              </p>
            </div>
          </div>
          <iframe
            className="w-full mx-auto lg:block hidden"
            width="1400"
            height="368"
            src="https://rive.app/community/7548-15148-looping-animation-02/embed"
            allowFullScreen
          ></iframe>
          <Image
            src={mobileImage}
            alt="hero"
            className="w-full  lg:hidden block mx-2"
            priority
          />
        </div>
      </Container>
    </div>
  );
}

export default Herosection;
