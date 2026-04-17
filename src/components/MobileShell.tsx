import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Home, Gift, Zap, BarChart3, Trophy } from "lucide-react";

const tabs = [
  { path: "/home", icon: Home, label: "Start" },
  { path: "/rewards", icon: Gift, label: "Nagrody" },
  { path: "/session", icon: Zap, label: "Sesja" },
  { path: "/leaderboard", icon: Trophy, label: "Ranking" },
  { path: "/stats", icon: BarChart3, label: "Statystyki" },
];

const swipeableTabs = ["/home", "/rewards", "/session"];

const MobileShell = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const touchStartX = useRef(0);
  const [touchStartTime, setTouchStartTime] = useState(0);

  const hideNav = ["/", "/focus", "/session-complete", "/profile"].some(
    (p) => location.pathname === p || location.pathname.startsWith("/reward/")
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setTouchStartTime(Date.now());
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDuration = Date.now() - touchStartTime;
    const distance = touchStartX.current - touchEndX;
    const isSwipe = Math.abs(distance) > 50 && touchDuration < 500;

    if (!isSwipe || !swipeableTabs.includes(location.pathname)) return;

    const currentIndex = swipeableTabs.indexOf(location.pathname);

    // Swipe right (distance < 0) - go to previous
    if (distance < 0 && currentIndex > 0) {
      navigate(swipeableTabs[currentIndex - 1]);
    }
    // Swipe left (distance > 0) - go to next
    else if (distance > 0 && currentIndex < swipeableTabs.length - 1) {
      navigate(swipeableTabs[currentIndex + 1]);
    }
  };

  return (
    <div
      className="mx-auto w-full max-w-[480px] min-h-screen bg-background relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={hideNav ? "" : "pb-24"}>{children}</div>
      {!hideNav && (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-card/80 backdrop-blur-xl border-t border-border z-50">
          <div className="flex items-center justify-around py-2.5 px-4">
            {tabs.map((tab) => {
              const active = location.pathname === tab.path;
              return (
                <button
                  key={tab.path}
                  onClick={() => navigate(tab.path)}
                  className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon size={24} strokeWidth={active ? 2.5 : 1.8} />
                  <span className="text-[11px] font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileShell;
