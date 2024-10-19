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
    <html lang="en" className="">
      <body
        className={`${montserrat.className} antialiased rotate-90 sm:rotate-0`}
      >
        {/* game shape */}
        <svg className="clippy">
          <defs>
            <clipPath id="gameshape" clipPathUnits="objectBoundingBox">
              <path
                d="M0 0.13711C0 0.0867027 0.0449329 0.0403291 0.127004 0.0266538C0.208319 0.0131042 0.330721 5.9971e-09 0.5 0C0.669279 -5.9971e-09 0.79168 0.0131042 0.872996 0.0266538C0.955067 0.040329 1 0.0867027 1 0.13711V0.863315C1 0.918905 0.945747 0.968848 0.853774 0.980429C0.772356 0.990682 0.655566 1 0.5 1C0.344434 1 0.227644 0.990682 0.146226 0.980429C0.0542534 0.968848 0 0.918905 0 0.863315V0.13711Z"
                fill="#FFF717"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="relative sm:w-[100dvw] h-100vh w-100vw cursor-custom">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full">
            {children}
            <div id="modal"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
