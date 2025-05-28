import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useState, useEffect } from "react";
import ScrollToTop from "./components/layout/ScrollToTop";  
// Layouts
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
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
  <div className="h-16 w-16 relative inline-block"> {/* Removed full-screen/centering, made inline-block for flow */} 
    <div className="h-full w-full rounded-full border-t-2 border-b-2 border-white animate-spin"></div>
  </div>
);

const queryClient = new QueryClient();

// New component for centered suspense fallback
const CenteredPageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
    <div className="text-center">
      <PageLoader />
      {/* Optional: Add a subtle message if desired, e.g., <p className="text-sm mt-2">Loading page...</p> */}
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isApiReady, setIsApiReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkApiStatus = async () => {
      setIsLoading(true);
      setError(null);
      let apiUrl = '';
      if (typeof window !== 'undefined') {
        if (window.location.hostname === 'localhost') {
          apiUrl = 'http://localhost:5000/api/health';
        } else {
          apiUrl = 'https://api.underthearch.in/api/health';
        }
      }

      if (!apiUrl) {
        setError('Could not determine API URL.');
        setIsLoading(false);
        return;
      }

      try {
        // Add a small delay to make loading state more visible for fast connections
        // await new Promise(resolve => setTimeout(resolve, 500)); 
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`API check failed: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (data.status === 'UP') {
          setIsApiReady(true);
        } else {
          throw new Error('API is not healthy.');
        }
      } catch (err: any) {
        console.error('API readiness check error:', err);
        setError(err.message || 'Failed to connect to the API.');
      } finally {
        setIsLoading(false);
      }
    };

    checkApiStatus();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <PageLoader />
          <h1 className="text-2xl font-semibold mt-4">Connecting to UnderTheArch Servers...</h1>
          <p className="text-gray-400">Please wait a moment.</p>
        </div>
      </div>
    );
  }

  if (error) {
    // Show the same loading spinner UI if there's an error connecting to the API
    // The actual error is still logged to the console in the checkApiStatus function.
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <PageLoader />
          <h1 className="text-2xl font-semibold mt-4">Connecting to UnderTheArch Servers...</h1>
          <p className="text-gray-400">Attempting to connect. Please wait.</p> {/* Slightly modified text for persistence */}
        </div>
      </div>
    );
  }

  if (!isApiReady) {
    // This state should ideally not be reached if isLoading and error are handled correctly.
    // Adding a fallback just in case.
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">API Not Responding</h1>
          <p className="text-gray-400">The backend API is not currently available. Please try again later.</p>
        </div>
      </div>
    );
  }

  // API is ready, render the actual application
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<CenteredPageLoader />}>
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
};

export default App;
