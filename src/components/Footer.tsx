import React from "react";
import FooterSvg from "./svg/FooterSvg";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <div className="w-full relative flex items-center justify-center">
      <FooterSvg />
      <Navigation />
    </div>
  );
};

export default Footer;
