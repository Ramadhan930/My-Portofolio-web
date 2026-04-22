"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Efek Parallax: Nama bergerak lebih lambat saat di-scroll
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="h-[90vh] flex flex-col justify-center px-8 md:px-24 overflow-hidden relative bg-white">
      <motion.div style={{ y, opacity }}>
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none text-black">
          MUHAMMAD GILANG RAMADHAN.
        </h1>
        <div className="flex items-center gap-4 mt-6">
          <div className="h-[1px] w-12 bg-black"></div>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-[0.3em]">
            Backend & AI Specialist
          </p>
        </div>
      </motion.div>
    </section>
  );
}