import { useNavigate } from "react-router-dom";
import { Flame, Zap, Clock, ChevronRight, User, Target, TrendingUp, Gift, TrendingDown, Coins, ChevronDown, ChevronUp } from "lucide-react";
import StreakCalendar from "@/components/StreakCalendar";
import { useState } from "react";

const balanceHistory = [
  { label: "Sesja skupienia", coins: "+25", time: "2h temu", icon: Target, iconColor: "text-primary", positive: true },
  { label: "Bonus dzienny", coins: "+50", time: "5h temu", icon: Gift, iconColor: "text-neon", positive: true },
  { label: "Nagroda za serię", coins: "+50", time: "1d temu", icon: Flame, iconColor: "text-destructive", positive: true },
  { label: "Spotify Premium", coins: "-300", time: "2d temu", icon: Coins, iconColor: "text-muted-foreground", positive: false },
];

const HomeDashboard = () => {
  const navigate = useNavigate();
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-4 pt-12 pb-1 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground font-medium">Dzień dobry</p>
          <h2 className="text-base font-semibold text-foreground">Alex</h2>
        </div>
        <button
          onClick={() => navigate("/profile")}
          className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-primary-foreground"
        >
          <User size={16} />
        </button>
      </div>

      {/* Balance card — compact */}
      <div className="px-4 pt-2 pb-1">
        <div className="rounded-2xl px-5 py-4 relative overflow-hidden" style={{
          background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--neon)) 100%)",
        }}>
          <div className="absolute inset-0 opacity-20" style={{
            background: "radial-gradient(circle at 90% 10%, hsl(0 0% 100% / 0.3) 0%, transparent 50%)"
          }} />
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-primary-foreground/70 text-[11px] font-medium">Dostępne saldo</p>
              <h1 className="text-3xl font-extrabold text-primary-foreground tracking-tight leading-none mt-0.5">1,240</h1>
              <p className="text-primary-foreground/80 text-xs font-medium">FocusCoins</p>
            </div>
            <span className="text-[11px] text-primary-foreground/90 bg-primary-foreground/15 px-2 py-0.5 rounded-full flex items-center gap-1 self-end">
              <TrendingUp size={11} /> +125
            </span>
          </div>
        </div>
      </div>

      {/* Stats — compact inline */}
      <div className="px-4 pt-3 grid grid-cols-3 gap-2">
        <div className="bg-card rounded-xl py-2.5 px-2 card-shadow text-center">
          <Clock size={14} className="text-accent mx-auto mb-1" />
          <p className="text-sm font-bold text-foreground leading-none">2h 14m</p>
          <p className="text-[9px] text-muted-foreground font-medium mt-0.5">Skupienie</p>
        </div>
        <div className="bg-card rounded-xl py-2.5 px-2 card-shadow text-center">
          <Flame size={14} className="text-destructive mx-auto mb-1" />
          <p className="text-sm font-bold text-foreground leading-none">3 dni</p>
          <p className="text-[9px] text-muted-foreground font-medium mt-0.5">Seria</p>
        </div>
        <div className="bg-card rounded-xl py-2.5 px-2 card-shadow text-center">
          <Zap size={14} className="text-neon mx-auto mb-1" />
          <p className="text-sm font-bold text-foreground leading-none">x3</p>
          <p className="text-[9px] text-muted-foreground font-medium mt-0.5">Mnożnik</p>
        </div>
      </div>

      {/* Streak Calendar — compact */}
      <div className="px-4 pt-3">
        <StreakCalendar />
      </div>

      {/* Balance history — collapsible */}
      <div className="px-4 pt-3">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full flex items-center justify-between py-1.5"
        >
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Historia salda</p>
          {showHistory ? <ChevronUp size={14} className="text-muted-foreground" /> : <ChevronDown size={14} className="text-muted-foreground" />}
        </button>
        {showHistory && (
          <div className="bg-card rounded-2xl card-shadow divide-y divide-border overflow-hidden mt-1">
            {balanceHistory.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 px-3 py-2.5">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <item.icon size={14} className={item.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">{item.label}</p>
                  <p className="text-[10px] text-muted-foreground">{item.time}</p>
                </div>
                <span className={`text-xs font-semibold ${item.positive ? "text-neon" : "text-destructive"}`}>
                  {item.coins}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="px-4 pt-3 pb-4">
        <button
          onClick={() => navigate("/focus")}
          className="w-full py-3.5 rounded-2xl gradient-primary text-primary-foreground font-semibold text-base transition-all active:scale-[0.98] flex items-center justify-center gap-2 glow-primary"
        >
          Rozpocznij sesję
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default HomeDashboard;
