import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { PROJECTS } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-y border-black/10 bg-gradient-to-b from-zinc-100 to-transparent dark:border-white/10 dark:from-zinc-950/30">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          description="Ringkasan pengalaman project untuk menggambarkan scope, stack, dan delivery."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
