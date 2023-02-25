import { Caladea, Caveat } from "@next/font/google";
import "../globals.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Navbar from "./navbar";
import Footer from "./footer";

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caladea",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caveat",
  display: "swap",
});

const languages = ["en", "fr"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: "en" | "fr" };
}) {
  return (
    <html
      lang={lng}
      className={`${caladea.variable} ${caveat.variable} font-serif`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-background dark:bg-background-dark dark:text-stone-200">
        <Navbar lng={lng} />
        {children}
        <Footer lng={lng} />
        <div id="modal"></div>
      </body>
    </html>
  );
}
