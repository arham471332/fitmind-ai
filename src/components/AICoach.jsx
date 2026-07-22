import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Sparkles, Activity } from "lucide-react";

function AICoach() {

  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  const [chat, setChat] = useState([
    {
      sender: "AI",
      text: "Hello! I am your FitMind AI Coach. I can analyze your workouts, suggest diet plans, or help you stay motivated. How can I help you today?"
    }
  ]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat, isTyping]);

  const sendMessage = (e) => {
    if(e) e.preventDefault();
    if(message.trim() === "") return;

    const userMessage = { sender: "You", text: message };
    
    setChat(prev => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      setChat(prev => [
        ...prev,
        {
          sender: "AI",
          text: "That's a great approach! Consistency is key. I recommend focusing on a balance of macronutrients and ensuring you get at least 7 hours of sleep for recovery."
        }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="bg-black text-white py-24 px-5 md:px-10 relative">
      
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-emerald-900/10 to-transparent pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
            <Sparkles className="text-emerald-400" size={32} /> FitMind <span className="text-emerald-400">Coach</span>
          </h2>
          <p className="text-gray-400">Your 24/7 personal trainer and nutritionist.</p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden flex flex-col h-[600px] shadow-2xl shadow-emerald-900/10 relative">
          
          {/* Header */}
          <div className="bg-black/60 border-b border-gray-800 p-5 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-400">
                  <Bot size={24} />
                </div>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-gray-900"></span>
              </div>
              <div>
                <h3 className="font-bold text-white">AI Assistant</h3>
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <Activity size={12} /> Online
                </p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-white transition-colors text-sm font-medium">Clear Chat</button>
          </div>

          {/* Chat Area */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative z-0">
            
            {chat.map((msg,index)=>(
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                key={index}
                className={`flex gap-4 max-w-[85%] md:max-w-[75%] ${
                  msg.sender === "AI" ? "mr-auto" : "ml-auto flex-row-reverse"
                }`}
              >
                {/* Avatar */}
                <div className="shrink-0 mt-1">
                  {msg.sender === "AI" ? (
                    <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-400 border border-emerald-500/30">
                      <Bot size={20} />
                    </div>
                  ) : (
                    <div className="bg-blue-500/20 p-2 rounded-xl text-blue-400 border border-blue-500/30">
                      <User size={20} />
                    </div>
                  )}
                </div>
                
                {/* Message Bubble */}
                <div className={`p-4 rounded-2xl ${
                  msg.sender === "AI"
                  ? "bg-gray-800/80 border border-gray-700 text-gray-200 rounded-tl-sm"
                  : "bg-emerald-500 text-black font-medium rounded-tr-sm"
                }`}>
                  <p className="leading-relaxed whitespace-pre-wrap">
                    {msg.text}
                  </p>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 max-w-[85%] md:max-w-[75%] mr-auto"
              >
                <div className="shrink-0 mt-1">
                  <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-400 border border-emerald-500/30">
                    <Bot size={20} />
                  </div>
                </div>
                <div className="bg-gray-800/80 border border-gray-700 p-4 rounded-2xl rounded-tl-sm flex gap-2 items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-black/60 border-t border-gray-800 p-4 relative z-10">
            <form onSubmit={sendMessage} className="relative max-w-4xl mx-auto flex items-center">
              <input
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                placeholder="Ask your fitness question..."
                className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-full py-4 pl-6 pr-16 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
              />
              <button
                type="submit"
                disabled={!message.trim() || isTyping}
                className="absolute right-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>

      </motion.div>
    </section>
  );
}

export default AICoach;