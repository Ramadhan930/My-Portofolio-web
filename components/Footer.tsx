"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="py-40 px-8 md:px-24 bg-black text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.5em] mb-4 text-zinc-500">Ready for collaboration?</p>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 uppercase leading-none">
          Let's build something <br/> reliable together.
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="mailto:gilang@example.com" className="text-sm font-bold border-b border-white pb-1 hover:text-zinc-400 transition-colors">EMAIL</a>
          <a href="https://github.com/Ramadhan930" target="_blank" className="text-sm font-bold border-b border-white pb-1 hover:text-zinc-400 transition-colors">GITHUB</a>
          <a href="#" className="text-sm font-bold border-b border-white pb-1 hover:text-zinc-400 transition-colors">LINKEDIN</a>
        </div>
      </motion.div>
      
      <footer className="mt-40 pt-8 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
        <p>© 2026 MUHAMMAD GILANG RAMADHAN</p>
        <p>BATAM, IDN</p>
      </footer>
    </section>
  );
}