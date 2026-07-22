import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Lost 15 lbs in 2 months",
      text: "FitMind AI completely changed my approach to fitness. The AI diet planner creates meals I actually enjoy eating, and the workouts adapt perfectly to my busy schedule.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Gained 8 lbs of muscle",
      text: "I've tried dozens of fitness apps, but nothing compares to this. The workout generator pushes me exactly as hard as I need, and the progress tracking is incredibly motivating.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marathon Finisher",
      text: "Having an AI coach available 24/7 is a game-changer. Whenever I hit a plateau, I just ask the coach for advice, and it adjusts my macros instantly. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-5 md:px-10 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Success <span className="text-emerald-400">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See how FitMind AI is transforming lives around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl relative hover:border-emerald-500/30 transition-colors group"
            >
              <Quote size={40} className="absolute top-6 right-6 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">"{review.text}"</p>
              
              <div>
                <h4 className="text-white font-bold text-lg">{review.name}</h4>
                <p className="text-emerald-400 text-sm font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
