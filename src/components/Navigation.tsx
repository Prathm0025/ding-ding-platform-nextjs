"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navigation = ({ params }: any) => {
  const pathname = usePathname();
  const data = [
    { name: "all", icon: "/navbar/all.png", link: "/" },
    { name: "slot", icon: "/navbar/slot.png", link: "/slot" },
    { name: "keno", icon: "/navbar/keno.png", link: "/keno" },
    { name: "other", icon: "/navbar/other.png", link: "/other" },
  ];
  return (
    <div className="w-[50%] flex justify-between items-center absolute top-[-2vw] left-auto h-full">
      {data.map((item: any, index: number) => (
        <Link
          key={index}
          href={item.link}
          className="flex flex-col gap-[0.3vw] items-center"
        >
          <div
            className={` ${
              pathname === item.link
                ? "bg-gradient-to-bl from-[#E9B43F] via-[#C79017] to-[#A97510]"
                : ""
            } rounded-full p-0-08vw`}
          >
            <div className="bg-gradient-to-bl from-[#101010] via-[#141414] to-[#6D2800] rounded-full p-0-3vw">
              <div className="bg-gradient-to-bl from-[#E9B43F] via-[#C79017] to-[#A97510] rounded-full p-0-2vw">
                <div className="bg-gradient-to-bl from-[#101010] via-[#141414] to-[#6D2800] rounded-full p-0-5vw">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    height={50}
                    width={50}
                    className={`h-3vw w-3vw ${
                      pathname === item.link ? "animate-bounce" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
          <p
            className={`text-1-2vw uppercase transition-all duration-1000 ${
              pathname === item.link ? "font-[800]" : "font-medium"
            }`}
          >
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
