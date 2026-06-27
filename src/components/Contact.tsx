"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-padding relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, #e85d7544 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#e85d75]">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold tracking-wide text-white md:text-5xl">
            Start Your Journey
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Ready to transform your digital presence? Let&apos;s chart a course
            to success together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl"
        >
          {submitted ? (
            <div className="glass-card rounded-2xl p-10 text-center">
              <p className="text-2xl font-semibold text-white">
                Thank you!
              </p>
              <p className="mt-2 text-white/60">
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card space-y-5 rounded-2xl p-8 md:p-10">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/60">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#e85d75]/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-white/60">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#e85d75]/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-white/60">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#e85d75]/50"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-[#e85d75] py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#f07088] hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
