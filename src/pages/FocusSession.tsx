import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const FocusSession = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const coins = Math.floor(seconds / 6); // ~10 coins per minute

  const end = () => {
    setRunning(false);
    navigate("/session-complete", { state: { coins: Math.max(coins, 25), minutes: mins } });
  };

  return (
    <div className="min-h-screen bg-background dark flex flex-col items-center justify-between px-8 py-12 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(230 25% 7%) 0%, hsl(258 40% 12%) 100%)" }}>
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(258 80% 56% / 0.4) 0%, transparent 70%)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      />

      {/* Top bar */}
      <div className="w-full flex justify-between items-center z-10">
        <button onClick={() => navigate("/home")} className="text-muted-foreground p-2">
          <X size={24} />
        </button>
        <span className="text-xs font-medium text-muted-foreground bg-secondary/20 px-3 py-1 rounded-full">
          x3 multiplier active
        </span>
      </div>

      {/* Timer */}
      <div className="flex flex-col items-center gap-4 z-10 animate-scale-in">
        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
          Earning FocusCoins
        </p>
        <h1 className="text-7xl font-extrabold tracking-tight"
          style={{ color: "hsl(0 0% 95%)" }}>
          {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-2xl">🪙</span>
          <span className="text-2xl font-bold" style={{ color: "hsl(170 80% 50%)" }}>
            +{coins}
          </span>
        </div>
      </div>

      {/* End button */}
      <button
        onClick={end}
        className="w-full py-4 rounded-2xl border-2 font-semibold text-lg transition-all active:scale-[0.98] z-10"
        style={{
          borderColor: "hsl(258 80% 56%)",
          color: "hsl(258 80% 70%)",
          background: "hsl(258 80% 56% / 0.1)",
        }}
      >
        End Session
      </button>
    </div>
  );
};

export default FocusSession;
