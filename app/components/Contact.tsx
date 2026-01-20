'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <footer id="contact" className="w-full bg-[#121212] py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
            >
                Let's Build Something <br />
                <span className="text-gray-600">Legendary.</span>
            </motion.h2>

            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
            >
                <a href="mailto:hello@koranin.com" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors text-lg">
                    Get in Touch
                </a>
                <a href="#" className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-colors text-lg">
                    View LinkedIn
                </a>
            </motion.div>

            <div className="flex justify-between items-end pt-24 border-t border-white/5 text-gray-500 text-sm">
                <div>
                    <p>&copy; {new Date().getFullYear()} Koranin Jattanatamjit.</p>
                    <p>Bangkok, Thailand.</p>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
