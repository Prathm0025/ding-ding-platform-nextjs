import React from "react";
import Logo from "./svg/Logo";
import UserData from "./UserData";
import { getUserDetails } from "@/utils/action";
import Password from "./svg/Password";
import Settings from "./svg/Settings";

const Header = async () => {
  const user = await getUserDetails();
  return (
    <div className="w-full bg-gradient-to-b from-[#A97510] via-[#F0E88C] to-[#E9B43F] pb-[0.18vw] z-[100]">
      <div className="w-full bg-gradient-to-b from-[#A97510] to-[#C79017] pb-[0.15vw]">
        <div className="w-full bg-gradient-to-r from-[#F0F09B] to-[#E9B43F]  pb-[0.18vw]">
          <div className="w-full bg-gradient-to-b from-[#2B2B2B] via-[#212121] to-[#101010] flex items-center justify-between px-[2.5vw] py-[0.8vw]">
            <UserData data={user} />
            <Logo className="absolute left-[calc(50%-9.5vw)] top-[-1.1vw] h-[10vw] w-auto z-[100]" />
            <div className="flex gap-[0.5vw] items-center">
              <Password />
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
