"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "📊",
    title: "SEO & Analytics",
    description:
      "Rank higher on search engines with data-backed keyword strategies and performance tracking.",
  },
  {
    icon: "📱",
    title: "Social Media",
    description:
      "Build engaged communities across platforms with compelling content and targeted campaigns.",
  },
  {
    icon: "🎯",
    title: "PPC Advertising",
    description:
      "Maximize ROI with precision-targeted ads on Google, Meta, and emerging platforms.",
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    description:
      "Tell your brand story through blogs, videos, and campaigns that convert visitors into customers.",
  },
  {
    icon: "🎨",
    title: "Brand Strategy",
    description:
      "Define your identity with cohesive visual systems and messaging that resonates.",
  },
  {
    icon: "📧",
    title: "Email Marketing",
    description:
      "Nurture leads with automated sequences and personalized campaigns that drive sales.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #4a2d8a44 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#e85d75]">
            What We Do
          </p>
          <h2 className="text-3xl font-bold tracking-wide text-white md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Full-spectrum digital marketing solutions designed to grow your
            brand and drive measurable results.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="glass-card group rounded-2xl p-8 transition-all hover:border-[#e85d75]/30 hover:bg-white/[0.08]"
            >
              <span className="mb-4 block text-3xl">{service.icon}</span>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
