import Link from "next/link";
import type { Metadata } from "next";
import { activities } from "@/src/data/activities";
import { Navbar } from "@/src/components/navbar";
import { Reveal } from "@/src/components/reveal";
import { ActivityCard } from "@/src/components/activity-card";

export const metadata: Metadata = {
  title: "All Activities · Chittaworn",
  description: "A complete list of activities and events I have taken part in.",
};

export default function AllActivitiesPage() {
  return (
    <>
      <Navbar />
      <main className="relative px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/#activities"
              className="hover:cursor-pointer inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <i className="las la-arrow-left text-sm" /> back_to_home
            </Link>

            <div className="mt-6 flex items-center gap-3 font-mono text-sm text-[var(--accent)]">
              <span>/</span>
              <span className="h-px w-12 bg-[var(--accent)]" />
              <span className="uppercase tracking-[0.2em]">All Activities</span>
            </div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Everything <span className="gradient-text">beyond the keyboard</span>.
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
              A complete archive of events, workshops, and volunteer roles I have
              taken part in — from academic conferences to cybersecurity training
              and teaching assistance.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, i) => (
              <Reveal key={a.id} delay={i * 60}>
                <ActivityCard activity={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
