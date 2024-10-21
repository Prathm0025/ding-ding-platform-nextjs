import GameFrame from "@/components/GameFrame";
import { getGameBySlug } from "@/utils/action";
import React from "react";

const page = async ({ params }: any) => {
  const gameData = await getGameBySlug(params.slug);
  return (
    <div className="w-full h-full">
      <GameFrame data={gameData} />
    </div>
  );
};

export default page;
