import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { HtmlTag } from "@/components/HtmlTag";

export default function NotFound() {
  return (
    <PageFrame>
      <section className="pt-20 max-w-2xl">
        <HtmlTag tag="h1" />
        <h1 className="font-[var(--font-display)] text-6xl text-white my-1">
          404, <span className="text-[var(--color-brand)]">somewhere</span>.
        </h1>
        <HtmlTag tag="h1" closing />
        <p className="mt-4 text-[var(--color-mist)]">
          This page either moved or never existed.
        </p>
        <Link href="/" className="flat-button mt-6 inline-block">
          Back home
        </Link>
      </section>
    </PageFrame>
  );
}
