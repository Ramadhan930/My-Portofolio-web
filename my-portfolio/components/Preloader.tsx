"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("Initializing...");

  useEffect(() => {
    const sequence = [
      { t: "Loading Neural Networks...", d: 800 },
      { t: "Connecting to GitHub API...", d: 1500 },
      { t: "System Ready.", d: 2200 },
    ];

    sequence.forEach((item, i) => {
      setTimeout(() => setText(item.t), item.d);
    });

    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99] bg-white flex flex-col items-center justify-center"
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-mono text-xs tracking-[0.5em] uppercase text-black"
            >
              {text}
            </motion.p>
          </div>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            className="h-[1px] bg-black mt-4"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}