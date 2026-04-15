import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Target, Timer, Gift } from "lucide-react";

const slides = [
  {
    icon: Target,
    title: "Zarabiaj nagrody za nieużywanie telefonu",
    subtitle: "Odłóż telefon. Zbieraj monety. Odbieraj prawdziwe nagrody.",
  },
  {
    icon: Timer,
    title: "Śledź swój czas skupienia",
    subtitle: "Inteligentne sesje, które nagradzają Twoją uwagę monetami FocusCoin.",
  },
  {
    icon: Gift,
    title: "Odbieraj ekskluzywne nagrody",
    subtitle: "Nike, Spotify, Starbucks i więcej. Twoje skupienie ma realną wartość.",
  },
];

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else navigate("/home");
  };

  const SlideIcon = slides[current].icon;

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-8 py-12">
      <div />

      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 animate-fade-in" key={current}>
        <div className="w-32 h-32 rounded-full gradient-neon flex items-center justify-center glow-primary">
          <SlideIcon size={56} className="text-primary-foreground" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-bold leading-tight text-foreground">
          {slides[current].title}
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
          {slides[current].subtitle}
        </p>
      </div>

      <div className="w-full space-y-4">
        <div className="flex gap-2 justify-center">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? "w-8 gradient-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold text-lg transition-all active:scale-[0.98]"
        >
          {current === slides.length - 1 ? "Zaczynamy" : "Dalej"}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
