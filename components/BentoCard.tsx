import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** When true the card gets a glowing brand border accent (used for CTAs). */
  accent?: boolean;
  /** When true the card padding shrinks (use for ornament-only cards like the cube). */
  ornament?: boolean;
};

export function BentoCard({
  children,
  className,
  accent = false,
  ornament = false,
  ...rest
}: Props) {
  return (
    <div
      {...rest}
      className={cn(
        "relative rounded-[var(--radius-card)] overflow-hidden",
        "bg-[var(--color-ink-3)] border border-white/[0.06]",
        "transition-colors duration-300",
        ornament ? "p-3" : "p-5 sm:p-6",
        accent &&
          "border-[var(--color-brand)]/30 hover:border-[var(--color-brand)]/60",
        !accent && "hover:border-white/[0.12]",
        className
      )}
    >
      {children}
    </div>
  );
}

type LabelProps = { children: ReactNode; className?: string };
export function BentoLabel({ children, className }: LabelProps) {
  return (
    <div
      className={cn(
        "font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--color-haze)]",
        className
      )}
    >
      {children}
    </div>
  );
}
