"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section dir="rtl" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 flex min-h-screen w-full items-center px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl text-right">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl font-extrabold tracking-[0.15em] text-white sm:text-3xl md:text-5xl lg:text-6xl"
          >
שיווק טוב מתחיל ברעיון.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 text-2xl font-medium tracking-wide text-white md:text-4xl lg:text-5xl "
          >
אני הופך אותו לקריאייטיב שאי אפשר להתעלם ממנו,
משם לפרסום ממומן שמביא לקוחות.          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 flex "
          >
            <a
              href="#about"
              className="inline-block rounded-sm bg-[#e85d75] px-10 py-3.5 text-md font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-[#e85d75]/30 transition-all hover:-translate-y-0.5 hover:bg-[#f07088] hover:shadow-[#e85d75]/50"
            >
              בואו נצלול
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}