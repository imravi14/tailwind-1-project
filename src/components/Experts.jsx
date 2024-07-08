import React from "react";
import laptop from "../assets/images/laptop.jpg";

const Experts = () => {
  return (
    <>
      <div className="max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2">
        <div className="  cols-span-1 md:w-[80%] text-center">
          <img src={laptop} alt="" className="inline" />
        </div>
        <div className="  col-span-1 flex flex-col justify-center">
          <h1 className="text-[#00df9a] font-bold my-2">Learn Form Experts</h1>
          <p className="my-2 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ad
            molestiae delectus eius quisquam ea nam. Voluptas natus odio
            veritatis omnis pariatur sint explicabo consequatur, voluptates ex,
            eveniet, cumque magnam.
          </p>
          <button className="bg-black text-white p-3 rounded w-[30%] ">
            Get started
          </button>
        </div>
      </div>
    </>
  );
};

export default Experts;
