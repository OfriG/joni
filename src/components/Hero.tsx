"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/60 md:text-base"
        >
          Digital Marketing Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl font-extrabold tracking-[0.15em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          NEXUS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-4 max-w-lg text-base font-light tracking-wide text-white/75 md:text-lg"
        >
          Data-Driven Growth & Brand Transformation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-block rounded-sm bg-[#e85d75] px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#e85d75]/30 transition-all hover:bg-[#f07088] hover:shadow-[#e85d75]/50 hover:-translate-y-0.5"
          >
            Explore
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-8 w-5 rounded-full border border-white/30 p-1">
              <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-white/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
