import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { motion } from "framer-motion";
import { TrendingUp, Flame, CalendarDays } from "lucide-react";

function ProgressCharts() {

  const workoutData = [
    { day: "Mon", duration: 30 },
    { day: "Tue", duration: 45 },
    { day: "Wed", duration: 60 },
    { day: "Thu", duration: 40 },
    { day: "Fri", duration: 75 },
    { day: "Sat", duration: 90 },
    { day: "Sun", duration: 0 },
  ];

  const caloriesData = [
    { day: "Mon", calories: 300 },
    { day: "Tue", calories: 450 },
    { day: "Wed", calories: 600 },
    { day: "Thu", calories: 500 },
    { day: "Fri", calories: 700 },
    { day: "Sat", calories: 850 },
    { day: "Sun", calories: 0 },
  ];

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
    <section id="progress-charts" className="bg-black text-white py-24 px-5 md:px-10 relative">
      
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Progress <span className="text-emerald-400">Analytics</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Visualize your journey and track your improvements over time with detailed insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >

          {/* Workout Chart */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 md:p-8 rounded-3xl w-full group hover:border-emerald-500/30 transition-all duration-300">
            
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500/20 p-3 rounded-xl text-emerald-400">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Workout Duration</h3>
              </div>
              <div className="bg-gray-800 px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm text-gray-300 font-medium">
                <CalendarDays size={16} className="text-emerald-400"/> This Week
              </div>
            </div>

            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={workoutData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorWorkout" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                  <XAxis dataKey="day" stroke="#6b7280" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                  <YAxis stroke="#6b7280" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111827', borderColor: '#1f2937', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ color: '#10b981' }}
                    cursor={{ stroke: '#374151', strokeWidth: 1, strokeDasharray: '3 3' }}
                  />
                  <Area type="monotone" dataKey="duration" name="Minutes" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorWorkout)" activeDot={{ r: 8, fill: '#10b981', stroke: '#111827', strokeWidth: 2 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </motion.div>

          {/* Calories Chart */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-6 md:p-8 rounded-3xl w-full group hover:border-orange-500/30 transition-all duration-300">

            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/20 p-3 rounded-xl text-orange-400">
                  <Flame size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Calories Burned</h3>
              </div>
              <div className="bg-gray-800 px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm text-gray-300 font-medium">
                <CalendarDays size={16} className="text-orange-400"/> This Week
              </div>
            </div>

            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={caloriesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                  <XAxis dataKey="day" stroke="#6b7280" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                  <YAxis stroke="#6b7280" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111827', borderColor: '#1f2937', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ color: '#f97316' }}
                    cursor={{ fill: '#1f2937', opacity: 0.4 }}
                  />
                  <Bar dataKey="calories" name="kcal" fill="#f97316" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default ProgressCharts;