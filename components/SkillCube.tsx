"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Database,
  Cloud,
  Flame,
  Brain,
  ChartLine,
  type LucideIcon,
} from "lucide-react";
import { cubeSkills } from "@/lib/content";
import { cn } from "@/lib/cn";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  database: Database,
  cloud: Cloud,
  flame: Flame,
  brain: Brain,
  "chart-line": ChartLine,
};

// Face rotations. Order matches cubeSkills array (front, right, back, left, top, bottom).
const FACE_ROTATIONS = [
  { x: 0, y: 0 }, // 0: front
  { x: 0, y: -90 }, // 1: right
  { x: 0, y: -180 }, // 2: back
  { x: 0, y: 90 }, // 3: left
  { x: -90, y: 0 }, // 4: top
  { x: 90, y: 0 }, // 5: bottom
];

type Props = {
  /** Cube edge length in px on desktop. Defaults to 140. Auto-shrinks to ~70% on screens < 640px. */
  size?: number;
};

/**
 * Interactive 3D skills cube.
 * - Default: auto-rotates slowly on both X and Y axes.
 * - Hover: rotation slows ~5x for inspection.
 * - Click a face: cube snaps to face the camera + skill detail panel opens.
 * - Click pinned face / outside: returns to auto-rotation.
 */
export function SkillCube({ size: desktopSize = 140 }: Props) {
  const [pinned, setPinned] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [size, setSize] = useState(desktopSize);

  // Shrink the cube on small viewports so the card doesn't dominate mobile screens.
  useEffect(() => {
    function updateSize() {
      const next = window.innerWidth < 640 ? Math.round(desktopSize * 0.7) : desktopSize;
      setSize(next);
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [desktopSize]);

  const handleFaceClick = useCallback((idx: number) => {
    setPinned((current) => (current === idx ? null : idx));
  }, []);

  const half = size / 2;
  const isPinned = pinned !== null;
  const activeSkill = isPinned ? cubeSkills[pinned!] : null;

  // Per-face transforms recomputed for the current size
  const faceStyle = (idx: number) => {
    const transforms = [
      `translateZ(${half}px)`,
      `rotateY(90deg) translateZ(${half}px)`,
      `rotateY(180deg) translateZ(${half}px)`,
      `rotateY(-90deg) translateZ(${half}px)`,
      `rotateX(90deg) translateZ(${half}px)`,
      `rotateX(-90deg) translateZ(${half}px)`,
    ];
    return { transform: transforms[idx] };
  };

  // Animation target: free rotation OR snap to face
  const cubeAnimate = isPinned
    ? {
        rotateX: FACE_ROTATIONS[pinned!].x,
        rotateY: FACE_ROTATIONS[pinned!].y,
      }
    : {
        rotateX: [-15, -15],
        rotateY: [0, 360],
      };

  const cubeTransition = isPinned
    ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    : {
        duration: hovered ? 60 : 16,
        ease: "linear" as const,
        repeat: Infinity,
      };

  // The cube's 3D rotation makes faces project out of the geometric bounding
  // box. We wrap the cube in a viewport sized 1.45x to keep its visual extent
  // contained — otherwise the rotating cube clips the "click a face" text below.
  const viewportSize = Math.round(size * 1.45);

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="relative flex items-center justify-center"
        style={{
          perspective: `${size * 5}px`,
          width: viewportSize,
          height: viewportSize,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="relative"
          style={{
            width: size,
            height: size,
            transformStyle: "preserve-3d",
          }}
          animate={cubeAnimate}
          transition={cubeTransition}
        >
          {cubeSkills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] ?? Code2;
            const isActive = pinned === idx;
            return (
              <button
                key={skill.key}
                type="button"
                onClick={() => handleFaceClick(idx)}
                aria-label={`${skill.label}${isActive ? " (selected)" : ""}`}
                aria-pressed={isActive}
                className={cn(
                  "absolute inset-0 flex flex-col items-center justify-center gap-1.5",
                  "border border-[var(--color-brand)]/30",
                  "bg-[var(--color-brand-ghost)] backdrop-blur-sm",
                  "rounded-lg font-[var(--font-mono)] text-xs",
                  "text-[var(--color-brand)]",
                  "transition-colors duration-300",
                  "hover:bg-[var(--color-brand)]/15 hover:border-[var(--color-brand)]/60",
                  "focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/60",
                  "cursor-pointer"
                )}
                style={{
                  width: size,
                  height: size,
                  ...faceStyle(idx),
                }}
              >
                <Icon size={size * 0.22} strokeWidth={1.5} aria-hidden />
                <span className="tracking-wide">{skill.label.toLowerCase()}</span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Skill detail panel — slides in when a face is pinned */}
      <AnimatePresence mode="wait">
        {activeSkill && (
          <motion.div
            key={activeSkill.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm text-center px-4 mt-1"
          >
            <div className="font-[var(--font-mono)] text-[10px] tracking-widest uppercase text-[var(--color-haze)] mb-1">
              {activeSkill.label}
            </div>
            <p className="text-xs leading-relaxed text-[var(--color-mist)]">
              {activeSkill.detail}
            </p>
            <button
              onClick={() => setPinned(null)}
              className="mt-2 text-[10px] text-[var(--color-brand-soft)] hover:text-[var(--color-brand)] font-[var(--font-mono)] uppercase tracking-wider transition-colors"
            >
              ← back to rotation
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeSkill && (
        <p className="mt-1 text-[10px] text-[var(--color-haze)] font-[var(--font-mono)] uppercase tracking-widest">
          click a face
        </p>
      )}
    </div>
  );
}
