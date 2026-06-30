"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "מי אני", href: "#about" },
  { label: " פרויקטים", href: "#services" },
  { label: "ממליצים", href: "#recommendations" },
  { label: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
<nav dir="rtl" className="border-b border-white/10 bg-[#090512]/80 backdrop-blur-md mx-auto max-w-full px-6 py-6 md:px-12 md:py-8 lg:px-16">
  <div className="mx-auto max-w-7xl flex items-center justify-between">
    <ul className="hidden w-full items-center justify-center gap-24 lg:gap-36 xl:gap-48 md:flex">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-lg font-medium tracking-wide text-white/80 transition-all duration-300 hover:text-white"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
    
    {/* Mobile menu button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden flex flex-col gap-1.5 focus:outline-none"
      aria-label="תפריט"
    >
      <div className={`h-0.5 w-6 bg-white/80 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
      <div className={`h-0.5 w-6 bg-white/80 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
      <div className={`h-0.5 w-6 bg-white/80 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
    </button>
  </div>
</nav>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0a0618]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-medium tracking-wide text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
