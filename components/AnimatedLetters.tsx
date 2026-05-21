"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  highlightLast?: boolean;
};

const letterVariants = {
  hidden: { opacity: 0, y: -24, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 180,
      mass: 0.6,
    },
  },
};

/**
 * Letter-by-letter bounce entrance. Replaces the legacy AnimatedLetters +
 * Boopity components which used a manual rAF loop. Motion handles the spring
 * physics and stagger natively.
 */
export function AnimatedLetters({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  highlightLast = false,
}: Props) {
  const letters = text.split("");

  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {letters.map((char, i) => {
        const isLast = i === letters.length - 1;
        const shouldHighlight = highlightLast && isLast;
        return (
          <motion.span
            key={`${char}-${i}`}
            variants={letterVariants}
            className={cn(
              "inline-block",
              shouldHighlight && "text-[var(--color-brand)]"
            )}
            aria-hidden
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
