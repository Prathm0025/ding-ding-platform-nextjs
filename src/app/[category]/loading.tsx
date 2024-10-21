import React from "react";
import Loader from "@/components/Loader";

const loading = () => {
  return (
    <div className="w-full h-[40vh] sm:h-[40vw] flex items-center justify-center spin-loader bg-[#13131338]">
      <Loader />
    </div>
  );
};

export default loading;
