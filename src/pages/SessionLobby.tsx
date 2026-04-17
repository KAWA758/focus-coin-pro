import { useNavigate } from "react-router-dom";
import { Zap, Flame, Clock } from "lucide-react";
import { usePrototype } from "@/hooks/use-prototype";

const SessionLobby = () => {
  const navigate = useNavigate();
  const { streak, todayFocusMinutes, multiplier } = usePrototype();

  const focusH = Math.floor(todayFocusMinutes / 60);
  const focusM = todayFocusMinutes % 60;

  return (
    <div className="min-h-screen px-5 pt-12 pb-24 flex flex-col items-center justify-between">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Sesja skupienia</h1>
        <p className="text-sm text-muted-foreground">Zacznij pracować i zarabiaj FocusCoins</p>
      </div>

      {/* Stats grid */}
      <div className="w-full grid grid-cols-3 gap-3 mb-12">
        <div className="bg-card rounded-xl p-4 card-shadow text-center">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2">
            <Clock size={16} className="text-accent" />
          </div>
          <p className="text-lg font-bold text-foreground">{focusH}h {focusM}m</p>
          <p className="text-[10px] text-muted-foreground font-medium mt-1">Dziś skupienie</p>
        </div>
        <div className="bg-card rounded-xl p-4 card-shadow text-center">
          <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-2">
            <Flame size={16} className="text-destructive" />
          </div>
          <p className="text-lg font-bold text-foreground">{streak}</p>
          <p className="text-[10px] text-muted-foreground font-medium mt-1">dni serii</p>
        </div>
        <div className="bg-card rounded-xl p-4 card-shadow text-center">
          <div className="w-8 h-8 rounded-lg bg-neon/10 flex items-center justify-center mx-auto mb-2">
            <Zap size={16} className="text-neon" />
          </div>
          <p className="text-lg font-bold text-foreground">x{multiplier}</p>
          <p className="text-[10px] text-muted-foreground font-medium mt-1">Mnożnik</p>
        </div>
      </div>

      {/* Main CTA */}
      <div className="w-full flex flex-col gap-3">
        <button
          onClick={() => navigate("/focus")}
          className="w-full py-6 rounded-2xl gradient-primary text-primary-foreground font-bold text-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 glow-primary"
        >
          <Zap size={28} />
          Rozpocznij sesję
        </button>
        <p className="text-xs text-muted-foreground text-center">
          Poświęć czas na skupienie i zarabiaj nagrody
        </p>
      </div>
    </div>
  );
};

export default SessionLobby;
