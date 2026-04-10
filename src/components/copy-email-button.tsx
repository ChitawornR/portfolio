"use client";

import { useState } from "react";

type Props = {
  email: string;
  icon: string;
  label: string;
  className: string;
};

export function CopyEmailButton({ email, icon, label, className }: Props) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" onClick={handleClick} className={`relative ${className}`}>
      <i className={`${icon} text-xl text-[var(--accent)]`} />
      <span>{copied ? "Copied!" : label}</span>
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-[var(--accent)] px-2 py-0.5 font-mono text-[10px] text-[var(--background)] whitespace-nowrap">
          ✓ copied to clipboard
        </span>
      )}
    </button>
  );
}
