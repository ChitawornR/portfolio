import Image from "next/image";
import { education } from "@/src/data/education";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

const levelLabel: Record<"university" | "high-school", string> = {
  university: "University",
  "high-school": "High School",
};

export function EducationSection() {
  return (
    <section id="education" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          title="Education"
          subtitle="Where I studied."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.id} delay={i * 80}>
              <article className="card-hover relative h-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background-elev)] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border border-[var(--border)] bg-white p-1.5">
                    {e.logo ? (
                      <Image
                        src={e.logo}
                        alt={`${e.institution} logo`}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <i
                        className={`${e.level === "university" ? "las la-university" : "las la-school"} text-2xl text-[var(--accent)]`}
                        aria-hidden
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                      {levelLabel[e.level]}
                    </div>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--foreground)]">
                      {e.institution}
                    </h3>
                    {(e.degree || e.field) && (
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {[e.degree, e.field].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    <p className="mt-3 font-mono text-xs text-[var(--muted)]">
                      {e.period}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
