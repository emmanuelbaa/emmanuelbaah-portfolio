import { useState, useEffect } from "react";

export const Loading = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Debugging..... />";

  useEffect(() => {
    let placeIndex = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, placeIndex));
      placeIndex++;

      if (placeIndex > fullText.length) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 1000);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mb-8 flex items-center font-mono text-3xl md:text-4xl font-bold tracking-wide text-cyan-300">
        {text}
        <span className="ml-1 animate-pulse text-cyan-400">|</span>
      </div>


      <div className="relative h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
        <div className="absolute h-full w-1/2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_15px_rgba(0,255,255,0.6)] animate-loading" />
      </div>

      <p className="mt-6 text-sm tracking-widest text-cyan-300/60 uppercase">
        Initializing experience
      </p>
    </div>
  );
};
