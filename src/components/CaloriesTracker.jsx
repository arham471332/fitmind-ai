import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Utensils, Flame, Activity } from "lucide-react";
import { useFitnessContext } from "../context/FitnessContext";

function CaloriesTracker() {

  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  
  // Use Global State
  const { foods, addFood: addGlobalFood, totalCalories } = useFitnessContext();

  const DAILY_GOAL = 2500;

  const handleAddFood = (e) => {
    e.preventDefault();
    if(food.trim() === "" || calories.trim() === "") return;

    addGlobalFood(food, calories);

    setFood("");
    setCalories("");
  };

  const progressPercentage = Math.min((totalCalories / DAILY_GOAL) * 100, 100);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="bg-black text-white py-24 px-5 md:px-10 relative">
      
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Track Your <span className="text-emerald-400">Nutrition</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Log your meals and stay on top of your daily goals with our intelligent calorie tracking system.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >

          {/* Add Food Form */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl w-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-emerald-500/20 p-3 rounded-xl text-emerald-400">
                <Utensils size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Log a Meal</h3>
            </div>

            <form onSubmit={handleAddFood} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Food Name</label>
                <input
                  type="text"
                  value={food}
                  onChange={(e)=>setFood(e.target.value)}
                  placeholder="e.g. Grilled Chicken Salad"
                  className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white placeholder-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Calories (kcal)</label>
                <input
                  type="number"
                  value={calories}
                  onChange={(e)=>setCalories(e.target.value)}
                  placeholder="e.g. 450"
                  className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white placeholder-gray-600"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors mt-4"
              >
                <Plus size={20} /> Add to Log
              </motion.button>
            </form>
          </motion.div>

          {/* Summary & Progress */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl w-full">
            
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-orange-500/20 p-3 rounded-xl text-orange-400">
                <Flame size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Daily Overview</h3>
            </div>

            <div className="mb-10">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <p className="text-5xl font-bold text-white tracking-tight">{totalCalories}</p>
                  <p className="text-gray-400 mt-1">/ {DAILY_GOAL} kcal consumed</p>
                </div>
                <div className="text-emerald-400 flex items-center gap-1 font-medium bg-emerald-500/10 px-3 py-1 rounded-full">
                  <Activity size={16} /> {Math.round(progressPercentage)}%
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full ${progressPercentage > 100 ? 'bg-red-500' : 'bg-emerald-500'}`}
                ></motion.div>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-300 mb-4 border-b border-gray-800 pb-2">Today's Log</h4>
            <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence>
                {foods.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No meals logged yet today.</p>
                ) : (
                  foods.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-black/40 border border-gray-800/50 p-4 rounded-xl flex justify-between items-center group hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-gray-200 font-medium">{item.name}</span>
                      </div>
                      <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-lg">
                        {item.cal} kcal
                      </span>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default CaloriesTracker;