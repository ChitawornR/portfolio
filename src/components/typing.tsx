"use client";

import { useEffect, useState } from "react";

type TypingProps = {
  /** Phrases to cycle through */
  phrases: string[];
  /** ms per character when typing */
  typeSpeed?: number;
  /** ms per character when deleting */
  deleteSpeed?: number;
  /** ms to hold each completed phrase */
  hold?: number;
  className?: string;
};

export function Typing({
  phrases,
  typeSpeed = 70,
  deleteSpeed = 35,
  hold = 1400,
  className = "",
}: TypingProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, hold]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink ml-0.5 inline-block w-[2px] bg-[var(--accent)]">
        &nbsp;
      </span>
    </span>
  );
}
