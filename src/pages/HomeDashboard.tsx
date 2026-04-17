import { useNavigate } from "react-router-dom";
import { Flame, Zap, Clock, ChevronRight, User, Target, TrendingUp, Gift, TrendingDown, Coins } from "lucide-react";
import StreakCalendar from "@/components/StreakCalendar";

const balanceHistory = [
  { label: "Sesja skupienia", coins: "+25", time: "2h temu", icon: Target, iconColor: "text-primary", positive: true },
  { label: "Bonus dzienny", coins: "+50", time: "5h temu", icon: Gift, iconColor: "text-neon", positive: true },
  { label: "Nagroda za serię", coins: "+50", time: "1d temu", icon: Flame, iconColor: "text-destructive", positive: true },
  { label: "Spotify Premium", coins: "-300", time: "2d temu", icon: Coins, iconColor: "text-muted-foreground", positive: false },
  { label: "Sesja skupienia", coins: "+40", time: "3d temu", icon: Target, iconColor: "text-primary", positive: true },
];

const HomeDashboard = () => {
  const navigate = useNavigate();

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
      <div className="px-5 pt-4 pb-2">
        <div className="rounded-2xl p-6 relative overflow-hidden" style={{
          background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--neon)) 100%)",
        }}>
          <div className="absolute inset-0 opacity-20" style={{
            background: "radial-gradient(circle at 90% 10%, hsl(0 0% 100% / 0.3) 0%, transparent 50%)"
          }} />
          <div className="relative z-10">
            <p className="text-primary-foreground/70 text-sm font-medium mb-1">Dostępne saldo</p>
            <h1 className="text-4xl font-extrabold text-primary-foreground tracking-tight">1,240</h1>
            <p className="text-primary-foreground/80 text-sm font-medium mt-0.5">FocusCoins</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs text-primary-foreground/90 bg-primary-foreground/15 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <TrendingUp size={12} /> +125 dzisiaj
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-2">
        <button
          onClick={() => navigate("/focus")}
          className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 glow-primary"
        >
          Rozpocznij sesję
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Stats */}
      <div className="px-5 pt-5 pb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Podsumowanie dnia</p>
      </div>

      <div className="px-5 grid grid-cols-3 gap-3 mb-2">
        <div className="bg-card rounded-xl p-4 card-shadow text-center">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2">
            <Clock size={18} className="text-accent" />
          </div>
          <p className="text-xl font-bold text-foreground">2h 14m</p>
          <p className="text-[10px] text-muted-foreground font-medium mt-0.5">Dziś skupienie</p>
        </div>
        <div className="bg-card rounded-xl p-4 card-shadow text-center">
          <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-2">
            <Flame size={18} className="text-destructive" />
          </div>
          <p className="text-xl font-bold text-foreground">3 dni</p>
          <p className="text-[10px] text-muted-foreground font-medium mt-0.5">Seria</p>
        </div>
        <div className="bg-card rounded-xl p-4 card-shadow text-center">
          <div className="w-8 h-8 rounded-lg bg-neon/10 flex items-center justify-center mx-auto mb-2">
            <Zap size={18} className="text-neon" />
          </div>
          <p className="text-xl font-bold text-foreground">x3</p>
          <p className="text-[10px] text-muted-foreground font-medium mt-0.5">Mnożnik</p>
        </div>
      </div>

      {/* Streak Calendar */}
      <div className="px-5 pt-5 pb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Seria skupienia</p>
      </div>
      <div className="px-5 mb-2">
        <StreakCalendar />
      </div>

      {/* Balance record */}
      <div className="px-5 pt-5 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Historia salda</p>
          <button className="text-xs text-primary font-medium">Zobacz wszystko</button>
        </div>
      </div>

      <div className="px-5 mb-4">
        <div className="bg-card rounded-2xl card-shadow divide-y divide-border overflow-hidden">
          {balanceHistory.map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3.5">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <item.icon size={18} className={item.iconColor} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{item.label}</p>
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
          ))}
        </div>
      </div>

      {/* Balance record */}
      <div className="px-5 pt-5 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Historia salda</p>
          <button className="text-xs text-primary font-medium">Zobacz wszystko</button>
        </div>
      </div>

export default HomeDashboard;
