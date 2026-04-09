import { BarChart, Bar, XAxis, ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

const weeklyData = [
  { day: "Pon", hours: 1.5 },
  { day: "Wt", hours: 2.3 },
  { day: "Śr", hours: 1.8 },
  { day: "Czw", hours: 3.1 },
  { day: "Pt", hours: 2.7 },
  { day: "Sob", hours: 1.2 },
  { day: "Nd", hours: 2.1 },
];

const coinsData = [
  { day: "Pon", coins: 45 },
  { day: "Wt", coins: 68 },
  { day: "Śr", coins: 52 },
  { day: "Czw", coins: 95 },
  { day: "Pt", coins: 78 },
  { day: "Sob", coins: 35 },
  { day: "Nd", coins: 62 },
];

const Stats = () => (
  <div className="px-5 pt-14 pb-6 animate-fade-in">
    <h1 className="text-2xl font-bold text-foreground mb-1">Statystyki</h1>
    <p className="text-sm text-muted-foreground mb-6">Twoje wyniki skupienia</p>

    <div className="grid grid-cols-3 gap-3 mb-8">
      {[
        { label: "Łączne skupienie", value: "48h 22m", sub: "Ten miesiąc" },
        { label: "Zdobyte monety", value: "3,450", sub: "Ogółem" },
        { label: "Najdłuższa seria", value: "12 dni", sub: "Rekord" },
      ].map((s, i) => (
        <div key={i} className="bg-card rounded-xl p-3 card-shadow text-center">
          <p className="text-lg font-bold text-foreground">{s.value}</p>
          <p className="text-[10px] text-muted-foreground font-medium">{s.label}</p>
        </div>
      ))}
    </div>

    <div className="bg-card rounded-2xl p-5 card-shadow mb-4">
      <h3 className="text-sm font-semibold text-foreground mb-4">Tygodniowy czas skupienia</h3>
      <ResponsiveContainer width="100%" height={140}>
        <BarChart data={weeklyData}>
          <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(230 10% 50%)" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, fontSize: 12 }} />
          <Bar dataKey="hours" fill="hsl(258 80% 56%)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="bg-card rounded-2xl p-5 card-shadow">
      <h3 className="text-sm font-semibold text-foreground mb-4">Zdobyte monety</h3>
      <ResponsiveContainer width="100%" height={140}>
        <LineChart data={coinsData}>
          <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(230 10% 50%)" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, fontSize: 12 }} />
          <Line type="monotone" dataKey="coins" stroke="hsl(170 80% 50%)" strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default Stats;
