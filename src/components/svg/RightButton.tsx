import React from "react";

const RightButton = ({ className }: any) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="w-[3vw] h-[3vw]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6L22 16L12 26"
        stroke="#343330"
        strokeWidth="3"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6L22 16L12 26"
        stroke="url(#paint0_linear_103_1033)"
        strokeWidth="3"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_103_1033"
          x1="17"
          y1="6"
          x2="17"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9B43F" />
          <stop offset="0.183742" stopColor="#F0F09B" />
          <stop offset="0.462318" stopColor="#C79017" />
          <stop offset="0.723837" stopColor="#F0E88C" />
          <stop offset="1" stopColor="#A97510" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RightButton;
