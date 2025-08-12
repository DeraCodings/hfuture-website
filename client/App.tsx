import React from "react";
import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                <img src="https://res.cloudinary.com/dwzebmtzq/image/upload/v1754947289/IMG-20250811-WA0047-removebg-preview_chrb8l.png" />
              </div>
              <span className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                HFUTUREHUB
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#mission"
                className="text-sm font-medium hover:text-brand-purple transition-colors"
              >
                Mission
              </a>
              <a
                href="#achievements"
                className="text-sm font-medium hover:text-brand-purple transition-colors"
              >
                Achievements
              </a>
              <a
                href="#impact"
                className="text-sm font-medium hover:text-brand-purple transition-colors"
              >
                Impact
              </a>
              <Button className="bg-brand-gradient hover:opacity-90 text-white">
                Support Us
              </Button>
            </nav>
          </div>
        </div>
      </header>
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
