import Link from "next/link";
import { activities } from "@/src/data/activities";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";
import { ActivityCard } from "../activity-card";

export function ActivitiesSection() {
  // Featured activities appear on the home page. Fall back to the first 3 if none are marked.
  const featured = activities.filter((a) => a.featured);
  const visible = (featured.length > 0 ? featured : activities).slice(0, 3);

  return (
    <section id="activities" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          title="Activities"
          subtitle="What I joined."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((a, i) => (
            <Reveal key={a.id} delay={i * 60}>
              <ActivityCard activity={a} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/activities"
            className="card-hover hover:cursor-pointer inline-flex items-center gap-3 rounded-md border border-[var(--accent)] bg-[var(--accent)]/10 px-6 py-3 font-mono text-sm text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/20"
          >
            <span className="text-[var(--accent)]">$</span> view_all_activities
            <i className="las la-arrow-right text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
}
