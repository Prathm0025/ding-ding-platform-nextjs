import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";

const tomoBossa = localFont({
  src: "./fonts/TOMOBossaBlack.ttf",
  variable: "--font-tomobossa",
  weight: "100 900",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ding Ding",
  description: "Gaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="rotate-90 sm:rotate-0">
      <body className={`${montserrat.className} antialiased`}>
        <div className="relative w-screen h-screen cursor-custom">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-[100vw] w-[100vh] sm:h-[100vh] sm:w-[100vw]">
            {children}
            <div id="modal"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
