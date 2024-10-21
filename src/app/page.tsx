import Game from "@/components/Game";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchGames } from "@/utils/action";
import Image from "next/image";
import { SocketProvider } from "@/components/context/SocketProvider";
import { getCookie } from "@/utils/util";

const Home = async () => {
  const token = await getCookie();
  const games = await fetchGames();
  return (
    <main className="relative w-full h-full flex items-center justify-center flex-col">
      <SocketProvider token={token as string}>
        <Image
          src="/home/bg.png"
          fill
          sizes={"100%"}
          alt="bg"
          priority={true}
          quality={100}
          objectPosition="center"
          className="z-[-2] object-cover"
        />
        <Header />
        <Game games={games} />
        <Footer />
      </SocketProvider>
    </main>
  );
};

export default Home;
