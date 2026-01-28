import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const socials = [
    { icon: <FaInstagram />, link: "#", label: "Instagram" },
    { icon: <FaFacebookF />, link: "#", label: "Facebook" },
    { icon: <FaTwitter />, link: "#", label: "Twitter" },
  ];

  return (
    <footer className="fixed bottom-0 w-full z-50 px-8 py-10 flex flex-col sm:flex-row justify-between items-center gap-6 bg-gradient-to-t from-[#1a0f0a] to-transparent">
      
      {/* Copyright/Brief Description Tagline */}
      <div className="text-[#f5f5dc]/40 text-xs tracking-widest uppercase order-2 sm:order-1">
        © 2026 Chai Culture. All Rights Reserved.
      </div>

      {/* Social Icons */}
      <div className="flex gap-8 order-1 sm:order-2">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            whileHover={{ y: -3, color: '#d4af37' }}
            className="text-[#f5f5dc]/60 text-xl transition-colors duration-300"
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;