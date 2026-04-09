import { useNavigate } from "react-router-dom";
import { Music, ShoppingBag, Coffee, Tv, Package, UtensilsCrossed, Coins } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const rewards = [
  { id: "1", brand: "Spotify", title: "1 miesiąc Premium", coins: 300, icon: Music, color: "hsl(141 73% 42%)" },
  { id: "2", brand: "Nike", title: "Kupon -15%", coins: 500, icon: ShoppingBag, color: "hsl(0 0% 10%)" },
  { id: "3", brand: "Starbucks", title: "Darmowe latte", coins: 150, icon: Coffee, color: "hsl(152 40% 30%)" },
  { id: "4", brand: "Netflix", title: "1 tydzień gratis", coins: 400, icon: Tv, color: "hsl(0 75% 50%)" },
  { id: "5", brand: "Amazon", title: "Karta podarunkowa 20 zł", coins: 600, icon: Package, color: "hsl(33 100% 50%)" },
  { id: "6", brand: "Uber Eats", title: "Darmowa dostawa", coins: 200, icon: UtensilsCrossed, color: "hsl(148 60% 45%)" },
];

const Rewards = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      <div className="px-5 pt-14 pb-2">
        <h1 className="text-2xl font-bold text-foreground mb-1">Nagrody</h1>
        <p className="text-sm text-muted-foreground mb-4">Wymień FocusCoins na prawdziwe nagrody</p>
      </div>

      <div className="px-5 mb-2">
        <div className="bg-card rounded-2xl p-4 card-shadow flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Coins size={18} className="text-primary-foreground" />
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">1,240</p>
            <p className="text-xs text-muted-foreground">dostępnych monet</p>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Dostępne oferty</p>
      </div>

      <div className="px-5 pb-6 grid grid-cols-2 gap-3">
        {rewards.map((r) => {
          const IconComp = r.icon;
          return (
            <button
              key={r.id}
              onClick={() => navigate(`/reward/${r.id}`, { state: { ...r, icon: undefined } })}
              className="bg-card rounded-2xl p-4 card-shadow text-left transition-all active:scale-[0.97] hover:shadow-lg"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${r.color}20` }}
              >
                <IconComp size={22} style={{ color: r.color }} />
              </div>
              <p className="text-xs text-muted-foreground font-medium">{r.brand}</p>
              <p className="text-sm font-semibold text-foreground mt-0.5">{r.title}</p>
              <p className="text-xs font-bold text-primary mt-2 flex items-center gap-1">
                <Coins size={12} /> {r.coins}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Rewards;
export { rewards };
