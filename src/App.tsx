import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import React, { useEffect } from "react";
import "./forceReload.css"; // Forçar reload dos recursos
import ForceReloader from "./components/ForceReloader";
import GptEngineerCheck from "./components/GptEngineerCheck";
import AppQueryProvider from "./components/AppQueryProvider";
import ConditionalAnalytics from "./components/ConditionalAnalytics";

// Force webpack/vite to reload this component
const buildTimestamp = new Date().getTime();

const App = () => {
  useEffect(() => {
    // Set a body class to force style recalculation
    document.body.className = `app-loaded`;
    document.body.setAttribute('data-timestamp', buildTimestamp.toString());
    // Force reload images without adding params to imports
    setTimeout(() => {
      document.querySelectorAll('img').forEach(img => {
        if (img.src && !img.src.includes('data:')) {
          const currentSrc = img.src;
          img.src = '';
          setTimeout(() => {
            const separator = currentSrc.includes('?') ? '&' : '?';
            img.src = `${currentSrc}${separator}t=${buildTimestamp}`;
          }, 10);
        }
      });
    }, 100);
  }, []);

  return (
    <React.StrictMode>
      <AppQueryProvider>
        <BrowserRouter>
          <TooltipProvider>
            <ForceReloader />
            <GptEngineerCheck />
            <Routes>
              <Route path="/" element={<Index />} />
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
};

export default App;
