import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="w-full bg-[#2699fb] p-4">
        <div className="max-w-[1240px] md:flex mx-auto justify-between py-[40px]">
          <div className="m-2">
            <h1 className="text-[20px] md:text-[40px] font-bold text-white">
              Want to lern latest I.t skills?
            </h1>
            <span className="text-white">
              Sign Up to our newsletter and stay up to date.
            </span>
          </div>
          <div className="m-2 ">
            <input
              type="text "
              className=" p-3 mr-2 mb-2 sm:w-full text-slate-600 rounded"
              placeholder="Email"
            />
            <button className="bg-black text-white p-3 rounded">
              Get started
            </button>
            <br />
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing
              <br />{" "}
              <a href="" className="text-black">
                elit. Nemo, sint.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
