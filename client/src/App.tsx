import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import ScrollToTop from "./components/layout/ScrollToTop";
// Layouts
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// API Health Check URL
const API_HEALTH_CHECK_URL = "https://api.underthearch.in/"; // Replace with your actual health check endpoint if different

// Pages with lazy loading for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const Recognitions = lazy(() => import("./pages/Recognitions"));

const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProjectDetails = lazy(() => import("./components/layout/ProjectDetails"));
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PriceCalculator from "./pages/PriceCalculator";
import FeaturedProjectDetails from "./components/layout/FeaturedProjectDetails";
// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="h-16 w-16 relative">
      <div className="h-full w-full rounded-full border-t-2 border-b-2 border-white animate-spin"></div>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/featured/:id" element={<FeaturedProjectDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/recognitions" element={<Recognitions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/price-calculator" element={<PriceCalculator />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
