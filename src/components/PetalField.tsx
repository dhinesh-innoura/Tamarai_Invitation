"use client";

import { motion } from "framer-motion";

const ORANGE = "#f4a53a";
const YELLOW = "#f6cf4e";
const DEEP_ORANGE = "#e8882a";

const COLORS = [ORANGE, YELLOW, DEEP_ORANGE];

const FLOWER_COUNT = 34;

function seededRandom(seed: number) {
  const x = Math.sin(seed * 999) * 10000;
  return x - Math.floor(x);
}

const FLOWERS = Array.from({ length: FLOWER_COUNT }, (_, i) => {
  const r1 = seededRandom(i + 1);
  const r2 = seededRandom(i + 50);
  const r3 = seededRandom(i + 100);
  const r4 = seededRandom(i + 150);
  return {
    left: `${(r1 * 100).toFixed(1)}%`,
    size: 10 + Math.round(r2 * 14),
    duration: 16 + Math.round(r3 * 14),
    delay: r4 * 20,
    drift: 14 + Math.round(seededRandom(i + 200) * 20) * (i % 2 === 0 ? 1 : -1),
    color: COLORS[i % COLORS.length],
  };
});

function Flower({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ display: "block" }}>
      <g opacity={0.85}>
        <circle cx="16" cy="9" r="6" fill={color} />
        <circle cx="23" cy="16" r="6" fill={color} />
        <circle cx="16" cy="23" r="6" fill={color} />
        <circle cx="9" cy="16" r="6" fill={color} />
        <circle cx="16" cy="16" r="5" fill="#fff3d0" opacity={0.9} />
      </g>
    </svg>
  );
}

export default function PetalField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {FLOWERS.map((f, i) => (
        <motion.div
          key={i}
          className="absolute -top-10"
          style={{ left: f.left }}
          initial={{ y: "-5vh", x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: "105vh",
            x: [0, f.drift, -f.drift, 0],
            opacity: [0, 0.95, 0.95, 0],
            rotate: 260,
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: f.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: f.duration,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <Flower size={f.size} color={f.color} />
        </motion.div>
      ))}
    </div>
  );
}
