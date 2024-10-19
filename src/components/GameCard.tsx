import Image from "next/image";
import Link from "next/link";
import React from "react";
import GameBorder from "./svg/GameBorder";

const GameCard = ({ data }: any) => {
  return (
    <Link
      href={`/game/${data.slug}`}
      className="sm:w-[18vw] w-[18vh] h-[59vh] sm:h-[59vw] relative flex items-center justify-center translateZ "
    >
      <GameBorder />
      <div className="absolute top-auto left-auto w-[87%] h-[46%]  rounded-rectangle">
        <Image
          alt={data.name}
          src={data.thumbnail}
          fill
          quality={100}
          priority
          className="rounded-[4vw] shadow-2xl gameCard"
        />
      </div>
    </Link>
  );
};

export default GameCard;
