
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Analytics from "./components/Analytics";
import React, { useEffect, useState } from "react";
import "./forceReload.css"; // Forçar reload dos recursos

// Create a completely new timestamp on each render
const ForceReloader = () => {
  const [timestamp] = useState(() => new Date().toISOString());
  
  useEffect(() => {
    console.log("Force reload timestamp:", timestamp);
  }, [timestamp]);
  
  return <div className="force-reload" data-timestamp={timestamp}></div>;
};

// Force webpack/vite to reload this component
const buildTimestamp = new Date().getTime();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: buildTimestamp,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    },
  },
});

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <ForceReloader />
          <Routes>
            <Route path="/" element={<Index key={`index-${buildTimestamp}`} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
          <Analytics />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
