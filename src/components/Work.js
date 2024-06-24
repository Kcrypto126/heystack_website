import work from "@/constants/work";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

function Work() {
  return (
    <div className="work" id="products">
      <Container>
        <div className="px-1 py-3 lg:py-0">
          <p className="px-3 lg:text-4xl md:text-3xl text-2xl text-center  work-heading mb-3 lg:mb-0">
            How brands leverage Heystack Insights
          </p>
        </div>
        <div className="md:mt-16  lg:mx-auto flex flex-col md:gap-32 gap-16  px-6 md:px-8 lg:px-0">
          {work.map((item, ind) => (
            <div
              className={`flex 
            ${
              ind % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }    md:mt-0 flex-col-reverse items-center md:gap-16 gap-4`}
              key={ind}
            >
              <div className="flex flex-col md:basis-[60%] content-div md:gap-4 gap-3 md:mt-0 mt-2 lg:w-10/12">
                <h1 className="tracking-wider text-xl md:text-2xl">
                  {item.heading}
                </h1>
                <p className="text-gray-700 text-[1rem] md:text-base">
                  {item.content}
                </p>

                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/arrow.svg"}
                    width="200"
                    height="100"
                    alt="btn"
                    className="cursor-pointer"
                    draggable={false}
                  />
                </Link>
                <span className="h-[0.5px] w-[90%] bg-gray-300"></span>
              </div>
              <div className="md:basis-[60%] md:mt-0 mt-2 flex justify-center lg:items-center relative">
                <Image
                  src={item.src}
                  height={"150"}
                  width={"350"}
                  alt="content"
                  className="relative z-20  rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Work;
