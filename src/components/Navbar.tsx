import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_ITEMS = [
  { label: "Tentang", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Skill", href: "#skills" },
  { label: "Kontak", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
      <Container className="flex h-14 items-center justify-between">
        <a href="#" className="flex items-baseline gap-2">
          <span className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Kristianto Marta
          </span>
          <span className="hidden text-xs text-zinc-500 dark:text-zinc-400 sm:inline">
            Backend Developer (.NET)
          </span>
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <details className="relative sm:hidden">
            <summary className="list-none cursor-pointer select-none rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-zinc-950 transition hover:bg-black/10 dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:hover:border-white/25 dark:hover:bg-white/10">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-2xl dark:border-white/10 dark:bg-zinc-950/95">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm text-zinc-800 transition hover:bg-black/5 dark:text-zinc-200 dark:hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
