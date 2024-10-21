import React from "react";
import Loader from "@/components/Loader";

const loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center spin-loader">
      <Loader />
    </div>
  );
};

export default loading;
