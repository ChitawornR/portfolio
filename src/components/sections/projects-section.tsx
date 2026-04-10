import Image from "next/image";
import type { Project } from "@/src/lib/types";
import { projects } from "@/src/data/projects";
import { stacks } from "@/src/data/stacks";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

const stackMap = new Map(stacks.map((s) => [s.id, s]));

function StackTag({ id }: { id: string }) {
  const s = stackMap.get(id);
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 font-mono text-[11px] text-[var(--muted)]">
      <i className={s?.icon ?? "las la-code"} aria-hidden />
      {s?.name ?? id}
    </span>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  // Mobile screenshots → tall portrait frames; desktop → wider landscape frames
  const frame =
    project.orientation === "mobile"
      ? "h-[440px] w-[210px] rounded-[28px]"
      : "h-[280px] w-[460px] rounded-md";

  return (
    <div className="-mx-1 overflow-x-auto pb-2 no-scrollbar">
      <div className="flex gap-5 px-1">
        {project.images.map((img, idx) => (
          <div
            key={idx}
            className={`relative flex-shrink-0 overflow-hidden border border-[var(--border)] bg-[var(--background)] shadow-[0_8px_30px_-12px_var(--accent-glow)] ${frame}`}
          >
            <Image
              src={img}
              alt={`${project.title} screenshot ${idx + 1}`}
              fill
              sizes={project.orientation === "mobile" ? "210px" : "460px"}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="card-hover relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background-elev)] p-6 sm:p-8">
      {/* Header row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--accent)]">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-[var(--accent)]" />
            {project.year && <span>{project.year}</span>}
            <span className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--muted)]">
              {project.orientation}
            </span>
          </div>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-3 max-w-3xl leading-relaxed text-[var(--muted)]">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((id) => (
              <StackTag key={id} id={id} />
            ))}
          </div>
        </div>

        {project.links && (
          <div className="flex flex-shrink-0 gap-2 sm:flex-col">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 font-mono text-xs text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <i className="lab la-github text-base" /> Source
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--accent)] bg-[var(--accent)]/10 px-4 py-2 font-mono text-xs text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/20"
              >
                <i className="las la-external-link-alt text-base" /> Live
              </a>
            )}
          </div>
        )}
      </div>

      {/* Image gallery — full width below content */}
      <div className="mt-8 border-t border-[var(--border)] pt-6">
        <ProjectGallery project={project} />
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          title="Projects"
          subtitle="Things I have shipped."
        />

        <div className="flex flex-col gap-10">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
