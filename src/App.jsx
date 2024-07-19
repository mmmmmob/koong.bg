import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-primary text-primary flex h-[calc(100vh-56px)] w-screen items-center justify-evenly self-center max-sm:flex-col">
        <h3 className="font-serif text-2xl hover:underline max-sm:text-xl">
          about
        </h3>
        <h3 className="font-serif text-2xl hover:underline max-sm:text-xl">
          works
        </h3>
        <h1 className="font-sans text-6xl font-bold italic tracking-wider max-sm:text-5xl">
          KOONG
        </h1>
        <h3 className="font-serif text-2xl hover:underline max-sm:text-xl">
          shops
        </h3>
        <a
          href="mailto:koong.bg@gmail.com"
          className="font-serif text-2xl hover:underline max-sm:text-xl"
        >
          contact
        </a>
      </div>
      <footer className="sticky bottom-0">
        <Footer />
      </footer>
      <Analytics />
    </>
  );
}

export default App;
