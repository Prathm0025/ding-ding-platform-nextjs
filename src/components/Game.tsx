"use client";
import React, { useEffect, useRef } from "react";
import GameCard from "./GameCard";
import LeftButton from "./svg/LeftButton";
import RightButton from "./svg/RightButton";

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
        const scrollAmount = scrollRef.current.clientWidth;
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
    <div className="h-[40vh] sm:h-[40vw] overflow-hidden flex w-100vw">
      <div className="flex justify-evenly items-center w-full relative">
        <button>
          <LeftButton />
        </button>
        <div ref={scrollRef} className="flex overflow-x-auto w-[90%]">
          <div className="flex w-auto hideScrollBar">
            {gameChunks.map((chunk, index) => (
              <div
                key={index}
                className="grid grid-cols-5 place-content-center justify-items-center w-[90vh] sm:w-[90vw]"
              >
                {chunk.games.map((game: any, index: number) => (
                  <GameCard data={game} key={index} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <button>
          <RightButton />
        </button>
      </div>
    </div>
  );
};

export default Game;
