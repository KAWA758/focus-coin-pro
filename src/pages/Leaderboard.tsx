import { useState } from "react";
import { Users, Trophy, Facebook, Contact, UserPlus, Crown, Medal, Award, ChevronRight, Coins } from "lucide-react";

const leaderboard = [
  { rank: 1, name: "Kasia M.", coins: 8420, streak: 28, avatar: "KM", you: false },
  { rank: 2, name: "Tomek W.", coins: 7105, streak: 21, avatar: "TW", you: false },
  { rank: 3, name: "Ola K.", coins: 5890, streak: 15, avatar: "OK", you: false },
  { rank: 4, name: "Alex K.", coins: 3450, streak: 12, avatar: "AK", you: true },
  { rank: 5, name: "Marta S.", coins: 2980, streak: 9, avatar: "MS", you: false },
  { rank: 6, name: "Piotr J.", coins: 2540, streak: 7, avatar: "PJ", you: false },
  { rank: 7, name: "Zosia B.", coins: 1870, streak: 5, avatar: "ZB", you: false },
];

const RankIcon = ({ rank }: { rank: number }) => {
  if (rank === 1) return <Crown size={18} style={{ color: "hsl(45 93% 47%)" }} />;
  if (rank === 2) return <Medal size={18} style={{ color: "hsl(0 0% 77%)" }} />;
  if (rank === 3) return <Award size={18} style={{ color: "hsl(30 60% 40%)" }} />;
  return <span className="text-xs font-bold text-muted-foreground w-[18px] text-center">{rank}</span>;
};

const Leaderboard = () => {
  const [tab, setTab] = useState<"ranking" | "friends">("ranking");
  const [syncedFb, setSyncedFb] = useState(false);
  const [syncedContacts, setSyncedContacts] = useState(false);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-14 pb-2">
        <h1 className="text-2xl font-bold text-foreground mb-1">Ranking</h1>
        <p className="text-sm text-muted-foreground">Rywalizuj ze znajomymi o FocusCoins</p>
      </div>

      {/* Tab switcher */}
      <div className="px-5 pt-4 pb-2">
        <div className="bg-secondary rounded-xl p-1 flex">
          <button
            onClick={() => setTab("ranking")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              tab === "ranking"
                ? "bg-card text-foreground card-shadow"
                : "text-muted-foreground"
            }`}
          >
            <span className="flex items-center justify-center gap-1.5">
              <Trophy size={14} /> Ranking
            </span>
          </button>
          <button
            onClick={() => setTab("friends")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              tab === "friends"
                ? "bg-card text-foreground card-shadow"
                : "text-muted-foreground"
            }`}
          >
            <span className="flex items-center justify-center gap-1.5">
              <Users size={14} /> Znajomi
            </span>
          </button>
        </div>
      </div>

      {tab === "ranking" && (
        <>
          {/* Your position highlight */}
          <div className="px-5 pt-4 pb-2">
            <div className="rounded-2xl p-4 relative overflow-hidden" style={{
              background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--neon)) 100%)",
            }}>
              <div className="absolute inset-0 opacity-20" style={{
                background: "radial-gradient(circle at 80% 20%, hsl(0 0% 100% / 0.3) 0%, transparent 50%)"
              }} />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary-foreground/30 font-bold text-primary-foreground text-sm">
                    AK
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 text-xs font-medium">Twoja pozycja</p>
                    <p className="text-primary-foreground text-xl font-extrabold">#4</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-primary-foreground/70 text-xs font-medium">Monety</p>
                  <p className="text-primary-foreground text-lg font-bold flex items-center gap-1">
                    <Coins size={16} /> 3,450
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section divider */}
          <div className="px-5 pt-4 pb-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Top graczy</p>
          </div>

          {/* Leaderboard list */}
          <div className="px-5 pb-6">
            <div className="bg-card rounded-2xl card-shadow divide-y divide-border overflow-hidden">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center gap-3 px-4 py-3.5 transition-colors ${
                    user.you ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="w-6 flex items-center justify-center">
                    <RankIcon rank={user.rank} />
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                    user.you
                      ? "gradient-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}>
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {user.name} {user.you && <span className="text-xs text-primary">(Ty)</span>}
                    </p>
                    <p className="text-xs text-muted-foreground">{user.streak} dni serii</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-foreground">{user.coins.toLocaleString()}</p>
                    <p className="text-[10px] text-muted-foreground">FC</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {tab === "friends" && (
        <>
          {/* Sync options */}
          <div className="px-5 pt-4 pb-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Synchronizacja</p>
          </div>

          <div className="px-5 pb-2">
            <div className="bg-card rounded-2xl card-shadow divide-y divide-border overflow-hidden">
              <button
                onClick={() => setSyncedFb(true)}
                className="w-full flex items-center justify-between p-4 transition-colors hover:bg-secondary/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "hsl(220 70% 50% / 0.1)" }}>
                    <Facebook size={20} style={{ color: "hsl(220 70% 50%)" }} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Facebook</p>
                    <p className="text-xs text-muted-foreground">
                      {syncedFb ? "Zsynchronizowano" : "Znajdź znajomych z Facebooka"}
                    </p>
                  </div>
                </div>
                {syncedFb ? (
                  <span className="text-xs font-semibold text-neon bg-neon/10 px-2.5 py-1 rounded-full">Połączono</span>
                ) : (
                  <ChevronRight size={18} className="text-muted-foreground" />
                )}
              </button>

              <button
                onClick={() => setSyncedContacts(true)}
                className="w-full flex items-center justify-between p-4 transition-colors hover:bg-secondary/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center">
                    <Contact size={20} className="text-neon" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Kontakty</p>
                    <p className="text-xs text-muted-foreground">
                      {syncedContacts ? "Zsynchronizowano" : "Synchronizuj kontakty z telefonu"}
                    </p>
                  </div>
                </div>
                {syncedContacts ? (
                  <span className="text-xs font-semibold text-neon bg-neon/10 px-2.5 py-1 rounded-full">Połączono</span>
                ) : (
                  <ChevronRight size={18} className="text-muted-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Invite section */}
          <div className="px-5 pt-4 pb-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Zaproś znajomych</p>
          </div>

          <div className="px-5 pb-2">
            <button className="w-full bg-card rounded-2xl p-4 card-shadow flex items-center gap-3 transition-all hover:bg-secondary/50 active:scale-[0.98]">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <UserPlus size={18} className="text-primary-foreground" />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm font-medium text-foreground">Wyślij zaproszenie</p>
                <p className="text-xs text-muted-foreground">Zdobądź +100 FC za każdego znajomego</p>
              </div>
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          </div>

          {/* Friends list */}
          <div className="px-5 pt-4 pb-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Twoi znajomi ({(syncedFb || syncedContacts) ? "3" : "0"})</p>
          </div>

          <div className="px-5 pb-6">
            {(syncedFb || syncedContacts) ? (
              <div className="bg-card rounded-2xl card-shadow divide-y divide-border overflow-hidden">
                {[
                  { name: "Kasia M.", coins: 8420, avatar: "KM", source: "Facebook" },
                  { name: "Tomek W.", coins: 7105, avatar: "TW", source: "Kontakty" },
                  { name: "Ola K.", coins: 5890, avatar: "OK", source: "Facebook" },
                ].map((friend, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3.5">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                      {friend.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{friend.name}</p>
                      <p className="text-xs text-muted-foreground">{friend.source}</p>
                    </div>
                    <p className="text-sm font-bold text-foreground flex items-center gap-1">
                      <Coins size={14} className="text-primary" /> {friend.coins.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-card rounded-2xl p-8 card-shadow text-center">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                  <Users size={24} className="text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">Brak znajomych</p>
                <p className="text-xs text-muted-foreground">Zsynchronizuj kontakty lub Facebooka, aby zobaczyć znajomych</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Leaderboard;
