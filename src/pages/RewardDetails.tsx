import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";

const RewardDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reward = location.state as any;
  const [redeemed, setRedeemed] = useState(false);

  if (!reward) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button onClick={() => navigate("/rewards")} className="text-primary font-medium">
          Przejdź do nagród
        </button>
      </div>
    );
  }

  if (redeemed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-8 gap-6 animate-scale-in">
        <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center glow-primary">
          <Check size={40} className="text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground text-center">Nagroda odebrana!</h1>
        <p className="text-muted-foreground text-center text-sm">
          Kod nagrody {reward.brand} został wysłany na Twój e-mail.
        </p>
        <button
          onClick={() => navigate("/rewards")}
          className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold text-lg mt-4"
        >
          Wróć do nagród
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col px-5 pt-6 pb-8 animate-fade-in">
      <button onClick={() => navigate("/rewards")} className="mb-4 text-muted-foreground">
        <ArrowLeft size={24} />
      </button>

      <div className="rounded-2xl p-8 flex flex-col items-center text-center mb-6"
        style={{ background: `${reward.color}15` }}>
        <span className="text-7xl mb-4">{reward.emoji}</span>
        <p className="text-sm text-muted-foreground font-medium">{reward.brand}</p>
        <h1 className="text-2xl font-bold text-foreground mt-1">{reward.title}</h1>
      </div>

      <div className="space-y-4 flex-1">
        <div className="bg-secondary rounded-xl p-4">
          <p className="text-xs text-muted-foreground mb-1">Koszt</p>
          <p className="text-lg font-bold text-foreground">🪙 {reward.coins} FocusCoins</p>
        </div>
        <div className="bg-secondary rounded-xl p-4">
          <p className="text-xs text-muted-foreground mb-1">Szczegóły</p>
          <p className="text-sm text-foreground">
            Odbierz tę nagrodę, aby otrzymać {reward.title.toLowerCase()} od {reward.brand}.
            Kod zostanie dostarczony na Twój e-mail w ciągu 24 godzin.
          </p>
        </div>
      </div>

      <button
        onClick={() => setRedeemed(true)}
        className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold text-lg transition-all active:scale-[0.98] mt-6"
      >
        Odbierz za {reward.coins} monet
      </button>
    </div>
  );
};

export default RewardDetails;
