import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useFitnessContext } from "../context/FitnessContext";

const MotionLink = motion.create(Link);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const { user, logout } = useFitnessContext();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/");
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full flex justify-between items-center px-5 md:px-10 py-5 bg-black/80 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-900/50"
    >

      {/* Logo */}
      <MotionLink 
        to={user ? "/dashboard" : "/"} 
        whileHover={{ scale: 1.05 }}
        className="text-2xl md:text-3xl font-bold"
      >
        FitMind <span className="text-green-400">AI</span>
      </MotionLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-white items-center">
        {user && location.pathname !== "/" ? (
          <>
            <MotionLink to="/nutrition" whileHover={{ scale: 1.1 }} className={`transition-colors font-medium ${isActive("/nutrition") ? "text-emerald-400" : "text-gray-300 hover:text-emerald-400"}`}>Nutrition</MotionLink>
            <MotionLink to="/workouts" whileHover={{ scale: 1.1 }} className={`transition-colors font-medium ${isActive("/workouts") ? "text-emerald-400" : "text-gray-300 hover:text-emerald-400"}`}>Workouts</MotionLink>
            <MotionLink to="/ai-coach" whileHover={{ scale: 1.1 }} className={`transition-colors font-medium ${isActive("/ai-coach") ? "text-emerald-400" : "text-gray-300 hover:text-emerald-400"}`}>AI Coach</MotionLink>
            
            <div className="flex items-center gap-6 ml-4 pl-4 border-l border-gray-800 relative">
              <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-2 rounded-lg font-bold transition-colors">
                Contact
              </Link>
              
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-lg hover:bg-emerald-500/30 transition-colors"
                >
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </button>
                
                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl py-2 z-50 flex flex-col"
                    >
                      <div className="px-4 py-2 border-b border-gray-800 mb-2">
                        <p className="text-sm text-gray-400">Signed in as</p>
                        <p className="font-bold text-white truncate">{user?.name}</p>
                      </div>
                      <button
                        onClick={() => {
                          setShowProfileMenu(false);
                          handleLogout();
                        }}
                        className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </>
        ) : user ? (
          <>
            <MotionLink 
              to="/" 
              whileHover={{ scale: 1.1 }}
              className={`transition-colors ${isActive("/") ? "text-green-400 font-semibold" : "text-white hover:text-green-400"}`}
            >
              Home
            </MotionLink>
            <MotionLink 
              to="/dashboard" 
              whileHover={{ scale: 1.1 }}
              className={`transition-colors ${isActive("/dashboard") ? "text-green-400 font-semibold" : "text-white hover:text-green-400"}`}
            >
              Dashboard
            </MotionLink>
            
            <div className="flex items-center gap-6 ml-4">
              <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-2 rounded-lg font-bold transition-colors">
                Contact
              </Link>
              
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-lg hover:bg-emerald-500/30 transition-colors"
                >
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </button>
                
                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl py-2 z-50 flex flex-col"
                    >
                      <div className="px-4 py-2 border-b border-gray-800 mb-2">
                        <p className="text-sm text-gray-400">Signed in as</p>
                        <p className="font-bold text-white truncate">{user?.name}</p>
                      </div>
                      <button
                        onClick={() => {
                          setShowProfileMenu(false);
                          handleLogout();
                        }}
                        className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </>
        ) : (
          <>
            <MotionLink 
              to="/" 
              whileHover={{ scale: 1.1 }}
              className={`transition-colors ${isActive("/") ? "text-green-400 font-semibold" : "text-white hover:text-green-400"}`}
            >
              Home
            </MotionLink>
            <MotionLink 
              to="/login" 
              whileHover={{ scale: 1.1 }}
              className={`transition-colors ${isActive("/login") ? "text-green-400 font-semibold" : "text-white hover:text-green-400"}`}
            >
              Login
            </MotionLink>

            <MotionLink 
              to="/signup" 
              whileHover={{ scale: 1.1 }}
              className={`transition-colors ${isActive("/signup") ? "text-green-400 font-semibold" : "text-white hover:text-green-400"}`}
            >
              Signup
            </MotionLink>
            
            <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-2 rounded-lg font-bold transition-colors ml-4">
              Contact
            </Link>
            
            <MotionLink
              to="/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 border border-gray-700 text-white px-6 py-2 rounded-full font-semibold ml-2 hover:bg-gray-700"
            >
              Get Started
            </MotionLink>
          </>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center py-6 gap-6 shadow-xl md:hidden"
          >
            {user && location.pathname !== "/" ? (
              <>
                <Link to="/nutrition" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${isActive("/nutrition") ? "text-emerald-400" : "text-gray-300 hover:text-emerald-400"}`}>Nutrition</Link>
                <Link to="/workouts" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${isActive("/workouts") ? "text-emerald-400" : "text-gray-300 hover:text-emerald-400"}`}>Workouts</Link>
                <Link to="/ai-coach" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${isActive("/ai-coach") ? "text-emerald-400" : "text-gray-300 hover:text-emerald-400"}`}>AI Coach</Link>
                
                <div className="w-full h-px bg-gray-800 my-2"></div>
                
                <span className="text-emerald-400 font-bold">{user?.name}</span>
                <button 
                  onClick={handleLogout} 
                  className="bg-red-500/10 text-red-400 border border-red-500/20 px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-500/20 w-full"
                >
                  Logout
                </button>
              </>
            ) : user ? (
              <>
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)} 
                  className={`text-lg ${isActive("/") ? "text-green-400 font-semibold" : "hover:text-green-400"}`}
                >
                  Home
                </Link>
                <Link 
                  to="/dashboard" 
                  onClick={() => setIsOpen(false)} 
                  className={`text-lg ${isActive("/dashboard") ? "text-green-400 font-semibold" : "hover:text-green-400"}`}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="bg-red-500/10 text-red-400 border border-red-500/20 px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-500/20"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)} 
                  className={`text-lg ${isActive("/") ? "text-green-400 font-semibold" : "hover:text-green-400"}`}
                >
                  Home
                </Link>
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)} 
                  className={`text-lg ${isActive("/login") ? "text-green-400 font-semibold" : "hover:text-green-400"}`}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsOpen(false)} 
                  className={`text-lg ${isActive("/signup") ? "text-green-400 font-semibold" : "hover:text-green-400"}`}
                >
                  Signup
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsOpen(false)} 
                  className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold text-lg"
                >
                  Get Started
                </Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;