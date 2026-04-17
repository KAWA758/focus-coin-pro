import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Globe, Moon, Sun, Info, ChevronRight, Code, Smartphone, Heart, Sparkles, Palette, Sliders, RotateCcw, Coins, Clock, Flame, Zap } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { usePrototype } from "@/hooks/use-prototype";
import { useState } from "react";

const themes = [
  { id: "light" as const, label: "Jasny", icon: Sun, desc: "Klasyczny jasny motyw" },
  { id: "dark" as const, label: "Ciemny", icon: Moon, desc: "Tryb nocny" },
  { id: "liquid-glass" as const, label: "Liquid Glass", icon: Sparkles, desc: "Przezroczysty szkło" },
  { id: "y2k" as const, label: "Y2K", icon: Palette, desc: "Retro futuryzm" },
];

const Profile = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const proto = usePrototype();
  const [language] = useState("pl");

  type NumKey = "balance" | "todayEarned" | "streak" | "multiplier" | "todayFocusMinutes" | "coinsPerMinute" | "sessionTargetMinutes";
  const fields: { key: NumKey; label: string; icon: typeof Coins; min: number; max: number; step: number; suffix?: string }[] = [
    { key: "balance", label: "Saldo", icon: Coins, min: 0, max: 100000, step: 10, suffix: "FC" },
    { key: "todayEarned", label: "Zarobione dziś", icon: Coins, min: 0, max: 5000, step: 5, suffix: "FC" },
    { key: "streak", label: "Seria", icon: Flame, min: 0, max: 365, step: 1, suffix: "dni" },
    { key: "multiplier", label: "Mnożnik", icon: Zap, min: 1, max: 10, step: 1, suffix: "x" },
    { key: "todayFocusMinutes", label: "Skupienie dziś", icon: Clock, min: 0, max: 1440, step: 5, suffix: "min" },
    { key: "coinsPerMinute", label: "Coins / min", icon: Coins, min: 1, max: 100, step: 1 },
    { key: "sessionTargetMinutes", label: "Cel sesji", icon: Clock, min: 5, max: 180, step: 5, suffix: "min" },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Header with gradient */}
      <div className="gradient-primary px-5 pt-14 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          background: "radial-gradient(circle at 80% 20%, hsl(170 80% 50% / 0.4) 0%, transparent 50%)"
        }} />
        <button onClick={() => navigate("/home")} className="mb-6 text-primary-foreground/70 relative z-10">
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary-foreground/30">
            <User size={28} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary-foreground">Alex Kowalski</h1>
            <p className="text-sm text-primary-foreground/70">alex@focuscoin.app</p>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-4 relative z-10 pb-8 space-y-4">
        {/* Balance mini card */}
        <div className="bg-card rounded-2xl p-4 card-shadow flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-neon flex items-center justify-center">
              <Smartphone size={18} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Dostępne saldo</p>
              <p className="text-lg font-bold text-foreground">{proto.balance.toLocaleString("pl-PL")} FC</p>
            </div>
          </div>
          <span className="text-xs text-neon font-semibold bg-neon/10 px-2.5 py-1 rounded-full">+{proto.todayEarned} dzisiaj</span>
        </div>

        {/* Theme selector */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-2">Motyw</p>
          <div className="grid grid-cols-2 gap-2">
            {themes.map((t) => {
              const active = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`bg-card rounded-2xl p-3.5 card-shadow text-left transition-all ${
                    active ? "ring-2 ring-primary" : "hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      active ? "gradient-primary" : "bg-secondary"
                    }`}>
                      <t.icon size={16} className={active ? "text-primary-foreground" : "text-muted-foreground"} />
                    </div>
                    <p className={`text-sm font-semibold ${active ? "text-primary" : "text-foreground"}`}>{t.label}</p>
                  </div>
                  <p className="text-[10px] text-muted-foreground ml-[42px]">{t.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Preferences section */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-2">Preferencje</p>
          <div className="bg-card rounded-2xl card-shadow overflow-hidden divide-y divide-border">
            {/* Language */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                  <Globe size={18} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Język</p>
                  <p className="text-xs text-muted-foreground">Wybierz język aplikacji</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Polski</span>
                <ChevronRight size={16} className="text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-2">Informacje</p>
          <div className="bg-card rounded-2xl card-shadow overflow-hidden divide-y divide-border">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                  <Info size={18} className="text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Wersja aplikacji</p>
                  <p className="text-xs text-muted-foreground">1.0.0 (build 42)</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                  <Code size={18} className="text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Środowisko</p>
                  <p className="text-xs text-muted-foreground">Prototyp deweloperski</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-neon bg-neon/10 px-2 py-0.5 rounded-full">DEV</span>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                  <Heart size={18} className="text-destructive" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Stworzone przez</p>
                  <p className="text-xs text-muted-foreground">Zespół FocusCoin</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dev info card */}
        <div className="rounded-2xl p-4 border border-border bg-gradient-to-br from-card to-secondary/50">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl gradient-neon flex items-center justify-center shrink-0 mt-0.5">
              <Code size={16} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Tryb prototypu</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                To jest interaktywny prototyp demonstracyjny. Dane są symulowane w celach prezentacyjnych dla inwestorów.
              </p>
            </div>
          </div>
        </div>

        {/* Demo controls panel */}
        <div>
          <div className="flex items-center justify-between px-1 mb-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Sliders size={12} /> Panel demo
            </p>
            <button
              onClick={proto.reset}
              className="text-xs text-primary font-medium flex items-center gap-1"
            >
              <RotateCcw size={12} /> Reset
            </button>
          </div>
          <div className="bg-card rounded-2xl card-shadow overflow-hidden divide-y divide-border">
            {fields.map((f) => {
              const value = proto[f.key] as number;
              return (
                <div key={f.key} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                        <f.icon size={14} className="text-primary" />
                      </div>
                      <p className="text-sm font-medium text-foreground">{f.label}</p>
                    </div>
                    <input
                      type="number"
                      value={value}
                      min={f.min}
                      max={f.max}
                      step={f.step}
                      onChange={(e) => proto.setField(f.key, Number(e.target.value) as never)}
                      className="w-20 text-right text-sm font-bold text-foreground bg-secondary rounded-lg px-2 py-1 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min={f.min}
                      max={f.max}
                      step={f.step}
                      value={value}
                      onChange={(e) => proto.setField(f.key, Number(e.target.value) as never)}
                      className="flex-1 accent-primary"
                    />
                    {f.suffix && <span className="text-[10px] text-muted-foreground font-medium w-8 text-right">{f.suffix}</span>}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 px-1">
            Zmiany aktualizują dashboard, sesję i nagrody w czasie rzeczywistym.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
