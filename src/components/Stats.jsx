"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 250, suffix: "+", label: "לקוחות מרוצים" },
  { value: 98, suffix: "%", label: "שימור לקוחות" },
  { value: 3.5, suffix: "x", label: "החזר השקעה ממוצע" },
  { value: 50, suffix: "M+", label: "תקציב פרסום מנוהל" },
];

function AnimatedNumber({ value, suffix, inView }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1800;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(value, increment * step);
      setDisplay(current);

      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted =
    value % 1 !== 0 ? display.toFixed(1) : Math.round(display).toString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" dir="rtl" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#3b9fd9]/15 to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#3b9fd9]">
            תוצאות מוכחות
          </p>
          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
            מספרים שמדברים בעד עצמם
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              className="glass-card rounded-[2rem] border border-white/10 bg-[#0c0a16]/85 p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.24)]"
            >
              <p className="text-5xl font-black text-white md:text-6xl lg:text-7xl">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
