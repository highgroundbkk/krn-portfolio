'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understanding the core purpose. I dive deep into the vision, market, and user needs to build a solid foundation."
  },
  {
    num: "02",
    title: "Strategy & Design",
    desc: "Crafting the blueprint using modern aesthetics and user-centric principles. We visually map out the future."
  },
  {
    num: "03",
    title: "Development",
    desc: "Bringing ideas to life with clean, scalable code. Focusing on performance, animation, and interaction."
  },
  {
    num: "04",
    title: "Launch & Growth",
    desc: "Deploying the experience and iterating based on real-world feedback to ensure sustainable success."
  }
];

export default function Process() {
  return (
    <section id="process" className="w-full bg-[#0a0a0a] py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
         <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-gray-500 mb-16 tracking-widest uppercase text-center"
        >
            My Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pt-8 border-t border-white/10"
                >
                    <span className="absolute top-0 left-0 -translate-y-1/2 bg-[#0a0a0a] pr-4 text-4xl font-bold text-gray-700">{step.num}</span>
                    <h3 className="text-xl font-bold text-white mb-4 mt-4">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
