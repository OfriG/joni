"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    icon: "📊",
    title: "קידום SEO",
    description:
      "שיפור נראות אורגנית במנועי חיפוש עם אסטרטגיה מותאמת ומעקב ביצועים.",
  },
  {
    icon: "📱",
    title: "ניהול רשתות חברתיות",
    description:
      "קמפיינים חכמים, תוכן ממותג ותקשורת קהל שמייצרים אמון ומעורבות.",
  },
  {
    icon: "🎯",
    title: "פרסום ממומן",
    description:
      "קמפייני PPC עם מיקוד חכם ושיפור מתמיד כדי למקסם תוצאות ותקציב.",
  },
  {
    icon: "✍️",
    title: "שיווק תוכן",
    description:
      "כתיבה אסטרטגית, עיצוב וניהול תוכן שמייצרים מסר ברור ורלוונטי.",
  },
  {
    icon: "🎨",
    title: "מיתוג ודיגיטל",
    description:
      "בניית זהות דיגיטלית חזקה עם קו ויזואלי מקצועי ונראות עקבית.",
  },
  {
    icon: "📧",
    title: "אוטומציה ושיווק",
    description:
      "תקשורת חכמה ללקוחות עם מערכת דיוור, ניתוח והמרה חכמה.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Services() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(services.length / perPage);
  const visibleServices = services.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="services" dir="rtl" className="min-h-screen w-full relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/3.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1a5a7a]/20 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl h-full flex flex-col items-center justify-center py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-6xl font-semibold uppercase  text-[#3b9fd9]">
            השירותים שלנו
          </p>
          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
            שילוב של אסטרטגיה, יצירתיות ותוצאות
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            מבחר שירותים דיגיטליים מסודרים בסלייד חזק ושקוף, בדיוק כפי שצריך להיות באתר מקצועי.
          </p>
        </motion.div>

        <div>

        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 lg:grid-cols-3"
        >
          {visibleServices.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0a17]/80 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-1 hover:border-[#3b9fd9]/30 hover:bg-white/[0.08]"
            >
              <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#3b9fd9]/10 text-3xl text-[#3b9fd9] shadow-sm shadow-[#3b9fd9]/10">
                {service.icon}
              </span>
              <h3 className="mb-4 text-2xl font-semibold text-white text-right">{service.title}</h3>
              <p className="text-sm leading-relaxed text-white/65 text-right">
                {service.description}
              </p>
              
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-white/60">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              className={`h-2.5 w-9 rounded-full transition ${
                index === page ? "bg-[#3b9fd9]" : "bg-white/15 hover:bg-white/30"
              }`}
              aria-label={`עמוד ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
