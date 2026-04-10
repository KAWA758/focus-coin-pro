import { Flame, Check } from "lucide-react";

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

const streakDays = new Set([1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16, 17, 19, 20]);
const todayDate = today.getDate();

const monthNames = ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"];
const dayLabels = ["N", "P", "W", "Ś", "C", "P", "S"];

const StreakCalendar = () => {
  const blanks = Array.from({ length: firstDayOfWeek }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="bg-card rounded-xl p-3 card-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Flame size={14} className="text-destructive" />
          <h3 className="text-xs font-semibold text-foreground">Kalendarz serii</h3>
        </div>
        <span className="text-[10px] font-medium text-muted-foreground">{monthNames[currentMonth]} {currentYear}</span>
      </div>

      <div className="grid grid-cols-7 gap-0.5">
        {dayLabels.map((d, i) => (
          <div key={i} className="text-center text-[8px] font-medium text-muted-foreground py-0.5">
            {d}
          </div>
        ))}
        {blanks.map((b) => (
          <div key={`b-${b}`} className="aspect-square" />
        ))}
        {days.map((day) => {
          const isStreak = streakDays.has(day);
          const isToday = day === todayDate;
          const isPast = day < todayDate;

          return (
            <div
              key={day}
              className={`aspect-square rounded-md flex items-center justify-center text-[9px] font-medium ${
                isToday
                  ? "gradient-primary text-primary-foreground font-bold"
                  : isStreak && isPast
                  ? "bg-neon/15 text-neon"
                  : isPast
                  ? "text-muted-foreground/40"
                  : "text-muted-foreground/60"
              }`}
            >
              {isStreak && isPast && !isToday ? (
                <Check size={10} className="text-neon" strokeWidth={3} />
              ) : (
                day
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StreakCalendar;
