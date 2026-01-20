'use client';

import { motion } from 'framer-motion';

export default function Highground() {
  return (
    <section id="highground" className="relative w-full bg-[#0a0a0a] text-white py-32 px-6 md:px-12 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-mono text-green-500 mb-4 tracking-widest uppercase"
            >
                Featured Venture
            </motion.h2>
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold mb-8"
            >
                HIGHGROUND <span className="text-gray-500">Cannabis & Café</span>
            </motion.h3>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-3xl font-light text-gray-300 max-w-4xl leading-relaxed"
            >
                "We grow trust before we grow anything else."
            </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Story */}
            <div className="space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h4 className="text-2xl font-bold mb-4 text-white">From Farm to Friends</h4>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        At HIGHGROUND Cannabis & Café, we believe the future of cannabis is rooted in trust, creativity, and connection. 
                        Founded by Koranin Jattanatamjit, HIGHGROUND was built around a philosophy that turns cultivation into collaboration, and community into purpose.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <h4 className="text-2xl font-bold mb-4 text-white">Innovation & Impact</h4>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        We focus on quality over quantity, blending curated experiences with genuine local partnerships. 
                        Our story is one of growth - not just as a business, but as part of a movement that uplifts people, educates, and gives back.
                    </p>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-white/5 rounded-2xl border border-white/10"
                >
                    <p className="text-white text-xl italic font-light">
                        "The cannabis industry has the power to change lives, support local communities, and inspire creativity - if done right."
                    </p>
                    <p className="mt-4 text-green-400 font-mono">— Koranin Jattanatamjit, Founder & CEO</p>
                </motion.div>
            </div>

            {/* Right Column: Key Pillars */}
            <div className="grid grid-cols-1 gap-6">
                {[
                    { title: "Innovation & Design", desc: "Creating a customer-first retail experience that blends lifestyle, education, and aesthetics." },
                    { title: "Community & Trust", desc: "Partnering with local growers, ensuring fair and sustainable growth within Thailand’s cannabis ecosystem." },
                    { title: "Purpose & Impact", desc: "Donating a portion of profits to community initiatives in Pathum Thani." }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="p-8 rounded-xl bg-[#1a1a1a] hover:bg-[#222] transition-colors group cursor-default border border-white/5 hover:border-green-500/30"
                    >
                        <h5 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">{item.title}</h5>
                        <p className="text-gray-400">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
        
        {/* Footer / CTA */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <p className="text-2xl font-light">
                Highground isn't just a space. <br />
                It's a mindset - <span className="text-white font-normal">calm, modern, and honest.</span>
            </p>
            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-green-400 transition-colors">
                Visit HIGHGROUND
            </a>
        </motion.div>

      </div>
    </section>
  );
}
