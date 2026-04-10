type Props = {
  index: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <div className="mb-12 flex flex-col gap-2">
      <div className="flex items-center gap-3 font-mono text-sm text-[var(--accent)]">
        <span>{index}</span>
        <span className="h-px w-12 bg-[var(--accent)]" />
        <span className="uppercase tracking-[0.2em]">{title}</span>
      </div>
      {subtitle && (
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {subtitle}
        </h2>
      )}
    </div>
  );
}
