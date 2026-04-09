import { useLocation, useNavigate } from "react-router-dom";
import { Home, Gift, BarChart3, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const tabs = [
  { path: "/home", icon: Home, label: "Start" },
  { path: "/rewards", icon: Gift, label: "Nagrody" },
  { path: "/stats", icon: BarChart3, label: "Statystyki" },
];

const MobileShell = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();

  const hideNav = ["/", "/focus", "/session-complete"].some(
    (p) => location.pathname === p || location.pathname.startsWith("/reward/")
  );

  return (
    <div className="mx-auto max-w-[430px] min-h-screen bg-background relative">
      <div className={hideNav ? "" : "pb-20"}>{children}</div>
      {!hideNav && (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-card/80 backdrop-blur-xl border-t border-border z-50">
          <div className="flex items-center justify-around py-2 px-4">
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
                  <tab.icon size={22} strokeWidth={active ? 2.5 : 1.8} />
                  <span className="text-[10px] font-medium">{tab.label}</span>
                </button>
              );
            })}
            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              className="flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl text-muted-foreground hover:text-foreground transition-all"
            >
              {theme === "dark" ? (
                <Sun size={22} strokeWidth={1.8} className="transition-transform duration-300 rotate-0 hover:rotate-90" />
              ) : (
                <Moon size={22} strokeWidth={1.8} className="transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
              <span className="text-[10px] font-medium">Tryb</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileShell;
