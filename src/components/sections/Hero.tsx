import { ArrowRight, Building2, Server, ShieldCheck, Workflow } from "lucide-react";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-black/10 dark:border-white/10">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-slate-500/20 via-zinc-500/20 to-slate-500/20 blur-3xl dark:from-slate-500/10 dark:via-zinc-500/10 dark:to-slate-500/10" />
      </div>

      <Container className="relative pt-16 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-3xl">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Backend Developer (.NET) · API · Database · System Integration
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            Backend yang stabil untuk sistem yang benar-benar siap production.
          </h1>
          <p className="mt-5 text-base leading-7 text-zinc-700 dark:text-zinc-300 sm:text-lg">
            Fokus di REST API, desain database transaksi, deployment dengan Docker + CI/CD, serta integrasi
            sistem (termasuk WhatsApp automation) agar proses bisnis lebih efisien.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
              <Building2 className="h-4 w-4 text-zinc-600 dark:text-zinc-300" /> Finance & Banking (Enterprise)
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
              <Server className="h-4 w-4 text-zinc-600 dark:text-zinc-300" /> REST API & DB Transactions
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
              <Workflow className="h-4 w-4 text-zinc-600 dark:text-zinc-300" /> WhatsApp + n8n Automation
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
              <ShieldCheck className="h-4 w-4 text-zinc-600 dark:text-zinc-300" /> Production-ready (Docker/CI/CD)
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-medium text-zinc-50 transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Lihat Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-black/5 px-5 text-sm font-medium text-zinc-950 transition hover:bg-black/10 dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:hover:border-white/25 dark:hover:bg-white/10"
            >
              Kontak
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
