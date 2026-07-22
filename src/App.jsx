import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PageTransition from "./components/PageTransition";
import DashboardPage from "./components/DashboardPage";
import NutritionPage from "./components/NutritionPage";
import WorkoutsPage from "./components/WorkoutsPage";
import AICoachPage from "./components/AICoachPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import CookiePolicy from "./components/CookiePolicy";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { FitnessProvider, useFitnessContext } from "./context/FitnessContext";

function ProtectedRoute({ children }) {
  const { user } = useFitnessContext();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/dashboard" element={<ProtectedRoute><PageTransition><DashboardPage /></PageTransition></ProtectedRoute>} />
        <Route path="/nutrition" element={<ProtectedRoute><PageTransition><NutritionPage /></PageTransition></ProtectedRoute>} />
        <Route path="/workouts" element={<ProtectedRoute><PageTransition><WorkoutsPage /></PageTransition></ProtectedRoute>} />
        <Route path="/ai-coach" element={<ProtectedRoute><PageTransition><AICoachPage /></PageTransition></ProtectedRoute>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsOfService /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><CookiePolicy /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className={`flex flex-col ${hideNavFooter ? "h-screen overflow-hidden" : "min-h-screen w-full max-w-[100vw] overflow-x-hidden"} relative`}>
      {!hideNavFooter && <Navbar />}
      <main className="flex-grow flex flex-col h-full">
        <AnimatedRoutes />
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <FitnessProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </FitnessProvider>
  );
}

export default App;
