import "./fix-navbar.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import React from "react";
import AppQueryProvider from "./components/AppQueryProvider";
import ConditionalAnalytics from "./components/ConditionalAnalytics";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <AppQueryProvider>
        <BrowserRouter>
          <TooltipProvider>
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
