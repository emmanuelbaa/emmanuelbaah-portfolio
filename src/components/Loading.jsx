import { useState, useEffect } from "react";
import { Terminal, Cpu } from "lucide-react";

export const Loading = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [percent, setPercent] = useState(0);
  const fullText = "<Debugging..... />";

  useEffect(() => {
    let placeIndex = 0;
    
    // Sync text typing and percentage
    const interval = setInterval(() => {
      setText(fullText.substring(0, placeIndex));
      setPercent(Math.min(Math.floor((placeIndex / fullText.length) * 100), 100));
      placeIndex++;

      if (placeIndex > fullText.length) {
        clearInterval(interval);
        // Final "boot" pause for effect
        setTimeout(() => {
          setPercent(100);
          setTimeout(() => onComplete(), 800);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#020617] overflow-hidden">
      
      {/* Moving Scanline Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/20 shadow-[0_0_20px_cyan] animate-[scan_3s_linear_infinite] z-20" />

      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-[140px] animate-pulse" />
        <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Tech Status Header */}
      <div className="absolute top-10 left-10 hidden md:flex items-center gap-4 text-cyan-500/40 font-mono text-[10px] uppercase tracking-[0.4em]">
        <Cpu size={14} className="animate-spin-slow" />
        <span>System Core: Active</span>
        <span className="ml-4 h-1 w-1 rounded-full bg-cyan-500 animate-ping" />
      </div>

      {/* Main Terminal UI */}
      <div className="relative z-30 flex flex-col items-center">
        
        {/* Loader Ring */}
        <div className="relative mb-16 flex items-center justify-center">
          {/* Inner Pulsing Core */}
          <div className="absolute h-24 w-24 rounded-full bg-cyan-500/10 border border-cyan-500/20 animate-ping" />
          
          {/* Spinning Outer Ring */}
          <div className="h-32 w-32 rounded-full border-[2px] border-slate-800 border-t-cyan-400 border-r-indigo-500 animate-spin shadow-[0_0_30px_rgba(34,211,238,0.2)]" />
          
          <div className="absolute flex flex-col items-center justify-center">
             <span className="text-3xl font-black tracking-tighter text-white">
               {percent}%
             </span>
          </div>
        </div>

        {/* Typing Text */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 font-mono text-xl md:text-2xl font-bold tracking-tight text-white/90">
            <Terminal size={20} className="text-cyan-400" />
            <span>{text}</span>
            <span className="h-6 w-[2px] bg-cyan-400 animate-pulse" />
          </div>
          
          {/* Progress Bar */}
          <div className="w-64 h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300 ease-out"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500">
          Emmanuel Baah <span className="text-slate-700">|</span> Portfolio 2026
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
      `}} />
    </div>
  );
};