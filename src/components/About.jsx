"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="glass-card relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #4a2d8a 0%, #e85d75 50%, #3b9fd9 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl font-extrabold text-white/20 md:text-8xl">
                  10+
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/60">
                  שנות ניסיון
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-[#e85d75]/20 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#e85d75]">
            מי אני
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-wide text-white md:text-4xl">
            יהונתן כחלון, משווק דיגיטלי
          </h2>
          <p className="mb-4 leading-relaxed text-white/60">
            אני יונתן כחלון, מומחה בשיווק דיגיטלי שמביא עסקיך לקדמת הבמה.
            משלב אסטרטגיה, תוכן וקידום ממומן כדי ליצור חיבור אמיתי עם קהל היעד.
          </p>
          <p className="mb-8 leading-relaxed text-white/60">
            אני עובד עם חברות ויזמים כדי להגדיל חשיפה, להמיר לידים ולבנות אמון
            לאורך זמן באמצעות מסרים מדויקים וקמפיינים חכמים.
          </p>

          <ul className="space-y-3">
            {[
              "אסטרטגיה מותאמת אישית לעסק שלך",
              "תוצאות מדידות ושקיפות מלאה",
              "ליווי מקצועי צמוד לאורך כל הדרך",
            ].map((point) => (
              <li key={point} className="flex items-center gap-3 text-white/70">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e85d75]/20 text-xs text-[#e85d75]">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
