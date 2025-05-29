import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { API_BASE_URL } from "./config";
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
const CSRPage = lazy(() => import("./pages/CSRPage"));
const CSRProjectDetailsPage = lazy(() => import("./pages/CSRProjectDetailsPage"));
// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="h-16 w-16 relative">
      <div className="h-full w-full rounded-full border-t-2 border-b-2 border-white animate-spin"></div>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const checkServerHealth = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/health`);
        if (response.ok) {
          const data = await response.json();
          console.log('Connection to UnderTheArch server successful:', data);
        } else {
          console.error('Connection to UnderTheArch server failed:', response.status, response.statusText);
          // Attempt to log the response body for more details if it's not OK
          try {
            const errorData = await response.text(); 
            console.error('Server error response:', errorData);
          } catch (e) {
            console.error('Could not parse error response body:', e);
          }
        }
      } catch (error) {
        console.error('Error connecting to UnderTheArch server (network issue or server down):', error);
      }
    };

    checkServerHealth();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
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
                <Route path="/portfolio/:titleSlug" element={<ProjectDetails />} />
                <Route path="/featured/:id" element={<FeaturedProjectDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:titleSlug" element={<Blog />} />
                <Route path="/recognitions" element={<Recognitions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/price-calculator" element={<PriceCalculator />} />
                <Route path="/corporate-social-responsibility" element={<CSRPage />} />
                <Route path="/corporate-social-responsibility/:titleSlug" element={<CSRProjectDetailsPage />} />
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
);};

export default App;
