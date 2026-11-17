"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = dismissed ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [dismissed]);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden bg-[var(--cream)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/bg/temple-couple-cover.jpg"
              alt="Tamarai Selvan and Akshaya at the temple"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 px-6 pb-8 text-center sm:pb-12">
              <p className="font-script text-2xl text-white drop-shadow-md">
                Tamarai Selvan &amp; Akshaya
              </p>
              <p className="font-numeral text-xs uppercase tracking-[0.3em] text-white/90 drop-shadow-md">
                14 December 2026
              </p>
              <motion.button
                onClick={() => {
                  setDismissed(true);
                  window.dispatchEvent(new Event("invitation:open"));
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 rounded-full bg-[var(--cream)] px-10 py-3 text-sm uppercase tracking-[0.25em] text-[var(--maroon)] shadow-lg transition hover:bg-[var(--gold)] hover:text-white"
              >
                Open Invitation
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
