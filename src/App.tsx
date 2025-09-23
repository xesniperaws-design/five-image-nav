import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BottomNavigation } from "@/components/BottomNavigation";
import Home from "./pages/Home";
import Trading from "./pages/Trading";
import AI from "./pages/AI";
import News from "./pages/News";
import Personal from "./pages/Personal";
import Create from "./pages/Create";
import SignIn from "./pages/SignIn";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import PersonalInfo from "./pages/PersonalInfo";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/news" element={<News />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/create" element={<Create />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/history" element={<History />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
