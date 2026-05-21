/**
 * Prepend the configured basePath to a public-asset path.
 *
 * Use this for raw <img src="..."> tags or any other manual asset URL.
 * Next.js automatically handles basePath for <Link>, <Image>, and CSS modules,
 * but NOT for hardcoded absolute paths in JSX `src` attributes.
 *
 * Pass a leading-slash path (e.g. "/images/foo.png").
 * Returns the same path prefixed with the basePath at build time.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) {
    throw new Error(`withBasePath expects a leading-slash path, got: ${path}`);
  }
  return `${BASE_PATH}${path}`;
}
