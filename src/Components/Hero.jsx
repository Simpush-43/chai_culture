import { motion } from 'framer-motion';

const Hero = () => (
  <section className="text-center w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-[#d4af37] font-serif tracking-[0.2em] mt-[3px] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6 block"
    >
      Est. 2026 • The Heritage Collection
    </motion.span>
    
    <motion.h1 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-[#f5f5dc] font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-4 sm:mb-6"
    >
      Brew the <span className="italic text-[#d4af37] block sm:inline">Royal</span> Tradition
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-[#f5f5dc]/80 text-sm sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
    >
      Experience the opulence of Indian royalty in every sip. Our premium instant premix 
      blends heritage spices with the finest tea leaves for a truly majestic escape.
    </motion.p>
    
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: "60px" }} 
      className="h-[1px] bg-[#d4af37] mx-auto my-8 sm:my-10"
    />
  </section>
);

export default Hero;