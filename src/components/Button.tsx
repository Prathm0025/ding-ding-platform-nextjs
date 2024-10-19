import React from "react";

const Button = ({ className, text }: any) => {
  return (
    <div className="bg-gradient-to-b from-[#F3D565] to-[#7D3445] p-0-2vw rounded-full w-full">
      <div className="bg-gradient-to-b from-[#F27B45] to-[#791621] p-0-2vw rounded-full">
        <div className="bg-gradient-to-b from-[#E48AAD] to-[#9B6736] p-0-2vw rounded-full">
          <div
            className={`${className} bg-gradient-to-r from-[#7743D4] to-[#3E236E] text-2vw font-bold text-white rounded-full px-1vw`}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
