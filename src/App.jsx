import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-color-main text-color-main flex h-[calc(100svh-56px)] w-screen items-center justify-center">
        <div className="w-fit">
          <h1 className="text-center font-sans text-6xl font-bold italic tracking-wider max-sm:text-5xl">
            KOONG
          </h1>
          <div className="m-5 flex flex-col items-center self-center">
            <div className="flex pb-2">
              <div className="mr-2">
                <img
                  src="/bookcover.png"
                  alt="pointillism_cover"
                  className="size-8 rounded drop-shadow-md"
                />
              </div>
              <div className="flex space-x-2">
                <h1 className="self-center font-serif text-lg font-semibold max-sm:text-base">
                  Pointillism Vol.1 Available Now!
                </h1>
              </div>
            </div>
            <div className="flex space-x-2">
              <a
                href="https://www.etsy.com/listing/1779190793/pointillism-volume-1-a-graphic-novel-by"
                target="_blank"
                className="hover:text-color-invert font-serif font-light underline decoration-dashed decoration-1 underline-offset-4 hover:decoration-solid max-sm:text-xs"
              >
                Buy on Etsy
              </a>
              <a
                href="https://pinkoi.com/product/PCN5rC83"
                target="_blank"
                className="hover:text-color-invert font-serif font-light underline decoration-dashed decoration-1 underline-offset-4 hover:decoration-solid max-sm:text-xs"
              >
                Buy on Pinkoi
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-28 flex flex-col">
          <div className="mb-7">
            <p className="font-serif text-lg font-bold">Follow Me!</p>
          </div>
          <svg
            className="size-12 animate-bounce self-center fill-black dark:fill-white"
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
