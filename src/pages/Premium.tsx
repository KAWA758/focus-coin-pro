import { Check, Crown } from "lucide-react";

const benefits = [
  "Unlimited focus sessions",
  "5x coin multiplier",
  "Exclusive premium rewards",
  "Detailed analytics & insights",
  "Priority support",
  "No ads, ever",
];

const Premium = () => (
  <div className="px-5 pt-14 pb-6 animate-fade-in">
    <div className="text-center mb-8">
      <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 glow-primary">
        <Crown size={28} className="text-primary-foreground" />
      </div>
      <h1 className="text-2xl font-bold text-foreground">FocusCoin Premium</h1>
      <p className="text-sm text-muted-foreground mt-1">Unlock your full potential</p>
    </div>

    {/* Pricing card */}
    <div className="bg-card rounded-2xl p-6 card-shadow border border-primary/20 mb-6">
      <div className="text-center mb-6">
        <div className="flex items-end justify-center gap-1">
          <span className="text-4xl font-extrabold text-foreground">19.99</span>
          <span className="text-lg font-semibold text-muted-foreground mb-1">PLN</span>
        </div>
        <p className="text-sm text-muted-foreground">per month</p>
      </div>

      <div className="space-y-3">
        {benefits.map((b, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
              <Check size={12} className="text-primary-foreground" />
            </div>
            <span className="text-sm text-foreground">{b}</span>
          </div>
        ))}
      </div>
    </div>

    <button className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold text-lg transition-all active:scale-[0.98]">
      Upgrade to Premium
    </button>
    <p className="text-xs text-muted-foreground text-center mt-3">
      Cancel anytime · 7-day free trial
    </p>
  </div>
);

export default Premium;
