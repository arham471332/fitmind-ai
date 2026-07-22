import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Apple, Utensils, Target, Activity, CheckCircle2, ChevronDown } from "lucide-react";
import { useFitnessContext } from "../context/FitnessContext";

function DietPlanner() {
  const { fitnessGoal: goal, setFitnessGoal: setGoal } = useFitnessContext();
  const [dietType, setDietType] = useState("Balanced");
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation time
    setTimeout(() => {
      setPlan({
        targetCalories: "1,850",
        macros: { protein: "140g", carbs: "160g", fats: "55g" },
        meals: [
          { name: "High-Protein Oatmeal", time: "Breakfast", icon: Utensils, description: "Oats, whey protein, berries, and almond milk." },
          { name: "Grilled Chicken Salad", time: "Lunch", icon: Leaf, description: "Mixed greens, chicken breast, olive oil, and quinoa." },
          { name: "Baked Salmon & Asparagus", time: "Dinner", icon: Utensils, description: "Wild-caught salmon, roasted asparagus, and sweet potato." },
        ]
      });
      setIsGenerating(false);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="diet" className="bg-black text-white py-24 px-5 md:px-10 relative">
      
      {/* Background Effect */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            AI Diet <span className="text-emerald-400">Planner</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Personalized meal plans optimized for your body, lifestyle, and fitness goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >

          {/* Input Section */}
          <motion.div variants={itemVariants} className="lg:col-span-5 bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl w-full">
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Apple className="text-emerald-400" size={24} />
              Your Profile
            </h3>

            <div className="space-y-5">
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Fitness Goal</label>
                <div className="relative">
                  <select
                    className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white appearance-none cursor-pointer"
                    value={goal}
                    onChange={(e)=>setGoal(e.target.value)}
                  >
                    <option>Weight Loss</option>
                    <option>Muscle Gain</option>
                    <option>Maintain Fitness</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Dietary Preference</label>
                <div className="relative">
                  <select
                    className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white appearance-none cursor-pointer"
                    value={dietType}
                    onChange={(e)=>setDietType(e.target.value)}
                  >
                    <option>Balanced</option>
                    <option>Keto</option>
                    <option>Vegetarian</option>
                    <option>Vegan</option>
                    <option>High Protein</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Weight (kg)</label>
                  <input type="number" placeholder="e.g. 75" className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white placeholder-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Height (cm)</label>
                  <input type="number" placeholder="e.g. 180" className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white placeholder-gray-600" />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white p-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors group relative overflow-hidden"
              >
                {isGenerating ? (
                  <span className="flex items-center gap-2">
                    <Activity className="animate-spin" size={20} /> Analyzing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 relative z-10">
                    <Target size={20} className="group-hover:animate-pulse" /> Generate AI Plan
                  </span>
                )}
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </motion.button>
            </div>

          </motion.div>

          {/* AI Result */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl w-full min-h-[500px] flex flex-col relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!plan && !isGenerating ? (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center opacity-50"
                >
                  <Leaf size={64} className="text-gray-700 mb-6" />
                  <p className="text-xl text-gray-500 font-medium">Your customized diet awaits.</p>
                  <p className="text-sm text-gray-600 mt-2">Enter your details to generate your macro-optimized plan.</p>
                </motion.div>
              ) : isGenerating ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center"
                >
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-gray-800 border-t-emerald-500 rounded-full animate-spin"></div>
                    <Apple className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-500" size={32} />
                  </div>
                  <p className="mt-8 text-lg font-medium text-emerald-400 animate-pulse">Calculating optimal macros...</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-400 mb-2 flex items-center gap-2">
                        <CheckCircle2 size={24} /> Perfect Plan Found
                      </h3>
                      <div className="flex gap-3 text-sm">
                        <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{goal}</span>
                        <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{dietType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-black/40 border border-gray-800 p-4 rounded-2xl text-center">
                      <p className="text-gray-500 text-xs font-semibold mb-1 uppercase tracking-wider">Calories</p>
                      <p className="text-2xl font-bold text-white">{plan.targetCalories}</p>
                    </div>
                    <div className="bg-black/40 border border-gray-800 p-4 rounded-2xl text-center">
                      <p className="text-gray-500 text-xs font-semibold mb-1 uppercase tracking-wider">Protein</p>
                      <p className="text-2xl font-bold text-emerald-400">{plan.macros.protein}</p>
                    </div>
                    <div className="bg-black/40 border border-gray-800 p-4 rounded-2xl text-center">
                      <p className="text-gray-500 text-xs font-semibold mb-1 uppercase tracking-wider">Carbs</p>
                      <p className="text-2xl font-bold text-blue-400">{plan.macros.carbs}</p>
                    </div>
                    <div className="bg-black/40 border border-gray-800 p-4 rounded-2xl text-center">
                      <p className="text-gray-500 text-xs font-semibold mb-1 uppercase tracking-wider">Fats</p>
                      <p className="text-2xl font-bold text-orange-400">{plan.macros.fats}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {plan.meals.map((meal, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="bg-black/60 border border-gray-800 hover:border-emerald-500/50 transition-colors p-5 rounded-2xl flex items-center gap-5 group"
                      >
                        <div className="bg-gray-800 p-4 rounded-xl group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                          <meal.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">{meal.time}</p>
                          <h4 className="text-lg font-semibold text-white mb-1">{meal.name}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{meal.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default DietPlanner;