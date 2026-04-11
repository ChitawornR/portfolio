import Image from "next/image";
import type { Activity } from "@/src/lib/types";

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="card-hover group relative h-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background-elev)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-80" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
          {activity.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          {activity.description}
        </p>
      </div>
    </article>
  );
}
