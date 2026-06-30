"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "📊",
    title: "קידום SEO",
    description: "שיפור נראות אורגנית במנועי חיפוש עם אסטרטגיה מותאמת.",
  },
  {
    icon: "📱",
    title: "ניהול רשתות חברתיות",
    description: "תוכן ממותג, קמפיינים ותקשורת שמייצרת מעורבות.",
  },
  {
    icon: "🎯",
    title: "פרסום ממומן",
    description: "קמפייני PPC חכמים שממקסמים תוצאות ותקציב.",
  },
  {
    icon: "✍️",
    title: "שיווק תוכן",
    description: "כתיבה, עיצוב וניהול תוכן עם מסר חד וברור.",
  },
  {
    icon: "🎨",
    title: "מיתוג ודיגיטל",
    description: "זהות דיגיטלית חזקה עם נראות מקצועית ועקבית.",
  },
  {
    icon: "📧",
    title: "אוטומציה ושיווק",
    description: "מערכות דיוור, ניתוח והמרה חכמה ללקוחות.",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="flex h-44 w-[320px] shrink-0 items-center gap-5 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-[#3b9fd9]/15 text-4xl">
        {service.icon}
      </span>

      <div className="text-right">
        <h3 className="mb-3 text-2xl font-bold text-white">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-white/70">
          {service.description}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = "left" }) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-6"
        animate={
          direction === "left"
            ? { x: ["0%", "-33.333%"] }
            : { x: ["-33.333%", "0%"] }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((service, index) => (
          <ServiceCard
            key={`${service.title}-${index}`}
            service={service}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function About() {
  const row1 = services.slice(0, 3);
  const row2 = services.slice(3, 6);

  return (
    <section
      id="about"
      dir="rtl"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#3b9fd9]/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1a5a7a]/40 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md shadow-2xl">
            <p className="mb-6 text-7xl font-black text-white md:text-8xl">
              אז מי אני?
            </p>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/90">
              אני יכול לדבר על עצמי המון. כמו כל בן אדם.
              <br />
              אני יכול לספר שאני מחדרה, שאני בן 28, ושאני שונא לאכול חמוצים.
              <br />
              אבל בסוף, זה לא באמת מה שחשוב.
              <br />
              מה שחשוב הוא מה אני יודע ליצור.
              <br />
              איזה <span className="font-extrabold">קריאייטיב</span> אני בונה.
              <br />
              אילו <span className="font-extrabold">רעיונות</span> אני מפתח.
              <br />
              ואיך כל זה הופך למכונה שמושכת תשומת לב
              <br />
              ומביאה <span className="font-extrabold">לקוחות.</span>
              <br />
              אז במקום להמשיך לדבר על עצמי...
              <br />
              פשוט תראו את העבודות שלי.
            </p>
          </div>
        </motion.div>

        <div className="relative w-screen space-y-8 overflow-hidden py-6">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-black/60 to-transparent" />

          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      </div>
    </section>
  );
}