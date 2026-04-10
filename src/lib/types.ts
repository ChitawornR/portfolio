import type { StaticImageData } from "next/image";

export type Stack = {
  /** Unique key */
  id: string;
  /** Display name shown under the icon */
  name: string;
  /**
   * Line Awesome icon class.
   * Examples: "lab la-react", "lab la-node-js", "las la-database"
   */
  icon: string;
  /** Optional category for grouping */
  category?: "language" | "framework" | "database" | "tool" | "cloud" | "mobile";
};

export type Activity = {
  id: string;
  title: string;
  description: string;
  date?: string;
  image: StaticImageData;
};

export type Project = {
  /** URL-friendly slug — must match the folder name in src/assets/image/projects/<slug>/ */
  slug: string;
  title: string;
  description: string;
  /** Stack ids referenced from data/stacks.ts (or free strings if not in the master list) */
  stack: string[];
  /** Project images. The first one is used as the cover. */
  images: StaticImageData[];
  /**
   * Display orientation for the image gallery.
   *  - "mobile"  → portrait phone-shaped frames
   *  - "desktop" → landscape frames
   */
  orientation: "mobile" | "desktop";
  /** Optional repo / demo links */
  links?: {
    github?: string;
    demo?: string;
  };
  /** Optional year/period label */
  year?: string;
};

export type Education = {
  id: string;
  level: "university" | "high-school";
  institution: string;
  degree?: string;
  field?: string;
  period: string;
  logo?: StaticImageData;
};

export type Profile = {
  name: string;
  alias?: string;
  role: string;
  location?: string;
  taglines: string[];
  bio: string;
  avatar: StaticImageData;
  resumeUrl?: string;
};

export type ContactLink = {
  id: string;
  label: string;
  href: string;
  /** Line Awesome icon class */
  icon: string;
};
