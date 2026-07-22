import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Dumbbell, Apple, BrainCircuit, ArrowUpRight, ChevronDown } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useFitnessContext } from "../context/FitnessContext";

const chartData = {
  "This Week": [
    { name: 'Mon', calories: 2400 },
    { name: 'Tue', calories: 1398 },
    { name: 'Wed', calories: 9800 },
    { name: 'Thu', calories: 3908 },
    { name: 'Fri', calories: 4800 },
    { name: 'Sat', calories: 3800 },
    { name: 'Sun', calories: 4300 },
  ],
  "Last Week": [
    { name: 'Mon', calories: 2100 },
    { name: 'Tue', calories: 1100 },
    { name: 'Wed', calories: 8500 },
    { name: 'Thu', calories: 3500 },
    { name: 'Fri', calories: 4200 },
    { name: 'Sat', calories: 3100 },
    { name: 'Sun', calories: 3900 },
  ],
  "This Month": [
    { name: 'Week 1', calories: 15000 },
    { name: 'Week 2', calories: 18500 },
    { name: 'Week 3', calories: 22000 },
    { name: 'Week 4', calories: 26000 },
  ]
};

function Dashboard() {
  const [timeframe, setTimeframe] = useState("This Week");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, totalCalories, dietScore, workoutProgress } = useFitnessContext();

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
    <section id="dashboard" className="bg-black text-white pt-8 pb-24 px-5 md:px-10 relative overflow-hidden">
      
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Welcome back, <span className="text-emerald-400">{user?.name?.split(' ')[0] || "User"}</span>
            </h2>
            <p className="text-gray-400">Here's your fitness overview for today.</p>
          </div>
          <button 
            onClick={() => document.getElementById('progress-charts')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 border border-emerald-500/20 hover:border-emerald-500"
          >
            View Full Report <ArrowUpRight size={18} />
          </button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {/* Calories Card */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-orange-500/20 p-3 rounded-xl text-orange-400 group-hover:scale-110 transition-transform duration-300">
                <Flame size={24} />
              </div>
              <span className="text-emerald-400 text-sm font-medium bg-emerald-500/10 px-2 py-1 rounded-full">+12%</span>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-1">Calories Burned</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold text-white">{totalCalories}</p>
                <span className="text-gray-500">kcal</span>
              </div>
            </div>
          </motion.div>

          {/* Workout Card */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <Dumbbell size={24} />
              </div>
              <span className="text-emerald-400 text-sm font-medium bg-emerald-500/10 px-2 py-1 rounded-full">+5%</span>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-1">Workout Progress</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold text-white">{workoutProgress}</p>
                <span className="text-gray-500">%</span>
              </div>
            </div>
          </motion.div>

          {/* Diet Card */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-green-500/20 p-3 rounded-xl text-green-400 group-hover:scale-110 transition-transform duration-300">
                <Apple size={24} />
              </div>
              <span className="text-gray-500 text-sm font-medium bg-gray-800 px-2 py-1 rounded-full">On track</span>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-1">Diet Score</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold text-white">{dietScore}</p>
                <span className="text-gray-500">pts</span>
              </div>
            </div>
          </motion.div>

          {/* AI Coach Card */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-purple-500/20 p-3 rounded-xl text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <BrainCircuit size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-1">AI Coach Status</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <p className="text-xl font-bold text-emerald-400">Active & Ready</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Real Chart with Recharts */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 md:p-8"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white">Activity Overview</h3>
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-black border border-gray-700 text-gray-300 text-sm rounded-lg px-4 py-2.5 flex items-center justify-between min-w-[140px] hover:border-emerald-500 transition-colors focus:outline-none focus:border-emerald-500"
              >
                {timeframe}
                <ChevronDown size={16} className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-full min-w-[140px] bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-20"
                  >
                    {Object.keys(chartData).map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setTimeframe(option);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          timeframe === option 
                            ? "bg-emerald-500/20 text-emerald-400 font-medium" 
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData[timeframe]} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                <XAxis dataKey="name" stroke="#6b7280" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                <YAxis stroke="#6b7280" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', borderColor: '#1f2937', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#10b981' }}
                />
                <Area type="monotone" dataKey="calories" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCalories)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Dashboard;