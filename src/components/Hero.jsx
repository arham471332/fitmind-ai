import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="min-h-screen w-full max-w-full bg-black text-white flex flex-col lg:flex-row items-center justify-between px-5 md:px-10 py-20 gap-12 lg:gap-0">

      {/* Left Content */}
      <motion.div 
        className="max-w-xl text-center md:text-left flex flex-col items-center md:items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold leading-tight">
          Transform Your Body
          <span className="text-green-400 block md:inline">
            {" "}With AI
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-lg mt-6 max-w-sm md:max-w-none">
          FitMind AI creates personalized workouts, diet plans,
          and smart fitness guidance powered by artificial intelligence.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold w-full sm:w-auto"
          >
            Start Training
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-500 px-8 py-3 rounded-full w-full sm:w-auto"
          >
            Explore Plans
          </motion.button>

        </motion.div>

      </motion.div>


      {/* Right Card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="w-full max-w-sm aspect-square lg:w-96 lg:h-96 lg:aspect-auto bg-gradient-to-br from-green-400 to-green-800 rounded-3xl flex items-center justify-center relative flex-shrink-0"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            🏋️ AI
          </h2>
        </motion.div>
      </motion.div>


    </section>
  );
}

export default Hero;