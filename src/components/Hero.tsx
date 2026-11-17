"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/bg/temple-corridor-garlands.jpg"
        alt="Temple corridor with garlands"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-6 pb-24 pt-16 text-center sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="card-frame mx-auto w-full max-w-3xl rounded-2xl bg-[var(--cream)]/95 px-6 py-8 sm:px-16 sm:py-10"
        >
          <p className="font-script text-2xl text-[var(--maroon)]">
            We are getting married
          </p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="font-display gold-text mt-4 whitespace-nowrap leading-[0.95] tracking-wide"
            style={{ fontSize: "clamp(1.75rem, 8vw, 3.25rem)" }}
          >
            E. TAMARAI SELVAN
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="my-2 flex items-center justify-center gap-4"
          >
            <span className="h-px w-16 bg-[var(--gold-light)]" />
            <span className="font-script text-3xl text-[var(--maroon)]">
              weds
            </span>
            <span className="h-px w-16 bg-[var(--gold-light)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="font-display gold-text whitespace-nowrap leading-[0.95] tracking-wide"
            style={{ fontSize: "clamp(1.75rem, 8vw, 3.25rem)" }}
          >
            P. AKSHAYA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-numeral mt-8 text-sm uppercase tracking-[0.3em] text-[#141414]"
          >
            14 · December · 2026
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-white"
        >
          <span className="text-xs uppercase tracking-[0.3em] drop-shadow-md">
            scroll
          </span>
          <span className="h-10 w-px animate-pulse bg-white" />
        </motion.div>
      </div>
    </section>
  );
}
