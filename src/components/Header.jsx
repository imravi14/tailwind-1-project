import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [togel, setTogel] = useState(false);
  return (
    <>
      <div className="bg-[#2699fb] p-4 ">
        <div className="max-w-[1240px]  mx-auto flex justify-between items-center px-[12px]">
          <div className="text-3xl font-bold">WsCube Tech</div>
          <div>
            {togel ? (
              <IoMdClose
                onClick={() => setTogel(!togel)}
                className="text-white text-2xl md:hidden block"
              />
            ) : (
              <CiMenuBurger
                onClick={() => setTogel(!togel)}
                className="text-white text-2xl md:hidden block"
              />
            )}
          </div>

          <ul className="hidden md:flex text-white gap-10">
            <li className="hover:scale-100  hover:text-black">Home</li>
            <li className="hover:scale-100  hover:text-black">Company</li>
            <li className="hover:scale-100  hover:text-black">Resurce</li>
            <li className="hover:scale-100  hover:text-black">About</li>
            <li className="hover:scale-100  hover:text-black">Contact</li>
          </ul>
          {/* responsive menu */}
          <ul
            className={`duration-300  md:hidden w-full h-screen text-white fixed bg-black top-[68px]
                ${togel ? "left-[0]" : "left-[100%]"}`}
          >
            <li className="p-5">Home</li>
            <li className="p-5">Company</li>
            <li className="p-5">Resurce</li>
            <li className="p-5">About</li>
            <li className="p-5">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
