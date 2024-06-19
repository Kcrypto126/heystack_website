import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-radial from-[#D75A00] via-[#EC276E] to-[#542DE8] py-4 max-w-7xl mx-auto ">
        Minimize Returns
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-10 my-5 lg:gap-8 max-w-6xl lg:mx-auto md:mx-8 mx-4">
        <Image
          src={"/content.png"}
          height={"120"}
          width={"320"}
          alt="content"
          className="relative z-20 w-full rounded-lg my-2"
        />
        <h4 className="max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          laudantium officia sequi vero, praesentium atque quidem culpa
          dignissimos dolorem consequuntur? Molestias, atque tenetur! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Alias laudantium
          officia sequi vero, praesentium atque quidem culpa dignissimos dolorem
          consequuntur? Molestias, atque tenetur!
        </h4>
      </div>

      <section className="max-w-6xl  my-10 lg:mx-auto md:mx-8 mx-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit
          impedit possimus. Odio similique facere laborum, fugiat atque est.
          Culpa similique eveniet dolore nesciunt nulla saepe, libero et rem
          soluta neque totam, incidunt maiores. Quidem, ipsum modi obcaecati
          possimus totam natus sapiente voluptate, quae doloremque sit minima
          sunt quod, inventore repellendus officiis? Voluptate repellendus
          voluptatem, ut voluptatum eius, facilis possimus modi eum nulla,
          distinctio nihil tenetur. Dicta expedita minus explicabo, obcaecati
          beatae adipisci facilis reprehenderit blanditiis aliquam cumque.
          Nostrum alias veniam quis mollitia laudantium animi perspiciatis nam,
          nihil in dolorem? In quo suscipit doloremque quaerat. Eligendi
          veritatis beatae sequi rerum!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit
          impedit possimus. Odio similique facere laborum, fugiat atque est.
          Culpa similique eveniet dolore nesciunt nulla saepe, libero et rem
          soluta neque totam, incidunt maiores. Quidem, ipsum modi obcaecati
          possimus totam natus sapiente voluptate, quae doloremque sit minima
          sunt quod, inventore repellendus officiis? Voluptate repellendus
          voluptatem, ut voluptatum eius, facilis possimus modi eum nulla,
          distinctio nihil tenetur. Dicta expedita minus explicabo, obcaecati
          beatae adipisci facilis reprehenderit blanditiis aliquam cumque.
          Nostrum alias veniam quis mollitia laudantium animi perspiciatis nam,
          nihil in dolorem? In quo suscipit doloremque quaerat. Eligendi
          veritatis beatae sequi rerum!
        </p>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit
          impedit possimus. Odio similique facere laborum, fugiat atque est.
          Culpa similique eveniet dolore nesciunt nulla saepe, libero et rem
          soluta neque totam, incidunt maiores. Quidem, ipsum modi obcaecati
          possimus totam natus sapiente voluptate, quae doloremque sit minima
          sunt quod, inventore repellendus officiis? Voluptate repellendus
          voluptatem, ut voluptatum eius, facilis possimus modi eum nulla,
          distinctio nihil tenetur. Dicta expedita minus explicabo, obcaecati
          beatae adipisci facilis reprehenderit blanditiis aliquam cumque.
          Nostrum alias veniam quis mollitia laudantium animi perspiciatis nam,
          nihil in dolorem? In quo suscipit doloremque quaerat. Eligendi
          veritatis beatae sequi rerum!
        </p>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit
          impedit possimus. Odio similique facere laborum, fugiat atque est.
          Culpa similique eveniet dolore nesciunt nulla saepe, libero et rem
          soluta neque totam, incidunt maiores. Quidem, ipsum modi obcaecati
          possimus totam natus sapiente voluptate, quae doloremque sit minima
          sunt quod, inventore repellendus officiis? Voluptate repellendus
          voluptatem, ut voluptatum eius, facilis possimus modi eum nulla,
          distinctio nihil tenetur. Dicta expedita minus explicabo, obcaecati
          beatae adipisci facilis reprehenderit blanditiis aliquam cumque.
          Nostrum alias veniam quis mollitia laudantium animi perspiciatis nam,
          nihil in dolorem? In quo suscipit doloremque quaerat. Eligendi
          veritatis beatae sequi rerum!
        </p>
      </section>
    </div>
  );
};

export default page;
