import { useLocation, useNavigate } from "react-router-dom";

const SessionComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { coins = 25, minutes = 2 } = (location.state as any) || {};

  const base = Math.floor(coins / 3);
  const multiplier = coins - base;

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-8 py-12 bg-background">
      <div />

      <div className="flex flex-col items-center gap-6 animate-scale-in text-center">
        <div className="text-6xl" style={{ animation: "coin-spin 1s ease-out" }}>🪙</div>
        <div>
          <h1 className="text-5xl font-extrabold gradient-text">+{coins}</h1>
          <p className="text-lg text-muted-foreground font-medium mt-1">FocusCoins zdobyte!</p>
        </div>

        <div className="bg-secondary rounded-2xl p-5 w-full max-w-xs space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Czas skupienia</span>
            <span className="font-semibold text-foreground">{minutes} min</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Nagroda bazowa</span>
            <span className="font-semibold text-foreground">+{base}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Mnożnik (x3)</span>
            <span className="font-semibold text-neon">+{multiplier}</span>
          </div>
          <div className="border-t border-border pt-3 flex justify-between text-sm">
            <span className="font-semibold text-foreground">Razem</span>
            <span className="font-bold text-primary">+{coins}</span>
          </div>
        </div>
      </div>

      <div className="w-full space-y-3">
        <button
          onClick={() => navigate("/focus")}
          className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold text-lg transition-all active:scale-[0.98]"
        >
          Rozpocznij kolejną sesję
        </button>
        <button
          onClick={() => navigate("/home")}
          className="w-full py-4 rounded-2xl bg-secondary text-secondary-foreground font-semibold text-lg transition-all active:scale-[0.98]"
        >
          Wróć na stronę główną
        </button>
      </div>
    </div>
  );
};

export default SessionComplete;
