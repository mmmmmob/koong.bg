import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="bg-primary text-primary flex h-screen w-screen items-center justify-evenly self-center max-sm:flex-col">
        <h3 className="font-serif text-2xl hover:underline">about</h3>
        <h3 className="font-serif text-2xl hover:underline">works</h3>
        <h1 className="font-sans text-6xl font-bold italic tracking-wider max-sm:text-4xl">
          KOONG
        </h1>
        <h3 className="font-serif text-2xl hover:underline">shops</h3>
        <a
          href="mailto:koong.bg@gmail.com"
          className="font-serif text-2xl hover:underline"
        >
          contact
        </a>
      </div>
      <Analytics />
    </>
  );
}

export default App;
