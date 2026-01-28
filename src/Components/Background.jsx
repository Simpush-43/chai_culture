import { motion } from 'framer-motion';

export const Background = () => (
  <div className="fixed inset-0 -z-10 bg-[#1a0f0a] overflow-hidden">
    {/* Subtle radial gradient to create depth */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2c1b12] via-[#1a0f0a] to-[#0d0705]" />
    
    {/* Animated "Steam" or "Gold Dust" particles */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-yellow-600/10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: `${20 + i * 10}rem`,
          height: `${20 + i * 10}rem`,
          left: `${i * 20}%`,
          top: `${i * 15}%`,
        }}
      />
    ))}
  </div>
);