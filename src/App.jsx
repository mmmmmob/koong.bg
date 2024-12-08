import { Analytics } from "@vercel/analytics/react";
import bgvid1Mp4 from "./assets/videos/bgvid1.mp4";
import bgvid1WebM from "./assets/videos/bgvid1.webm";
import bgvid2Mp4 from "./assets/videos/bgvid2.mp4";
import bgvid2WebM from "./assets/videos/bgvid2.webm";
import bgvid3Mp4 from "./assets/videos/bgvid3.mp4";
import bgvid3WebM from "./assets/videos/bgvid3.webm";
import bgvid4Mp4 from "./assets/videos/bgvid4.mp4";
import bgvid4WebM from "./assets/videos/bgvid4.webm";

import Footer from "./components/Footer";

const videosMp4 = [bgvid1Mp4, bgvid2Mp4, bgvid3Mp4, bgvid4Mp4];
const videosWebM = [bgvid1WebM, bgvid2WebM, bgvid3WebM, bgvid4WebM];
const random = Math.floor(Math.random() * 4);

function App() {
  return (
    <>
      <div className="bg-color-main text-color-main flex h-[calc(100svh-56px)] w-screen items-center justify-center">
        <video autoPlay loop playsInline muted className="bg-vid">
          <source src={videosMp4[random]} type="video/mp4" />
          <source src={videosWebM[random]} type="video/webm" />
        </video>
        <div className="w-max">
          <h1 className="bg-size-200% z-50 mb-8 text-center font-sans text-8xl font-bold italic tracking-wider drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] max-sm:text-7xl">
            KOONG
          </h1>
          <div className="z-10 m-5 flex flex-col items-center self-center">
            <div className="flex pb-2">
              <div className="mr-2">
                <img
                  src="/bookcover.png"
                  alt="pointillism_cover"
                  className="size-8 rounded drop-shadow-md"
                />
              </div>
              <div className="flex space-x-2">
                <h1 className="z-50 self-center font-serif text-lg font-semibold drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] max-sm:text-base">
                  Pointillism Vol.1 Available Now!
                </h1>
              </div>
            </div>
            <div className="z-50 flex space-x-2">
              <a
                href="https://www.etsy.com/listing/1779190793/pointillism-volume-1-a-graphic-novel-by"
                target="_blank"
                className="hover:text-color-invert font-serif font-light underline decoration-dashed decoration-1 underline-offset-4 drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] hover:decoration-solid max-sm:text-xs"
              >
                Buy on Etsy
              </a>
              <a
                href="https://pinkoi.com/product/PCN5rC83"
                target="_blank"
                className="hover:text-color-invert font-serif font-light underline decoration-dashed decoration-1 underline-offset-4 drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] hover:decoration-solid max-sm:text-xs"
              >
                Buy on Pinkoi
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 flex flex-col">
          <div className="mb-7">
            <p className="font-serif text-lg font-bold drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)]">
              Follow Me!
            </p>
          </div>
          <svg
            className="size-12 animate-bounce self-center fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
          >
            <g id="Down">
              <polygon points="18.294 16.793 13.001 22.086 13.001 1 12.001 1 12.001 22.086 6.706 16.792 5.999 17.499 12.501 24 19.001 17.5 18.294 16.793" />
            </g>
          </svg>
        </div>
      </div>
      <footer className="sticky bottom-0">
        <Footer />
      </footer>
      <Analytics />
    </>
  );
}

export default App;
