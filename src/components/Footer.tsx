import React from "react";
import FooterSvg from "./svg/FooterSvg";
import Navigation from "./Navigation";
import GoldElement from "./svg/GoldElement";

const Footer = () => {
  return (
    <div className="w-full relative flex items-center justify-center">
      <FooterSvg />
      <GoldElement className="absolute bottom-0 sm:left-[1vw] left-[1vh] h-full w-[5%]" />
      <GoldElement className="absolute bottom-0 sm:right-[1vw] right-[1vh] h-full w-[5%]" />
      <Navigation />
    </div>
  );
};

export default Footer;
