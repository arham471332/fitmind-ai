import { motion } from "framer-motion";

function TermsOfService() {
  return (
    <section className="bg-black text-white py-24 px-5 md:px-10 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Terms of <span className="text-emerald-400">Service</span>
          </h1>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Agreement to Terms</h2>
            <p>By accessing or using FitMind AI, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Medical Disclaimer</h2>
            <p>FitMind AI provides fitness and nutritional information for educational purposes only. You should not rely on this information as a substitute for, nor does it replace, professional medical advice, diagnosis, or treatment. If you have any concerns or questions about your health, you should always consult with a physician or other health-care professional.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. User Accounts</h2>
            <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Intellectual Property</h2>
            <p>The Service and its original content, features and functionality are and will remain the exclusive property of FitMind AI and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TermsOfService;
