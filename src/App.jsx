import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="flex h-screen w-screen justify-center">
        <h1 className="self-center text-6xl font-bold max-sm:text-4xl">
          🚧 Coming Soon 🚧
        </h1>
      </div>
      <Analytics />
    </>
  );
}

export default App;
