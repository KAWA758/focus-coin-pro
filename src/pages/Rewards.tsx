import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Music, ShoppingBag, Coffee, Tv, Package, UtensilsCrossed, Coins, Gamepad2, BookOpen, Dumbbell, Plane, Shirt, Headphones, Pizza } from "lucide-react";
import { useCoins } from "@/hooks/use-coins";

const rewards = [
  { id: "1", brand: "Spotify", title: "1 miesiąc Premium", coins: 300, icon: Music, color: "hsl(141 73% 42%)", category: "Muzyka" },
  { id: "2", brand: "Nike", title: "Kupon -15%", coins: 500, icon: ShoppingBag, color: "hsl(0 0% 10%)", category: "Moda" },
  { id: "3", brand: "Starbucks", title: "Darmowe latte", coins: 150, icon: Coffee, color: "hsl(152 40% 30%)", category: "Jedzenie" },
  { id: "4", brand: "Netflix", title: "1 tydzień gratis", coins: 400, icon: Tv, color: "hsl(0 75% 50%)", category: "Inne" },
  { id: "5", brand: "Amazon", title: "Karta 20 zł", coins: 600, icon: Package, color: "hsl(33 100% 50%)", category: "Inne" },
  { id: "6", brand: "Uber Eats", title: "Darmowa dostawa", coins: 200, icon: UtensilsCrossed, color: "hsl(148 60% 45%)", category: "Jedzenie" },
  { id: "7", brand: "PlayStation", title: "Doładowanie 25 zł", coins: 700, icon: Gamepad2, color: "hsl(220 80% 50%)", category: "Gaming" },
  { id: "8", brand: "Audible", title: "1 audiobook gratis", coins: 350, icon: BookOpen, color: "hsl(30 80% 50%)", category: "Inne" },
  { id: "9", brand: "Gymshark", title: "Kupon -20%", coins: 450, icon: Dumbbell, color: "hsl(200 70% 45%)", category: "Moda" },
  { id: "10", brand: "Ryanair", title: "Zniżka 30 zł", coins: 800, icon: Plane, color: "hsl(210 90% 40%)", category: "Inne" },
  { id: "11", brand: "Zalando", title: "Kupon -10%", coins: 250, icon: Shirt, color: "hsl(15 80% 55%)", category: "Moda" },
  { id: "12", brand: "Apple Music", title: "2 tygodnie gratis", coins: 200, icon: Headphones, color: "hsl(340 60% 50%)", category: "Muzyka" },
  { id: "13", brand: "Domino's", title: "Pizza gratis", coins: 550, icon: Pizza, color: "hsl(205 80% 45%)", category: "Jedzenie" },
];

const categories = ["Wszystkie", "Muzyka", "Jedzenie", "Moda", "Gaming"];

const Rewards = () => {
  const navigate = useNavigate();
  const { balance } = useCoins();
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filtered = activeCategory === "Wszystkie"
    ? rewards
    : rewards.filter((r) => r.category === activeCategory);

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
            <p className="text-lg font-bold text-foreground">{balance.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">dostępnych monet</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-5 pt-3 pb-1">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                cat === activeCategory
                  ? "gradient-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="px-5 pt-3 pb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Dostępne oferty</p>
      </div>

      <div className="px-5 pb-6 grid grid-cols-2 gap-3">
        {filtered.map((r) => {
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
