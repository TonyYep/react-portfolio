"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, FolderGit2, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/cn";
import { profile } from "@/lib/content";

const NAV = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/about", icon: User, label: "About" },
  { href: "/work", icon: Briefcase, label: "Work" },
  { href: "/projects", icon: FolderGit2, label: "Projects" },
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-30 h-screen w-14 sm:w-20",
        "flex flex-col items-center justify-between py-5 sm:py-6",
        "border-r border-white/[0.05] bg-[var(--color-ink)]/80 backdrop-blur-md"
      )}
    >
      {/* Monogram logo */}
      <Link
        href="/"
        className={cn(
          "group flex flex-col items-center gap-1 font-[var(--font-display)]",
          "text-[var(--color-brand)] hover:opacity-80 transition-opacity"
        )}
        aria-label="Tony Chan — home"
      >
        <span className="text-3xl leading-none font-medium">T</span>
        <span className="font-[var(--font-cursive)] text-[10px] text-[var(--color-brand-soft)] leading-none">
          chan
        </span>
      </Link>

      <nav className="flex flex-col gap-1" aria-label="Primary">
        {NAV.map(({ href, icon: Icon, label }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group relative flex items-center justify-center",
                "w-10 h-10 sm:w-11 sm:h-11 rounded-lg transition-colors",
                active
                  ? "text-[var(--color-brand)] bg-[var(--color-brand)]/[0.08]"
                  : "text-white/40 hover:text-[var(--color-brand)] hover:bg-white/[0.03]"
              )}
              aria-label={label}
              aria-current={active ? "page" : undefined}
            >
              <Icon size={18} strokeWidth={1.5} aria-hidden />
              <span
                className={cn(
                  "absolute left-full ml-3 px-2 py-1 rounded text-xs",
                  "bg-[var(--color-ink-4)] text-white whitespace-nowrap",
                  "opacity-0 group-hover:opacity-100 pointer-events-none",
                  "transition-opacity hidden sm:block"
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      <ul className="flex flex-col gap-3" aria-label="Social">
        <li>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-[var(--color-brand)] transition-colors block"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
        </li>
        <li>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-[var(--color-brand)] transition-colors block"
            aria-label="GitHub"
          >
            <Github size={18} strokeWidth={1.5} />
          </a>
        </li>
      </ul>
    </aside>
  );
}
