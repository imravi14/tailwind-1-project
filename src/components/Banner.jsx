import React from "react";

import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <>
      <div className="bg-[#2699fb] w-full py-[100px]">
        <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
          <div className="text-xl md:text-3xl mb-4 md:p-[24px]">
            Learn With Us
          </div>
          <h2 className="text-white text-5xl md:text-[80px] md:p-[24px] ">
            Grow With Us.
          </h2>
          <div className="text-[20px] md:text-[50px] text-white md:p-[24px]">
            Learn
            <ReactTyped
              className="pl-3"
              strings={[
                "Web Development",
                "Digital Marketing",
                "Ethical Hacking",
              ]}
              typeSpeed={100}
              loop={true}
              backSpeed={120}
            />
          </div>
          <button className="bg-black text-white p-3 rounded">
            Get started
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
