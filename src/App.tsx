import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WifiMarketing from "./pages/WifiMarketing.tsx";
import SmartWifiPublic from "./pages/SmartWifiPublic.tsx";
import CRMAutomation from "./pages/CRMAutomation.tsx";
import CustomerAnalytics from "./pages/CustomerAnalytics.tsx";
import LoyaltyProgram from "./pages/LoyaltyProgram.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import FAQ from "./pages/FAQ.tsx";
import Careers from "./pages/Careers.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Contact from "./pages/Contact.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/giai-phap/wifi-marketing" element={<WifiMarketing />} />
          <Route path="/giai-phap/wifi-hanh-chinh-cong" element={<SmartWifiPublic />} />
          <Route path="/giai-phap/crm-tu-dong" element={<CRMAutomation />} />
          <Route path="/giai-phap/phan-tich-khach-hang" element={<CustomerAnalytics />} />
          <Route path="/giai-phap/loyalty-program" element={<LoyaltyProgram />} />
          <Route path="/ve-chung-toi" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tuyen-dung" element={<Careers />} />
          <Route path="/chinh-sach-bao-mat" element={<Privacy />} />
          <Route path="/dieu-khoan" element={<Terms />} />
          <Route path="/lien-he" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
