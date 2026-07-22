import { motion } from "framer-motion";
import { UserPlus, BrainCircuit, TrendingUp } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Create Your Profile",
      desc: "Tell us about your current fitness level, your goals, and your dietary preferences. We'll handle the rest."
    },
    {
      icon: BrainCircuit,
      title: "2. Get Your AI Plan",
      desc: "Our advanced AI instantly generates a personalized workout routine and macro-optimized diet plan just for you."
    },
    {
      icon: TrendingUp,
      title: "3. Track & Improve",
      desc: "Log your meals and workouts in your dashboard. The AI learns from your progress and continuously adapts your plan."
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-5 md:px-10 relative border-t border-gray-900">
      
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            How It <span className="text-emerald-400">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Your journey to a healthier lifestyle is just three simple steps away.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 border border-gray-800 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300">
                <step.icon size={36} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
