import Image from "next/image";
import React from "react";

const UserData = ({ data }: any) => {
  return (
    <div className="flex items-center justify-center gap-[1.2vw]">
      <div className="bg-gradient-to-b from-[#E9B43F] via-[#C79017] to-[#A97510] p-[0.12vw] rounded-full">
        <div className="bg-gradient-to-r from-[#A97510] via-[#C79017] to-[#E9B43F] p-[0.08vw] rounded-full">
          <div className="bg-gradient-to-b from-[#E9B43F] via-[#C79017] to-[#A97510] p-[0.12vw] rounded-full">
            <div className="relative">
              <Image
                src="/profile.png"
                alt={data?.username}
                className="h-[3.5vw] w-[3.5vw]"
                height={80}
                width={80}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fle flex-col">
        <p className="text-[1.5vw] capitalize font-semibold bg-gradient-to-b from-[#A98E44] via-[#F9F2DB] to-[#D7BF7C] bg-clip-text text-transparent">
          {data?.username}
        </p>
        <p className="text-[1vw] capitalize font-medium bg-gradient-to-b from-[#C79F28] via-[#FFE650] to-[#FFE650] bg-clip-text text-transparent">
          {data?.credits}
        </p>
      </div>
    </div>
  );
};

export default UserData;
