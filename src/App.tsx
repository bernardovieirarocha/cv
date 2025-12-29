import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import CommandMenu, { useCommandMenu } from "@/components/CommandMenu";

const queryClient = new QueryClient();

import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";

const AppContent = () => {
  const { isOpen, close } = useCommandMenu();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading (or wait for resources)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resume />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <CommandMenu isOpen={isOpen} onClose={close} />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
