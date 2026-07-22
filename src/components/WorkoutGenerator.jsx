import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Dumbbell, Activity, Timer, ChevronDown, CheckCircle2 } from "lucide-react";

function WorkoutGenerator() {
  const [level, setLevel] = useState("Beginner");
  const [goal, setGoal] = useState("Muscle Gain");
  const [duration, setDuration] = useState("30 min");
  const [isGenerating, setIsGenerating] = useState(false);
  const [workout, setWorkout] = useState(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation time
    setTimeout(() => {
      setWorkout([
        { name: "Push Ups", sets: 3, reps: 15, type: "Strength", icon: Dumbbell },
        { name: "High Intensity Running", time: "20 Minutes", type: "Cardio", icon: Activity },
        { name: "Jump Squats", sets: 4, reps: 12, type: "Strength", icon: Dumbbell },
      ]);
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
    <section id="workout" className="bg-black text-white py-24 px-5 md:px-10 relative">
      
      {/* Background Effect */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            AI Workout <span className="text-emerald-400">Generator</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get personalized routines crafted instantly by our AI based on your fitness level and goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >

          {/* Preferences Form */}
          <motion.div variants={itemVariants} className="lg:col-span-5 bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl w-full">
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Sparkles className="text-emerald-400" size={24} />
              Your Preferences
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Fitness Level</label>
                <div className="relative">
                  <select
                    className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white appearance-none cursor-pointer"
                    value={level}
                    onChange={(e)=>setLevel(e.target.value)}
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Primary Goal</label>
                <div className="relative">
                  <select
                    className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white appearance-none cursor-pointer"
                    value={goal}
                    onChange={(e)=>setGoal(e.target.value)}
                  >
                    <option>Muscle Gain</option>
                    <option>Weight Loss</option>
                    <option>Endurance</option>
                    <option>Flexibility</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Duration</label>
                <div className="relative">
                  <select
                    className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white appearance-none cursor-pointer"
                    value={duration}
                    onChange={(e)=>setDuration(e.target.value)}
                  >
                    <option>15 min (Quick)</option>
                    <option>30 min (Standard)</option>
                    <option>45 min (Extended)</option>
                    <option>60+ min (Intense)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
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
                    <Activity className="animate-spin" size={20} /> Generating...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 relative z-10">
                    <Sparkles size={20} className="group-hover:animate-pulse" /> Generate Workout
                  </span>
                )}
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </motion.button>
            </div>

          </motion.div>

          {/* Generated Result */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl w-full min-h-[500px] flex flex-col relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!workout && !isGenerating ? (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center opacity-50"
                >
                  <Dumbbell size={64} className="text-gray-700 mb-6" />
                  <p className="text-xl text-gray-500 font-medium">Ready to break a sweat?</p>
                  <p className="text-sm text-gray-600 mt-2">Set your preferences and hit generate.</p>
                </motion.div>
              ) : isGenerating ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center"
                >
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-gray-800 border-t-emerald-500 rounded-full animate-spin"></div>
                    <BrainCircuit className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-500" size={32} />
                  </div>
                  <p className="mt-8 text-lg font-medium text-emerald-400 animate-pulse">Our AI is building your routine...</p>
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
                        <CheckCircle2 size={24} /> Perfect Routine Found
                      </h3>
                      <div className="flex gap-3 text-sm">
                        <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{level}</span>
                        <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{goal}</span>
                        <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 flex items-center gap-1"><Timer size={14}/> {duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {workout.map((exercise, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="bg-black/60 border border-gray-800 hover:border-emerald-500/50 transition-colors p-5 rounded-2xl flex items-center gap-5 group"
                      >
                        <div className="bg-gray-800 p-4 rounded-xl group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                          <exercise.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">{exercise.name}</h4>
                          <p className="text-gray-400 text-sm">{exercise.type}</p>
                        </div>
                        <div className="text-right">
                          {exercise.sets ? (
                            <p className="text-xl font-bold text-emerald-400">{exercise.sets} <span className="text-sm text-gray-500 font-medium">sets</span> × {exercise.reps} <span className="text-sm text-gray-500 font-medium">reps</span></p>
                          ) : (
                            <p className="text-xl font-bold text-emerald-400">{exercise.time}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <button className="mt-8 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white w-full py-4 rounded-xl font-semibold transition-all">
                    Start Workout Now
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default WorkoutGenerator;