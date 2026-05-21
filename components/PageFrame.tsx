import { type ReactNode } from "react";
import { HtmlTag } from "./HtmlTag";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * The page wrapper preserves the legacy <body>/</body> cursive tags
 * that frame each route, but applies modern spacing and responsive layout.
 */
export function PageFrame({ children, className }: Props) {
  return (
    <main
      className={cn(
        "relative ml-14 sm:ml-20 min-h-screen px-4 sm:px-10 py-7 sm:py-10",
        "page-in",
        className
      )}
    >
      <HtmlTag tag="body" size="sm" className="absolute top-3 left-4 sm:left-10" />
      <div className="relative z-10">{children}</div>
      <div className="absolute bottom-3 left-4 sm:left-10 leading-none">
        <HtmlTag tag="body" closing size="sm" />
        <HtmlTag tag="html" closing size="sm" />
      </div>
    </main>
  );
}
