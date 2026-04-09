import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Globe, Moon, Sun, Info, ChevronRight, Code, Smartphone, Heart } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();
  const [language, setLanguage] = useState("pl");

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
              <p className="text-lg font-bold text-foreground">1,240 FC</p>
            </div>
          </div>
          <span className="text-xs text-neon font-semibold bg-neon/10 px-2.5 py-1 rounded-full">+125 dzisiaj</span>
        </div>

        {/* Preferences section */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-2">Preferencje</p>
          <div className="bg-card rounded-2xl card-shadow overflow-hidden divide-y divide-border">
            {/* Dark mode */}
            <button onClick={toggle} className="w-full flex items-center justify-between p-4 transition-colors hover:bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                  {theme === "dark" ? <Moon size={18} className="text-primary" /> : <Sun size={18} className="text-primary" />}
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Tryb ciemny</p>
                  <p className="text-xs text-muted-foreground">{theme === "dark" ? "Włączony" : "Wyłączony"}</p>
                </div>
              </div>
              <div className={`w-11 h-6 rounded-full transition-colors relative ${theme === "dark" ? "bg-primary" : "bg-border"}`}>
                <div className={`w-5 h-5 rounded-full bg-primary-foreground absolute top-0.5 transition-transform shadow-sm ${theme === "dark" ? "translate-x-[22px]" : "translate-x-0.5"}`} />
              </div>
            </button>

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
      </div>
    </div>
  );
};

export default Profile;
