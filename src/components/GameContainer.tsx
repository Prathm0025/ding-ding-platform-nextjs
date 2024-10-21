import React from "react";
import GameCard from "./GameCard";

const GameContainer = ({ data }: any) => {
  return (
    <div className="w-100vw grid grid-cols-5 place-content-center justify-items-center">
      {data?.games?.map((item: any, index: number) => (
        <GameCard data={item} />
      ))}
    </div>
  );
};

export default GameContainer;
