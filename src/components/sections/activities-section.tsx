import Image from "next/image";
import { activities } from "@/src/data/activities";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

export function ActivitiesSection() {
  return (
    <section id="activities" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          title="Activities"
          subtitle="Beyond the keyboard."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal key={a.id} delay={i * 60}>
              <article className="card-hover group relative h-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background-elev)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {a.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
