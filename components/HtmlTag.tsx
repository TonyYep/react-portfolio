import { cn } from "@/lib/cn";

type Props = {
  tag: string;
  closing?: boolean;
  className?: string;
  size?: "sm" | "md";
};

/**
 * The cursive HTML tag accents from the legacy site — `<h1>` / `</h1>` rendered
 * in La Belle Aurore script. Kept as a quiet brand signature.
 */
export function HtmlTag({ tag, closing = false, className, size = "md" }: Props) {
  const display = closing ? `</${tag}>` : `<${tag}>`;
  return (
    <span
      className={cn(
        "font-[var(--font-cursive)] text-[var(--color-brand-soft)] select-none",
        size === "sm" ? "text-xs" : "text-base",
        className
      )}
      aria-hidden="true"
    >
      {display}
    </span>
  );
}
