import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2699fb] h-auto py-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">WsCube Tech</h1>
        </div>
        {/* links */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <div className="text-2xl md:text-3xl lg:text-4xl">
            <FaInstagram />
          </div>
          <div className="text-2xl md:text-3xl lg:text-4xl">
            <FaFacebook />
          </div>
          <div className="text-2xl md:text-3xl lg:text-4xl">
            <FaFacebookMessenger />
          </div>
          <div className="text-2xl md:text-3xl lg:text-4xl">
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
