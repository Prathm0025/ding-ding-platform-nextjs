import Game from "@/components/Game";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchGames } from "@/utils/action";
import Image from "next/image";

const Home = async () => {
  const initialGames = await fetchGames();
  return (
    <main className="relative w-full h-full">
      <Image
        src="/home/bg.png"
        fill
        alt="bg"
        priority={true}
        quality={100}
        objectPosition="center"
        className="z-[-2] object-cover"
      />
      <Header />
      <Game />
      <Footer />
    </main>
  );
};

export default Home;
