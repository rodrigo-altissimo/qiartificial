
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import React from "react";
import "./forceReload.css"; // Forçar reload dos recursos
import ForceReloader from "./components/ForceReloader";
import GptEngineerCheck from "./components/GptEngineerCheck";
import AppQueryProvider from "./components/AppQueryProvider";
import ConditionalAnalytics from "./components/ConditionalAnalytics";

// Force webpack/vite to reload this component
const buildTimestamp = new Date().getTime();

const App = () => (
  <React.StrictMode>
    <AppQueryProvider>
      <BrowserRouter>
        <TooltipProvider>
          <ForceReloader />
          <GptEngineerCheck />
          <Routes>
            <Route path="/" element={<Index key={`index-${buildTimestamp}`} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
          <ConditionalAnalytics />
        </TooltipProvider>
      </BrowserRouter>
    </AppQueryProvider>
  </React.StrictMode>
);

export default App;
