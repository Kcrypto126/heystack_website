import Image from "next/image";
import NavBar from "./NavBar";
import Container from "./Container";

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
        <div className="relative z-10">
          <iframe
            className="w-full mx-auto"
            width="1400"
            height="368"
            src="https://rive.app/community/7548-15148-looping-animation-02/embed"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
}

export default Herosection;
