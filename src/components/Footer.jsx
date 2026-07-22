import { Dumbbell, Globe, Mail, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black/95 text-gray-300 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col space-y-4">
          <Link to="/" className="flex items-center gap-2 group">
            <Dumbbell className="text-emerald-400 group-hover:rotate-12 transition-transform duration-300" size={32} />
            <span className="text-2xl font-bold text-white tracking-wide">
              FitMind<span className="text-emerald-400">.AI</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your personal AI-powered fitness companion. Tailored workouts, intelligent diet planning, and progress tracking to help you achieve your goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
            <li><a href="/#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
            <li><Link to="/dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</Link></li>
            <li><Link to="/nutrition" className="hover:text-emerald-400 transition-colors">Diet Planner</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
          <ul className="space-y-3">
            <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
            <li><Link to="/cookies" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-900 p-2 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300">
              <Globe size={20} />
            </a>
            <a href="#" className="bg-gray-900 p-2 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="bg-gray-900 p-2 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300">
              <Share2 size={20} />
            </a>
            <Link to="/contact" className="bg-gray-900 p-2 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300">
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} FitMind.AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
