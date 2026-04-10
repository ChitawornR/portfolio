import Image from "next/image";
import { profile } from "@/src/data/profile";
import { Typing } from "../typing";
import { Reveal } from "../reveal";

export function ProfileSection() {
  return (
    <section
      id="profile"
      className="hi-tech-vignette relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Animated grid background */}
      <div className="hi-tech-grid animate-grid-drift absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="font-mono text-sm text-[var(--accent)]">
              <span className="opacity-60">$</span> whoami
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{profile.name}</span>
            </h1>

            <div className="font-mono text-lg text-[var(--muted)] sm:text-xl">
              <span className="text-[var(--accent)]">&gt;</span>{" "}
              <Typing phrases={profile.taglines} />
            </div>

            <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {profile.bio}
            </p>

            <div className="mt-2 flex items-center gap-3 font-mono text-xs text-[var(--muted)]">
              <span className="inline-flex h-2 w-2 animate-pulse-glow rounded-full bg-[var(--accent)]" />
              <span>
                {profile.role}
                {profile.location ? ` · ${profile.location}` : ""}
              </span>
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href="#projects"
                className="rounded-md border border-[var(--accent)] bg-[var(--accent)]/10 px-5 py-2.5 font-mono text-sm text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/20"
              >
                ./view-projects
              </a>
              <a
                href="#contact"
                className="rounded-md border border-[var(--border)] px-5 py-2.5 font-mono text-sm text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                ./contact
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto aspect-square w-64 sm:w-80">
            {/* Decorative rotating ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[var(--accent)]/40" />
            <div className="absolute -inset-3 rounded-full border border-[var(--border)]" />
            <div className="animate-float relative h-full w-full overflow-hidden rounded-full border-2 border-[var(--accent)] shadow-[0_0_60px_-10px_var(--accent-glow)]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>
            {/* Corner brackets */}
            <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-[var(--accent)]" />
            <span className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-[var(--accent)]" />
            <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-[var(--accent)]" />
            <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-[var(--accent)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
