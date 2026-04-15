import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import { CoinsProvider } from "@/hooks/use-coins";
import MobileShell from "@/components/MobileShell";
import Onboarding from "./pages/Onboarding";
import HomeDashboard from "./pages/HomeDashboard";
import FocusSession from "./pages/FocusSession";
import SessionComplete from "./pages/SessionComplete";
import Rewards from "./pages/Rewards";
import RewardDetails from "./pages/RewardDetails";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <CoinsProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MobileShell>
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/home" element={<HomeDashboard />} />
              <Route path="/focus" element={<FocusSession />} />
              <Route path="/session-complete" element={<SessionComplete />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/reward/:id" element={<RewardDetails />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MobileShell>
        </BrowserRouter>
      </TooltipProvider>
      </CoinsProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
