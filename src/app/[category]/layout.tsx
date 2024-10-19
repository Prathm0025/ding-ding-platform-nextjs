import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full h-full flex flex-col justify-center items-center">
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
      {children}
      <Footer />
    </main>
  );
}
