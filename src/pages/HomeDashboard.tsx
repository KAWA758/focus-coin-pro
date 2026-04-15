import { useNavigate } from "react-router-dom";
import { Flame, Zap, Clock, ChevronRight, User, Target, TrendingUp, TrendingDown, Coins, Sparkles } from "lucide-react";
import StreakCalendar from "@/components/StreakCalendar";
import { useCoins } from "@/hooks/use-coins";

const HomeDashboard = () => {
  const navigate = useNavigate();
  const { balance, history } = useCoins();

  const iconMap: Record<string, any> = {
    "Sesja skupienia": Target,
    "Bonus dzienny": Sparkles,
    "Nagroda za serię": Flame,
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-14 pb-3 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium">Dzień dobry 👋</p>
          <h2 className="text-xl font-bold text-foreground font-heading">Alex</h2>
        </div>
        <button
          onClick={() => navigate("/profile")}
          className="w-11 h-11 rounded-full gradient-vapor flex items-center justify-center text-primary-foreground shadow-lg"
        >
          <User size={18} />
        </button>
      </div>

      {/* Balance card — spans full width, hero style */}
      <div className="px-5 pb-4">
        <div className="rounded-2xl p-5 relative overflow-hidden gradient-vapor">
          <div className="absolute inset-0 opacity-30" style={{
            background: "radial-gradient(circle at 85% 15%, hsl(192 85% 69% / 0.5) 0%, transparent 55%)"
          }} />
          <div className="relative z-10">
            <p className="text-primary-foreground/70 text-xs font-semibold uppercase tracking-wider mb-1">Saldo</p>
            <h1 className="text-5xl font-extrabold text-primary-foreground tracking-tight font-heading">{balance.toLocaleString()}</h1>
            <p className="text-primary-foreground/80 text-sm font-medium mt-0.5">FocusCoins</p>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="px-5 pb-2">
        <div className="grid grid-cols-3 gap-2.5">
          {/* Streak — 2 cols */}
          <div className="col-span-2 bg-card rounded-2xl p-4 card-shadow">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Flame size={14} className="text-destructive" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Seria</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-foreground font-heading">3</span>
              <span className="text-sm text-muted-foreground font-medium">dni</span>
            </div>
          </div>

          {/* Multiplier — 1 col */}
          <div className="bg-card rounded-2xl p-4 card-shadow flex flex-col items-center justify-center">
            <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center mb-1.5">
              <Zap size={14} className="text-accent" />
            </div>
            <span className="text-2xl font-extrabold text-foreground font-heading">x3</span>
            <span className="text-[10px] text-muted-foreground font-medium">Mnożnik</span>
          </div>

          {/* Focus time — 1 col */}
          <div className="bg-card rounded-2xl p-4 card-shadow flex flex-col items-center justify-center">
            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center mb-1.5">
              <Clock size={14} className="text-primary" />
            </div>
            <span className="text-lg font-bold text-foreground font-heading">2h 14m</span>
            <span className="text-[10px] text-muted-foreground font-medium">Dziś</span>
          </div>

          {/* CTA button — 2 cols */}
          <div className="col-span-2">
            <button
              onClick={() => navigate("/focus")}
              className="w-full py-4 rounded-2xl gradient-vapor text-primary-foreground font-bold text-base transition-all active:scale-[0.97] flex items-center justify-center gap-2 shadow-lg font-heading"
            >
              Rozpocznij sesję
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Streak Calendar */}
      <div className="px-5 pt-3 pb-1.5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Kalendarz serii</p>
      </div>
      <div className="px-5 mb-1">
        <StreakCalendar />
      </div>

      {/* Balance history */}
      {history.length > 0 && (
        <>
          <div className="px-5 pt-4 pb-1.5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ostatnia aktywność</p>
          </div>
          <div className="px-5 mb-4">
            <div className="bg-card rounded-2xl card-shadow divide-y divide-border overflow-hidden">
              {history.slice(0, 4).map((item, i) => {
                const IconComp = iconMap[item.label] || Coins;
                return (
                  <div key={i} className="flex items-center gap-3 px-4 py-3">
                    <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                      <IconComp size={15} className={item.positive ? "text-primary" : "text-muted-foreground"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {item.positive ? (
                        <TrendingUp size={12} className="text-accent" />
                      ) : (
                        <TrendingDown size={12} className="text-destructive" />
                      )}
                      <span className={`text-sm font-bold font-heading ${item.positive ? "text-accent" : "text-destructive"}`}>
                        {item.coins}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeDashboard;
