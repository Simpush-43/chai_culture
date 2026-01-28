import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center bg-gradient-to-b from-[#1a0f0a] via-[#1a0f0a]/40 to-transparent backdrop-blur-[1px]">
      {/* Branding / Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 sm:gap-3"
      >
        <img src="/logo.png" alt="Logo" className="h-8 sm:h-12 w-auto object-contain" />
        
        <span className="text-[#f5f5dc] font-serif tracking-[0.2em] text-sm sm:text-lg uppercase whitespace-nowrap">
          Chai <span className="hidden xs:inline">Culture</span>
        </span>
      </motion.div>

      {/* "Launching Soon" Status Element */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/5 flex-shrink-0"
      >
        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#d4af37]"></span>
        </span>
        <span className="text-[#d4af37] text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] font-medium whitespace-nowrap">
          Launching <span className="hidden sm:inline">Soon</span>
        </span>
      </motion.div>
    </nav>
  );
};

export default Navbar;