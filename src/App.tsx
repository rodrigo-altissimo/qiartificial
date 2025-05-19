import "./fix-navbar.css";
import { Toaster } from "@/components/ui/toaster";
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
import { useHotReload } from "./hooks/useHotReload";
import Navbar from "./components/Navbar";

// Force webpack/vite to reload this component
const buildTimestamp = new Date().getTime();

const App = () => {
  // Hot reload apenas em desenvolvimento
  if (import.meta.env.DEV) {
    useHotReload();
  }

  useEffect(() => {
    try {
      document.body.className = `app-loaded`;
      document.body.setAttribute('data-timestamp', buildTimestamp.toString());
      
      // Force reload images without adding params to imports
      setTimeout(() => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (
            img?.src &&
            !img.src.includes('data:') &&
            (img.src.startsWith(window.location.origin) || img.src.startsWith('/'))
          ) {
            const currentSrc = img.src;
            img.src = '';
            setTimeout(() => {
              const separator = currentSrc.includes('?') ? '&' : '?';
              img.src = `${currentSrc}${separator}t=${buildTimestamp}`;
            }, 10);
          }
        });
      }, 100);
    } catch (error) {
      console.error('Error in App useEffect:', error);
    }
  }, []);

  return (
    <React.StrictMode>
      <Navbar />
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
            <ConditionalAnalytics />
          </TooltipProvider>
        </BrowserRouter>
      </AppQueryProvider>
    </React.StrictMode>
  );
};

export default App;
