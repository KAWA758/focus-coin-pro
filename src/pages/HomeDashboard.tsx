import { useNavigate } from "react-router-dom";
import { Flame, Zap, Clock, ChevronRight } from "lucide-react";

const HomeDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="px-5 pt-14 pb-6 animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-muted-foreground font-medium">Dzień dobry 👋</p>
          <h2 className="text-lg font-semibold text-foreground">Alex</h2>
        </div>
        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
          A
        </div>
      </div>

      <div className="gradient-primary rounded-2xl p-6 mb-6 glow-primary">
        <p className="text-primary-foreground/70 text-sm font-medium mb-1">Dostępne saldo</p>
        <h1 className="text-4xl font-extrabold text-primary-foreground tracking-tight">1,240</h1>
        <p className="text-primary-foreground/80 text-sm font-medium mt-0.5">FocusCoins</p>
        <div className="flex items-center gap-1 mt-3">
          <span className="text-xs text-primary-foreground/60 bg-primary-foreground/10 px-2 py-0.5 rounded-full">
            +125 dzisiaj
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-card rounded-xl p-4 card-shadow text-center">
          <Clock size={20} className="mx-auto mb-2 text-accent" />
          <p className="text-xl font-bold text-foreground">2h 14m</p>
          <p className="text-[10px] text-muted-foreground font-medium mt-0.5">Dziś skupienie</p>
        </div>
        <div className="bg-card rounded-xl p-4 card-shadow text-center">
          <Flame size={20} className="mx-auto mb-2 text-destructive" />
          <p className="text-xl font-bold text-foreground">3 dni</p>
          <p className="text-[10px] text-muted-foreground font-medium mt-0.5">Seria 🔥</p>
        </div>
        <div className="bg-card rounded-xl p-4 card-shadow text-center">
          <Zap size={20} className="mx-auto mb-2 text-neon" />
          <p className="text-xl font-bold text-foreground">x3</p>
          <p className="text-[10px] text-muted-foreground font-medium mt-0.5">Mnożnik</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground">Ostatnia aktywność</h3>
          <button className="text-xs text-primary font-medium">Zobacz wszystko</button>
        </div>
        {[
          { label: "Sesja skupienia", coins: "+25", time: "2h temu", icon: "🎯" },
          { label: "Bonus dzienny", coins: "+50", time: "5h temu", icon: "🎁" },
          { label: "Nagroda za serię", coins: "+50", time: "1d temu", icon: "🔥" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-lg">
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.time}</p>
            </div>
            <span className="text-sm font-semibold text-neon">{item.coins}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/focus")}
        className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
      >
        Rozpocznij sesję
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default HomeDashboard;
