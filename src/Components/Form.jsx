import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="relative w-full max-w-md mx-auto px-4 sm:px-0 my-4 sm:my-8 z-20">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#9a7b2c] rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000 hidden sm:block"></div>
            
            <form 
              onSubmit={handleSubmit}
              className="relative flex flex-col sm:flex-row w-full rounded-lg overflow-hidden border border-[#d4af37]/30 bg-[#1a0f0a]"
            >
              <input 
                type="email" 
                required
                placeholder="Your invitation email..." 
                className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-transparent text-[#f5f5dc] placeholder-[#f5f5dc]/30 focus:outline-none text-sm sm:text-base border-b sm:border-b-0 sm:border-r border-[#d4af37]/20"
              />
              <button 
                type="submit"
                className="bg-[#d4af37] text-[#1a0f0a] px-6 py-3 sm:px-8 sm:py-4 font-bold uppercase tracking-wider hover:bg-[#f5f5dc] transition-all active:scale-95 duration-300 whitespace-nowrap text-sm sm:text-base"
              >
                Join
              </button>
            </form>
            <p className="mt-3 text-[#d4af37]/50 text-[9px] sm:text-xs tracking-[0.2em] uppercase text-center">
              Launching Spring 2026
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-4 sm:p-6 border border-[#d4af37]/30 bg-[#1a0f0a]/50 rounded-lg backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.1 }}
              className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <span className="text-[#d4af37] text-xl sm:text-2xl">✓</span>
            </motion.div>
            <motion.h3 
              className="text-[#d4af37] font-serif text-lg sm:text-xl mb-1"
            >
              Invitation Reserved
            </motion.h3>
            <motion.p 
              className="text-[#f5f5dc]/70 text-[12px] sm:text-sm leading-relaxed"
            >
              The royal tradition is being prepared. <br className="hidden sm:block"/>
              Check your inbox for a glimpse.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};