import { contacts, profile } from "@/src/data/profile";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";
import { CopyEmailButton } from "../copy-email-button";

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading index="05" title="Contact" />

        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">together</span>.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[var(--muted)]">
            Open to opportunities, collaboration, and a good conversation about
            code. Reach out through any of the channels below.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {contacts.map((c) =>
              c.id === "email" ? (
                <CopyEmailButton
                  key={c.id}
                  email="chittaworn.kh@gmail.com"
                  icon={c.icon}
                  label={c.label}
                  className="hover:cursor-pointer card-hover inline-flex items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--background-elev)] px-5 py-3 font-mono text-sm text-[var(--foreground)]"
                />
              ) : (
                <a
                  key={c.id}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card-hover inline-flex items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--background-elev)] px-5 py-3 font-mono text-sm text-[var(--foreground)]"
                >
                  <i className={`${c.icon} text-xl text-[var(--accent)]`} />
                  {c.label}
                </a>
              ),
            )}
          </div>
        </Reveal>

        <footer className="mt-24 border-t border-[var(--border)] pt-8 font-mono text-xs text-[var(--muted)]">
          <span className="text-[var(--accent)]">$</span> echo &quot;© {new Date().getFullYear()}{" "}
          {profile.name}&quot;
        </footer>
      </div>
    </section>
  );
}
