import React from "react";
import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlockchainEducation from "./pages/BlockchainEducation";
import Web3Development from "./pages/Web3Development";
import CommunityBuilding from "./pages/CommunityBuilding";
import IRLMeetups from "./pages/IRLMeetups";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/programs/blockchain-education"
            element={<BlockchainEducation />}
          />
          <Route
            path="/programs/web3-development"
            element={<Web3Development />}
          />
          <Route
            path="/programs/community-building"
            element={<CommunityBuilding />}
          />
          <Route path="/programs/irl-meetups" element={<IRLMeetups />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
