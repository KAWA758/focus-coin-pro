import { useNavigate } from "react-router-dom";

const rewards = [
  { id: "1", brand: "Spotify", title: "1 Month Premium", coins: 300, emoji: "🎵", color: "hsl(141 73% 42%)" },
  { id: "2", brand: "Nike", title: "15% Off Coupon", coins: 500, emoji: "👟", color: "hsl(0 0% 10%)" },
  { id: "3", brand: "Starbucks", title: "Free Latte", coins: 150, emoji: "☕", color: "hsl(152 40% 30%)" },
  { id: "4", brand: "Netflix", title: "1 Week Free", coins: 400, emoji: "🎬", color: "hsl(0 75% 50%)" },
  { id: "5", brand: "Amazon", title: "€5 Gift Card", coins: 600, emoji: "📦", color: "hsl(33 100% 50%)" },
  { id: "6", brand: "Uber Eats", title: "Free Delivery", coins: 200, emoji: "🍔", color: "hsl(148 60% 45%)" },
];

const Rewards = () => {
  const navigate = useNavigate();

  return (
    <div className="px-5 pt-14 pb-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-foreground mb-1">Rewards</h1>
      <p className="text-sm text-muted-foreground mb-6">Redeem your FocusCoins for real rewards</p>

      {/* Balance pill */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-lg">🪙</span>
        <span className="font-bold text-foreground">1,240</span>
        <span className="text-sm text-muted-foreground">available</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {rewards.map((r) => (
          <button
            key={r.id}
            onClick={() => navigate(`/reward/${r.id}`, { state: r })}
            className="bg-card rounded-2xl p-4 card-shadow text-left transition-all active:scale-[0.97] hover:shadow-lg"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
              style={{ background: `${r.color}20` }}
            >
              {r.emoji}
            </div>
            <p className="text-xs text-muted-foreground font-medium">{r.brand}</p>
            <p className="text-sm font-semibold text-foreground mt-0.5">{r.title}</p>
            <p className="text-xs font-bold text-primary mt-2">🪙 {r.coins}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
export { rewards };
