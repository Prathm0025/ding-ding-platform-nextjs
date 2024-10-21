import Game from "@/components/Game";
import { fetchGames } from "@/utils/action";

const Home = async ({ params }: any) => {
  const games = await fetchGames(params?.category);
  return <Game games={games} />;
};

export default Home;
