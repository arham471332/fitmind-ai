import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Phone, Send } from "lucide-react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="bg-black text-white py-24 px-5 md:px-10 min-h-screen relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-600/30 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0"
      ></motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get in <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our AI fitness coaching? Want to report a bug or request a feature? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200">Email Us</h3>
                    <p className="text-gray-400 mt-1">support@fitmind.ai</p>
                    <p className="text-gray-400">hello@fitmind.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200">Call Us</h3>
                    <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200">Headquarters</h3>
                    <p className="text-gray-400 mt-1">123 AI Boulevard</p>
                    <p className="text-gray-400">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-900/20 border border-emerald-500/20 p-8 rounded-2xl flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white mb-1">Live Chat Support</h3>
                <p className="text-gray-400 text-sm">Available for premium members</p>
              </div>
              <MessageSquare className="text-emerald-400" size={32} />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl space-y-6">
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-500/20 border border-emerald-500 text-emerald-300 p-4 rounded-xl text-center font-medium"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-black/50 border border-gray-700 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-white resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-black py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactPage;
