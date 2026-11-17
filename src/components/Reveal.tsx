"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale";

function getInitial(direction: Direction, distance: number) {
  switch (direction) {
    case "left":
      return { opacity: 0, x: -distance };
    case "right":
      return { opacity: 0, x: distance };
    case "down":
      return { opacity: 0, y: -distance };
    case "scale":
      return { opacity: 0, scale: 0.85 };
    case "up":
    default:
      return { opacity: 0, y: distance };
  }
}

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  direction = "up",
  duration = 0.9,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  direction?: Direction;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={getInitial(direction, y)}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
