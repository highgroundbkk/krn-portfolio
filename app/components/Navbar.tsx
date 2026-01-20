'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "Highground", href: "#highground" },
  { title: "Brainchain Labs", href: "#brainchain" },
  { title: "Process", href: "#process" },
  { title: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none">
        <a href="#" className="text-xl font-bold tracking-tighter text-white mix-blend-difference pointer-events-auto z-50">
          KRN.
        </a>
        
        <button 
          onClick={toggleMenu}
          className="pointer-events-auto z-50 text-white mix-blend-difference hover:opacity-70 transition-opacity"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#121212] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={toggleMenu}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative text-4xl md:text-6xl font-bold text-gray-400 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-4">
                      {link.title}
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 md:w-12 md:h-12" />
                  </span>
                </motion.a>
              ))}
            </nav>
            
            <div className="absolute bottom-12 text-center text-gray-500 text-sm">
                <p>Based in Bangkok, Thailand.</p>
                <p>&copy; 2026 Koranin Jattanatamjit.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
