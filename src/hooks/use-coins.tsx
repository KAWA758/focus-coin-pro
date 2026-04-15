import { createContext, useContext, useState, useCallback } from "react";

interface CoinsContextType {
  balance: number;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => boolean;
  history: { label: string; coins: string; time: string; positive: boolean }[];
  addHistory: (entry: { label: string; coins: string; time: string; positive: boolean }) => void;
}

const CoinsContext = createContext<CoinsContextType>({
  balance: 0,
  addCoins: () => {},
  spendCoins: () => false,
  history: [],
  addHistory: () => {},
});

export const CoinsProvider = ({ children }: { children: React.ReactNode }) => {
  const [balance, setBalance] = useState(() => {
    const stored = localStorage.getItem("focuscoin-balance");
    return stored ? parseInt(stored, 10) : 0;
  });

  const [history, setHistory] = useState<CoinsContextType["history"]>(() => {
    const stored = localStorage.getItem("focuscoin-history");
    return stored ? JSON.parse(stored) : [];
  });

  const persist = (bal: number, hist: CoinsContextType["history"]) => {
    localStorage.setItem("focuscoin-balance", String(bal));
    localStorage.setItem("focuscoin-history", JSON.stringify(hist));
  };

  const addCoins = useCallback((amount: number) => {
    setBalance((prev) => {
      const next = prev + amount;
      localStorage.setItem("focuscoin-balance", String(next));
      return next;
    });
  }, []);

  const spendCoins = useCallback((amount: number): boolean => {
    let success = false;
    setBalance((prev) => {
      if (prev >= amount) {
        const next = prev - amount;
        localStorage.setItem("focuscoin-balance", String(next));
        success = true;
        return next;
      }
      return prev;
    });
    return success;
  }, []);

  const addHistory = useCallback((entry: CoinsContextType["history"][0]) => {
    setHistory((prev) => {
      const next = [entry, ...prev].slice(0, 20);
      localStorage.setItem("focuscoin-history", JSON.stringify(next));
      return next;
    });
  }, []);

  return (
    <CoinsContext.Provider value={{ balance, addCoins, spendCoins, history, addHistory }}>
      {children}
    </CoinsContext.Provider>
  );
};

export const useCoins = () => useContext(CoinsContext);
