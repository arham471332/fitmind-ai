import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="bg-black text-white py-24 px-5 md:px-10 relative overflow-hidden border-t border-gray-900">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Ready to Unlock Your <br className="hidden md:block" />
            <span className="text-emerald-400">Ultimate Potential?</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who have already revolutionized their fitness routines with the power of artificial intelligence.
          </p>

          <Link to="/signup">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Get Started for Free <ArrowRight size={20} />
            </motion.button>
          </Link>
          
          <p className="text-gray-500 text-sm mt-6">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;
