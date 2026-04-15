import { useNavigate } from "react-router-dom";
import { Flame, Zap, Clock, ChevronRight, User, Target, TrendingUp, Gift, TrendingDown, Coins } from "lucide-react";
import StreakCalendar from "@/components/StreakCalendar";
import { useCoins } from "@/hooks/use-coins";

const HomeDashboard = () => {
  const navigate = useNavigate();
  const { balance, history } = useCoins();

  const defaultHistory = [
    { label: "Bonus powitalny", coins: "+0", time: "start", positive: true },
  ];
  const displayHistory = history.length > 0 ? history : defaultHistory;

  const iconMap: Record<string, any> = {
    "Sesja skupienia": Target,
    "Bonus dzienny": Gift,
    "Nagroda za serię": Flame,
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-14 pb-2 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium">Dzień dobry</p>
          <h2 className="text-lg font-semibold text-foreground">Alex</h2>
        </div>
        <button
          onClick={() => navigate("/profile")}
          className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground"
        >
          <User size={18} />
        </button>
      </div>

      {/* Balance card */}
      <div className="px-5 pt-3 pb-2">
        <div className="rounded-2xl p-5 relative overflow-hidden" style={{
          background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--neon)) 100%)",
        }}>
          <div className="absolute inset-0 opacity-20" style={{
            background: "radial-gradient(circle at 90% 10%, hsl(0 0% 100% / 0.3) 0%, transparent 50%)"
          }} />
          <div className="relative z-10">
            <p className="text-primary-foreground/70 text-sm font-medium mb-1">Dostępne saldo</p>
            <h1 className="text-4xl font-extrabold text-primary-foreground tracking-tight">{balance.toLocaleString()}</h1>
            <p className="text-primary-foreground/80 text-sm font-medium mt-0.5">FocusCoins</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Podsumowanie dnia</p>
      </div>

      <div className="px-5 grid grid-cols-3 gap-3 mb-1">
        <div className="bg-card rounded-xl p-3 card-shadow text-center">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-1.5">
            <Clock size={16} className="text-accent" />
          </div>
          <p className="text-lg font-bold text-foreground">2h 14m</p>
          <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Dziś skupienie</p>
        </div>
        <div className="bg-card rounded-xl p-3 card-shadow text-center">
          <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-1.5">
            <Flame size={16} className="text-destructive" />
          </div>
          <p className="text-lg font-bold text-foreground">3 dni</p>
          <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Seria</p>
        </div>
        <div className="bg-card rounded-xl p-3 card-shadow text-center">
          <div className="w-8 h-8 rounded-lg bg-neon/10 flex items-center justify-center mx-auto mb-1.5">
            <Zap size={16} className="text-neon" />
          </div>
          <p className="text-lg font-bold text-foreground">x3</p>
          <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Mnożnik</p>
        </div>
      </div>

      {/* Streak Calendar */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Seria skupienia</p>
      </div>
      <div className="px-5 mb-1">
        <StreakCalendar />
      </div>

      {/* Balance history */}
      <div className="px-5 pt-4 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Historia salda</p>
        </div>
      </div>

      <div className="px-5 mb-4">
        <div className="bg-card rounded-2xl card-shadow divide-y divide-border overflow-hidden">
          {displayHistory.slice(0, 5).map((item, i) => {
            const IconComp = iconMap[item.label] || Coins;
            return (
              <div key={i} className="flex items-center gap-3 px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                  <IconComp size={16} className={item.positive ? "text-primary" : "text-muted-foreground"} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
                <div className="flex items-center gap-1">
                  {item.positive ? (
                    <TrendingUp size={12} className="text-neon" />
                  ) : (
                    <TrendingDown size={12} className="text-destructive" />
                  )}
                  <span className={`text-sm font-semibold ${item.positive ? "text-neon" : "text-destructive"}`}>
                    {item.coins}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-6">
        <button
          onClick={() => navigate("/focus")}
          className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 glow-primary"
        >
          Rozpocznij sesję
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HomeDashboard;
