import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Coins } from "lucide-react";
import { usePrototype } from "@/hooks/use-prototype";

const FocusSession = () => {
  const navigate = useNavigate();
  const { coinsPerMinute, multiplier, addBalance } = usePrototype();
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const coins = Math.floor((seconds / 60) * coinsPerMinute * multiplier);

  const end = () => {
    setRunning(false);
    const earned = Math.max(coins, 25);
    addBalance(earned);
    navigate("/session-complete", { state: { coins: earned, minutes: mins } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-8 py-12 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(230 25% 7%) 0%, hsl(258 40% 12%) 100%)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(258 80% 56% / 0.4) 0%, transparent 70%)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      />

      <div className="w-full flex justify-between items-center z-10">
        <button onClick={() => navigate("/home")} className="p-2" style={{ color: "hsl(230 10% 50%)" }}>
          <X size={24} />
        </button>
        <span className="text-xs font-medium px-3 py-1 rounded-full"
          style={{ color: "hsl(230 10% 60%)", background: "hsl(0 0% 100% / 0.08)" }}>
          mnożnik x{multiplier} aktywny
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 z-10 animate-scale-in">
        <p className="text-sm font-medium tracking-widest uppercase"
          style={{ color: "hsl(230 10% 50%)" }}>
          Zarabiasz FocusCoins
        </p>
        <h1 className="text-7xl font-extrabold tracking-tight"
          style={{ color: "hsl(0 0% 95%)" }}>
          {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <Coins size={22} style={{ color: "hsl(170 80% 50%)" }} />
          <span className="text-2xl font-bold" style={{ color: "hsl(170 80% 50%)" }}>
            +{coins}
          </span>
        </div>
      </div>

      <button
        onClick={end}
        className="w-full py-4 rounded-2xl border-2 font-semibold text-lg transition-all active:scale-[0.98] z-10"
        style={{
          borderColor: "hsl(258 80% 56%)",
          color: "hsl(258 80% 70%)",
          background: "hsl(258 80% 56% / 0.1)",
        }}
      >
        Zakończ sesję
      </button>
    </div>
  );
};

export default FocusSession;
