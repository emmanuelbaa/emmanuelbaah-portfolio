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

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute left-1/3 top-1/3 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      {/* typing text */}
      <div className="mb-14 flex items-center font-mono text-3xl md:text-4xl font-bold tracking-wide text-cyan-300">
        {text}
        <span className="ml-1 animate-pulse text-cyan-400">|</span>
      </div>

      {/* circular loader */}
      <div className="relative flex items-center justify-center">

        {/* rotating gradient ring */}
        <div className="absolute h-32 w-32 rounded-full border-[3px] border-transparent
        border-t-cyan-400 border-r-fuchsia-500
        animate-spin shadow-[0_0_25px_rgba(0,255,255,0.6)]" />

        {/* outer glass circle */}
        <div className="flex items-center justify-center h-28 w-28 rounded-full
        border border-white/10 bg-white/5 backdrop-blur-md">

          {/* center text */}
          <span className="text-2xl font-bold text-cyan-300 tracking-wide">
            Hi
          </span>

        </div>

      </div>

      <p className="mt-10 text-sm tracking-widest text-cyan-300/60 uppercase">
        Initializing experience
      </p>
    </div>
  );
};