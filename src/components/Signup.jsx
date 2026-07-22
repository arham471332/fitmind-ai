import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useFitnessContext } from "../context/FitnessContext";
import { Loader2 } from "lucide-react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useFitnessContext();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      login({ email, name });
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <section className="bg-black text-white h-[100dvh] w-full flex items-center justify-center px-4 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-600/30 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0"
      ></motion.div>
      
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-900/40 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0"
      ></motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 md:p-8 rounded-2xl w-full max-w-md relative z-10 flex flex-col justify-center"
      >
        <h2 className="text-3xl font-bold text-center">
          Join
          <span className="text-green-400"> FitMind AI </span>
        </h2>

        <p className="text-gray-400 text-center mt-3 mb-8">
          Start your AI fitness journey
        </p>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all text-white text-sm"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all text-white text-sm"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all text-white text-sm"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all text-white text-sm"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 text-black py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : null}
            {isLoading ? "Creating Account..." : "Create Account"}
          </motion.button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?
          <Link to="/login" className="text-green-400 hover:text-green-300 transition-colors font-medium ml-1">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}

export default Signup;