
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/EmployeeList";
import ReviewList from "./pages/ReviewList";
import NotFound from "./pages/NotFound";
import TaskDashboard from "./pages/TaskDashboard";
import KanbanPage from "./pages/KanbanPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/employees" element={<Layout><EmployeeList /></Layout>} />
          <Route path="/reviews" element={<Layout><ReviewList /></Layout>} />
          <Route path="/tasks" element={<Layout><TaskDashboard /></Layout>} />
          <Route path="/kanban" element={<Layout><KanbanPage /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
