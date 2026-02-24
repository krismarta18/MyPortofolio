import type { Project } from "@/lib/data";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-xl hover:shadow-black/10 dark:border-white/10 dark:bg-zinc-900/30 dark:hover:border-white/20 dark:hover:bg-zinc-900/45 dark:hover:shadow-black/20">
      <div className="mb-4 overflow-hidden rounded-xl border border-black/10 bg-gradient-to-br from-black/5 to-transparent dark:border-white/10 dark:from-white/10">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            className="object-contain p-10 opacity-80 transition group-hover:opacity-100"
            priority={false}
          />
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">{project.title}</h3>
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
          {typeof project.year === "number" ? (
            <span className="rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-black/20 dark:text-zinc-200">
              {project.year}
            </span>
          ) : null}
          <span className="rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-black/20 dark:text-zinc-200">
            {project.category}
          </span>
        </div>
      </div>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-black/20 dark:text-zinc-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
