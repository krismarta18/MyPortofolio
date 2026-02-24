import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="About"
          title="Ringkasan profesional"
          description="Backend developer dengan pengalaman enterprise (finance & perbankan) fokus pada API, database transaksi, dan integrasi sistem."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="max-w-3xl text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
              <p>
                Saya membangun backend yang rapi dan terukur—mulai dari desain database, pembuatan REST API,
                sampai integrasi antar sistem dan automation.
              </p>
              <p className="mt-4">
                Selain enterprise, saya juga pernah membantu digitalisasi UMKM melalui solusi web dan
                automation yang praktis untuk operasional.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/30">
              <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">Value yang saya tawarkan</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>REST API yang stabil dan siap digunakan di production</li>
                <li>Desain database untuk kebutuhan transaksi dan reporting</li>
                <li>Integrasi WhatsApp ke sistem internal + automation workflow</li>
                <li>Deployment mandiri ke Linux VPS dengan Docker + CI/CD</li>
              </ul>
            </div>
          </div>

          <aside className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/30">
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">Pengalaman kerja</h3>
            <div className="mt-4 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
              <div>
                <p className="font-medium text-zinc-950 dark:text-zinc-100">PT Mega Central Finance</p>
                <p className="text-zinc-500 dark:text-zinc-400">IT Developer · 2024 — Sekarang</p>
                <p className="mt-1">Pengembangan & maintenance aplikasi internal, REST API, dan SQL Server.</p>
              </div>
              <div>
                <p className="font-medium text-zinc-950 dark:text-zinc-100">PT Mitra Integrasi Informatika</p>
                <p className="text-zinc-500 dark:text-zinc-400">Application Developer (BNI) · 2021 — 2024</p>
                <p className="mt-1">Integrasi antar sistem, testing, deployment, dan standar delivery project.</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
