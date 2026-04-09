import { useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    emoji: "🎯",
    title: "Earn rewards for not using your phone",
    subtitle: "Put your phone down. Stack coins. Redeem real rewards.",
  },
  {
    emoji: "⏱️",
    title: "Track your focus time",
    subtitle: "Smart sessions that reward your attention span with FocusCoins.",
  },
  {
    emoji: "🎁",
    title: "Redeem premium rewards",
    subtitle: "Nike, Spotify, Starbucks and more. Your focus has real value.",
  },
];

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-8 py-12">
      {/* Dots */}
      <div className="flex gap-2 pt-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? "w-8 gradient-primary" : "w-2 bg-border"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 animate-fade-in" key={current}>
        <div className="w-32 h-32 rounded-full gradient-primary flex items-center justify-center glow-primary">
          <span className="text-6xl">{slides[current].emoji}</span>
        </div>
        <h1 className="text-3xl font-bold leading-tight text-foreground">
          {slides[current].title}
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
          {slides[current].subtitle}
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={next}
        className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold text-lg transition-all active:scale-[0.98]"
      >
        {current === slides.length - 1 ? "Get Started" : "Continue"}
      </button>
    </div>
  );
};

export default Onboarding;
