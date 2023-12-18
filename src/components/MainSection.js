import Image from "next/image";

function MainSection() {
  return (
    <div className=" pt-5 ">
      <Image
        width={"100"}
        height={"100"}
        src={"/homesvg.svg"}
        alt="home"
        className="w-[100%]"
      />
      <div className="absolute right-[32%] top-[22%]">
        <div className="relative">
          <div className="absolute w-[18vw] z-10">
            <Image
              src="/hom1.png"
              height={"50"}
              width={"250"}
              alt="stats"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-[18vw] z-20 md:top-8 top-6 md:left-10 left-6">
            <Image
              src="/hom2.png"
              height={"50"}
              width={"250"}
              alt="stats"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-[18vw] z-50 md:top-14 top-12 md:left-20 left-14">
            <Image
              src="/hom3.png"
              height={"50"}
              width={"250"}
              alt="stats"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
