import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type PrototypeState = {
  balance: number;
  todayEarned: number;
  streak: number;
  multiplier: number;
  todayFocusMinutes: number;
  coinsPerMinute: number;
  sessionTargetMinutes: number;
  userName: string;
};

type PrototypeContextValue = PrototypeState & {
  setField: <K extends keyof PrototypeState>(key: K, value: PrototypeState[K]) => void;
  addBalance: (amount: number) => void;
  reset: () => void;
};

const DEFAULTS: PrototypeState = {
  balance: 1240,
  todayEarned: 125,
  streak: 3,
  multiplier: 3,
  todayFocusMinutes: 134,
  coinsPerMinute: 10,
  sessionTargetMinutes: 25,
  userName: "Alex",
};

const STORAGE_KEY = "focuscoin_prototype_state";

const PrototypeContext = createContext<PrototypeContextValue | undefined>(undefined);

export const PrototypeProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<PrototypeState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
    } catch {}
    return DEFAULTS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const setField: PrototypeContextValue["setField"] = (key, value) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const addBalance = (amount: number) =>
    setState((prev) => ({ ...prev, balance: prev.balance + amount, todayEarned: prev.todayEarned + amount }));

  const reset = () => setState(DEFAULTS);

  return (
    <PrototypeContext.Provider value={{ ...state, setField, addBalance, reset }}>
      {children}
    </PrototypeContext.Provider>
  );
};

export const usePrototype = () => {
  const ctx = useContext(PrototypeContext);
  if (!ctx) throw new Error("usePrototype must be used inside PrototypeProvider");
  return ctx;
};
