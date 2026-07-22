import { motion } from "framer-motion";

function Features() {

  const features = [
    {
      title: "AI Diet Planner",
      desc: "Get personalized meal plans according to your body goals."
    },
    {
      title: "Workout Generator",
      desc: "AI creates workouts based on your fitness level."
    },
    {
      title: "Calories Tracker",
      desc: "Track your daily calories and nutrition."
    },
    {
      title: "AI Coach",
      desc: "Get smart fitness guidance anytime."
    },
    {
      title: "Progress Charts",
      desc: "Visualize your fitness improvement."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };


  return (
    <section className="bg-black text-white py-20 px-5 md:px-10">

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Powerful AI Fitness Features
      </motion.h2>


      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >

        {features.map((item,index)=>(
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 md:p-8 rounded-2xl w-full h-full flex flex-col justify-start"
          >

            <h3 className="text-xl md:text-2xl font-semibold text-green-400">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3 md:mt-4">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </motion.div>

    </section>
  );
}

export default Features;