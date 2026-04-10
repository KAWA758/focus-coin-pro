import { Flame, Check } from "lucide-react";

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

// Simulated streak days
const streakDays = new Set([1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16, 17, 19, 20]);
const todayDate = today.getDate();

const monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
const dayLabels = ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "Sb"];

const StreakCalendar = () => {
  const blanks = Array.from({ length: firstDayOfWeek }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="bg-card rounded-2xl p-4 card-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Flame size={18} className="text-destructive" />
          <h3 className="text-sm font-semibold text-foreground">Kalendarz serii</h3>
        </div>
        <span className="text-xs font-medium text-muted-foreground">{monthNames[currentMonth]} {currentYear}</span>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {dayLabels.map((d) => (
          <div key={d} className="text-center text-[10px] font-medium text-muted-foreground py-0.5">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {blanks.map((b) => (
          <div key={`blank-${b}`} className="aspect-square" />
        ))}
        {days.map((day) => {
          const isStreak = streakDays.has(day);
          const isToday = day === todayDate;
          const isPast = day < todayDate;

          return (
            <div
              key={day}
              className={`aspect-square rounded-lg flex items-center justify-center text-[11px] font-medium transition-all relative ${
                isToday
                  ? "gradient-primary text-primary-foreground font-bold ring-2 ring-primary/30"
                  : isStreak && isPast
                  ? "bg-neon/15 text-neon"
                  : isPast
                  ? "text-muted-foreground/50"
                  : "text-muted-foreground"
              }`}
            >
              {isStreak && isPast && !isToday ? (
                <Check size={14} className="text-neon" strokeWidth={3} />
              ) : (
                day
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-3 pt-2 border-t border-border">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-neon/15" />
          <span className="text-[10px] text-muted-foreground">Sesja ukończona</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm gradient-primary" />
          <span className="text-[10px] text-muted-foreground">Dzisiaj</span>
        </div>
      </div>
    </div>
  );
};

export default StreakCalendar;
