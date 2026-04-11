import Image from "next/image";
import { experiences } from "@/src/data/experiences";
import { stacks } from "@/src/data/stacks";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

const stackById = new Map(stacks.map((s) => [s.id, s]));

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          title="Experience"
          subtitle="Where I worked."
        />

        <div className="relative flex flex-col gap-10">
          {/* vertical rail */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)]/60 via-[var(--border)] to-transparent md:left-6"
          />

          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 80}>
              <article className="relative pl-12 md:pl-16">
                {/* dot */}
                <span
                  aria-hidden
                  className="absolute left-[9px] top-6 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] shadow-[0_0_12px_var(--accent)] md:left-[17px]"
                />

                <div className="card-hover group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background-elev)] p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      {exp.logo && (
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border border-[var(--border)] bg-white p-1.5">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={48}
                            height={48}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                          {exp.role}
                        </div>
                        <h3 className="mt-1 text-lg font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                          {exp.website ? (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}
                        </h3>
                        {exp.location && (
                          <p className="mt-1 text-xs text-[var(--muted)]">
                            <i className="las la-map-marker-alt mr-1" />
                            {exp.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <p className="font-mono text-xs text-[var(--muted)]">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 flex flex-col gap-2 text-sm leading-relaxed text-[var(--muted)]">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.stack && exp.stack.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.stack.map((id) => {
                        const s = stackById.get(id);
                        return (
                          <span
                            key={id}
                            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]"
                          >
                            {s?.icon && <i className={`${s.icon} text-sm text-[var(--accent)]`} />}
                            {s?.name ?? id}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
