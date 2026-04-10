import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/src/data/projects";
import { Navbar } from "@/src/components/navbar";
import { Reveal } from "@/src/components/reveal";
import { ExpandableProjectCard } from "@/src/components/expandable-project-card";

export const metadata: Metadata = {
  title: "All Projects · Chittaworn",
  description: "A complete list of projects I have built and shipped.",
};

export default function AllProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/#projects"
              className="hover:cursor-pointer inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <i className="las la-arrow-left text-sm" /> back_to_home
            </Link>

            <div className="mt-6 flex items-center gap-3 font-mono text-sm text-[var(--accent)]">
              <span>/</span>
              <span className="h-px w-12 bg-[var(--accent)]" />
              <span className="uppercase tracking-[0.2em]">All Projects</span>
            </div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Everything I have <span className="gradient-text">shipped</span>.
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
              A complete archive of projects — from senior-year case studies to
              course works and side experiments. Click <em>View more</em> on any
              card to read the full write-up.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-10">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <ExpandableProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
