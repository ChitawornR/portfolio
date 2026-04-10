import { stacks } from "@/src/data/stacks";
import type { Stack } from "@/src/lib/types";

/** Split the stacks list into two roughly even rows */
function splitRows(items: Stack[]): [Stack[], Stack[]] {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

function StackChip({ stack }: { stack: Stack }) {
  return (
    <div className="card-hover group mx-3 inline-flex h-14 flex-shrink-0 items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background-elev)] px-5">
      <i
        className={`${stack.icon} text-2xl text-[var(--accent)]`}
        aria-hidden
      />
      <span className="font-mono text-xs uppercase tracking-wider text-[var(--foreground)]">
        {stack.name}
      </span>
    </div>
  );
}

/**
 * Renders a single marquee row.
 * Items are duplicated so the keyframe can translate -50% for a seamless loop.
 */
function MarqueeRow({
  items,
  direction,
}: {
  items: Stack[];
  direction: "left" | "right";
}) {
  return (
    <div className="overflow-hidden marquee-mask">
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {[...items, ...items].map((s, i) => (
          <StackChip key={`${s.id}-${i}`} stack={s} />
        ))}
      </div>
    </div>
  );
}

export function StackSection() {
  const [rowA, rowB] = splitRows(stacks);

  return (
    <section id="stack" className="marquee-pause flex flex-col gap-4 py-16">
      <MarqueeRow items={rowA} direction="left" />
      <MarqueeRow items={rowB} direction="right" />
    </section>
  );
}
