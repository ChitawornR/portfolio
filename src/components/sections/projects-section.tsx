import Link from "next/link";
import { projects } from "@/src/data/projects";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";
import { ExpandableProjectCard } from "../expandable-project-card";

export function ProjectsSection() {
  // Featured projects appear on the home page. Fall back to the first 3 if none are marked.
  const featured = projects.filter((p) => p.featured);
  const visible = (featured.length > 0 ? featured : projects).slice(0, 3);

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          title="Projects"
          subtitle="What I built."
        />

        <div className="flex flex-col gap-10">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <ExpandableProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="card-hover hover:cursor-pointer inline-flex items-center gap-3 rounded-md border border-[var(--accent)] bg-[var(--accent)]/10 px-6 py-3 font-mono text-sm text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/20"
          >
            <span className="text-[var(--accent)]">$</span> view_all_projects
            <i className="las la-arrow-right text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
}
