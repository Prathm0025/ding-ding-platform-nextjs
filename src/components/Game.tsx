"use client";
import React, { useEffect, useRef } from "react";
import GameCard from "./GameCard";
import GameContainer from "./GameContainer";

const Game = ({ games }: any) => {
  const { others, featured } = games;
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const displayedGames = [
    ...(featured?.length > 0 ? featured : []),
    ...(others?.length > 0 ? others : []),
  ];

  const chunkArray = (array: any[], size: number) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => ({
      games: array.slice(i * size, i * size + size),
    }));
  };
  const gameChunks = chunkArray(displayedGames, 5);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      if (scrollRef.current) {
        const scrollAmount =
          scrollRef.current.clientWidth;
        scrollRef.current.scrollBy({
          left: event.deltaY < 0 ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const element = scrollRef.current;
    if (element) {
      element.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className=" h-[42vh] sm:h-[40vw] overflow-x-auto overflow-y-hidden hideScrollBar w-full flex"
    >
      <div className="flex">
        {gameChunks?.map((item: any, index: any) => (
          <div
            key={index}
            className="flex justify-center items-center w-100vw"
          >
            <GameContainer data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
