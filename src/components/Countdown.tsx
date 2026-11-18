"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const WEDDING_DATE = new Date("2026-12-14T06:00:00");

function getTimeLeft() {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: { label: string; value: number }[] = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="bg-pillar-border relative overflow-hidden px-8 py-28 text-center sm:px-6">
      <div className="absolute inset-0 bg-[var(--cream-deep)]/25" />

      <div className="relative z-10">
        <Reveal>
          <h2 className="font-display text-xl text-[var(--maroon)] sm:text-2xl md:text-3xl">
            On the following events
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="font-script mt-4 text-2xl text-[var(--gold)] sm:mt-6 sm:text-3xl">
            Counting the Days
          </p>
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-xl grid-cols-4 gap-3 sm:mt-10 sm:gap-6">
          {units.map((u, i) => (
            <Reveal
              key={u.label}
              delay={0.1 + i * 0.1}
              direction="scale"
              duration={0.6}
              className="gallery-frame rounded-lg bg-[var(--cream)] px-1 py-3 sm:px-2 sm:py-5"
            >
              <div className="font-numeral text-xl text-[#141414] sm:text-3xl md:text-4xl">
                {mounted ? String(u.value).padStart(2, "0") : "00"}
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[var(--ink)]/60 sm:text-[10px] sm:tracking-[0.2em] md:text-xs">
                {u.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
