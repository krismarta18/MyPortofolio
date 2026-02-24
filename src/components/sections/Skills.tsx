import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SKILL_GROUPS } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills"
          description="A concise snapshot of the technologies I use most frequently."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/30"
            >
              <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {group.items.map((item, index) => (
                  <li key={`${group.title}:${item}:${index}`} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/30 dark:bg-white/30" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
