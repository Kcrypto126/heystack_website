import work from "@/constants/work";
import Image from "next/image";
import Container from "./Container";

function Work() {
  return (
    <div className="work">
      <Container>
        <div className="">
          <div className="px-1">
            <p className="px-3 text-3xl text-center sm:text-4xl work-heading">
              How brands leverage Heystack Insights
            </p>
          </div>
          <div className="md:mt-16 w-[100%] mx-auto flex flex-col md:gap-32 gap-16">
            {work.map((item, ind) => (
              <div
                className={`flex 
            ${
              ind % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }    md:mt-0 flex-col-reverse items-center md:gap-16 gap-4`}
                key={ind}
              >
                <div className="flex flex-col md:basis-[60%] content-div md:gap-4 gap-3 md:mt-0 mt-5 w-10/12">
                  <h1 className="tracking-wider md:text-2xl">{item.heading}</h1>
                  <p className="text-gray-700 text-s md:text-base">
                    {item.content}
                  </p>
                  <span className="h-[0.5px] w-[90%] bg-gray-300"></span>

                  <Image
                    src={"/arrow.svg"}
                    width="200"
                    height="100"
                    alt="btn"
                    className="cursor-pointer"
                    draggable={false}
                  />
                </div>
                <div className="md:basis-[60%] md:mt-0 mt-10 flex justify-center items-center relative">
                  <Image
                    src={"/content.png"}
                    height={"150"}
                    width={"350"}
                    alt="content"
                    className="relative z-20 w-full rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Work;
