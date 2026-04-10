"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/src/lib/types";
import { stacks } from "@/src/data/stacks";

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

/**
 * Very small markdown-lite renderer:
 *  - `**bold**` → <strong>
 *  - lines starting with `- ` → bullet list
 *  - blank line → paragraph break
 */
function renderLongDescription(text: string) {
  const blocks = text.split(/\n{2,}/);

  const renderInline = (s: string) => {
    const parts = s.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((p, i) =>
      p.startsWith("**") && p.endsWith("**") ? (
        <strong key={i} className="text-[var(--foreground)]">
          {p.slice(2, -2)}
        </strong>
      ) : (
        <span key={i}>{p}</span>
      ),
    );
  };

  return blocks.map((block, i) => {
    const lines = block.split("\n");
    if (lines.every((l) => l.trim().startsWith("- "))) {
      return (
        <ul key={i} className="ml-5 list-disc space-y-1.5 text-[var(--muted)]">
          {lines.map((l, j) => (
            <li key={j}>{renderInline(l.trim().replace(/^- /, ""))}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="leading-relaxed text-[var(--muted)]">
        {renderInline(block)}
      </p>
    );
  });
}

type Props = {
  project: Project;
  index: number;
  /** Start expanded (useful on the /projects page) */
  defaultExpanded?: boolean;
};

export function ExpandableProjectCard({ project, index, defaultExpanded = false }: Props) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const hasLong = Boolean(project.longDescription);

  return (
    <article className="card-hover relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background-elev)] p-6 sm:p-8">
      {/* Header row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--accent)]">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-[var(--accent)]" />
            {project.year && <span>{project.year}</span>}
            <span className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--muted)]">
              {project.orientation}
            </span>
            {project.featured && (
              <span className="rounded border border-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--accent)]">
                Featured
              </span>
            )}
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
          <div className="flex flex-shrink-0 flex-wrap gap-2 sm:flex-col">
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
            {project.links.report && (
              <a
                href={project.links.report}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 font-mono text-xs text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <i className="las la-file-pdf text-base" /> Report
              </a>
            )}
            {project.links.slide && (
              <a
                href={project.links.slide}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 font-mono text-xs text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <i className="las la-file-powerpoint text-base" /> Slide
              </a>
            )}
          </div>
        )}
      </div>

      {/* Expanded long description */}
      {hasLong && (
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
            expanded ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 border-t border-[var(--border)] pt-6">
              {renderLongDescription(project.longDescription!)}
            </div>
          </div>
        </div>
      )}

      {/* View more / less toggle */}
      {hasLong && (
        <div className="mt-5">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="hover:cursor-pointer inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--background)] px-4 py-2 font-mono text-xs text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <i
              className={`las ${expanded ? "la-angle-up" : "la-angle-down"} text-sm transition-transform`}
            />
            {expanded ? "View less" : "View more"}
          </button>
        </div>
      )}

      {/* Image gallery — full width below content */}
      <div className="mt-8 border-t border-[var(--border)] pt-6">
        <ProjectGallery project={project} />
      </div>
    </article>
  );
}
