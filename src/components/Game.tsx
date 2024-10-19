"use client";
import React, { useEffect, useRef } from "react";
import GameCard from "./GameCard";

const Game = ({ games }: any) => {
  const { others, featured } = games;
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const displayedGames = [...featured, ...others];

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
    <div
      ref={scrollRef}
      className=" h-[42vh] sm:h-[40vw] overflow-x-auto overflow-y-hidden hideScrollBar w-full flex"
    >
      <div className="flex gap-x-3vw">
        {displayedGames?.map((item: any, index: any) => (
          <div
            key={index}
            className="flex justify-center items-center w-[calc(100%/5)]"
          >
            <GameCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
