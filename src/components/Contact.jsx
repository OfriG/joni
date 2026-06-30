"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" dir="rtl" className="min-h-screen w-full relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/kling_20260627_VIDEO_Create_an__4630_0 (1).mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#3b9fd9]/10 to-transparent" />
      <div className="absolute right-0 top-24 hidden h-40 w-40 rounded-full bg-[#3b9fd9]/10 blur-3xl lg:block" />

      <div className="relative mx-auto max-w-7xl h-full flex flex-col items-center justify-center py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#3b9fd9]">
            צור קשר
          </p>
          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
            בואו נתחיל פרויקט חדש
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            מלאו את הפרטים ונחזור אליכם עם תכנית שיווקית חכמה וממוקדת.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl px-6"
        >
          {submitted ? (
            <div className="glass-card rounded-[2rem] border border-white/10 bg-[#0c0a16]/90 p-12 text-center shadow-[0_40px_120px_rgba(0,0,0,0.2)]">
              <p className="text-3xl font-bold text-white">תודה!</p>
              <p className="mt-4 text-white/70">
                ההודעה נשלחה בהצלחה. נחזור אליכם בתוך יום עבודה.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-white/60">
                  <span>שם</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="יהונתן כחלון"
                  className="w-full border-b-2 border-white bg-transparent px-0 py-3 text-white placeholder-white/40 outline-none transition focus:border-[#3b9fd9]"
                />
              </div>

              <div>
                <label className="text-sm text-white/60">
                  <span>אימייל</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b-2 border-white bg-transparent px-0 py-3 text-white placeholder-white/40 outline-none transition focus:border-[#3b9fd9]"
                />
              </div>

              <div>
                <label className="text-sm text-white/60">
                  <span>טלפון</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="050-1234567"
                  className="w-full border-b-2 border-white bg-transparent px-0 py-3 text-white placeholder-white/40 outline-none transition focus:border-[#3b9fd9]"
                />
              </div>

              <div>
                <label className="text-sm text-white/60">
                  <span>הערות</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="כתבו את ההערות שלכם כאן..."
                  className="w-full border-b-2 border-white bg-transparent px-0 py-3 text-white placeholder-white/40 outline-none transition focus:border-[#3b9fd9] resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-[#ff006e] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#ff3b8a]"
              >
                שלח
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
