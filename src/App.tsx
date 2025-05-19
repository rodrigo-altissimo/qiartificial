import * as React from "react";
import "./fix-navbar.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

import AppQueryProvider from "@/components/AppQueryProvider";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import Navbar from "@/components/Navbar";

import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <React.StrictMode>
      <AppQueryProvider>
        <BrowserRouter>
          <TooltipProvider>
            <Navbar />

            <Routes>
              <Route path="/" element={<Index />} />
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
