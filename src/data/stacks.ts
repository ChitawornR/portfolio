import type { Stack } from "@/src/lib/types";

/**
 * Master list of tech stacks.
 *
 * To add a new stack:
 *   1. Add an entry below with a unique `id`.
 *   2. Reference that `id` from `projects.ts` if used in a project.
 *
 * Icons use Line Awesome (loaded via CDN in app/layout.tsx).
 *   - `lab la-*` for brand icons
 *   - `las la-*` for solid generic icons
 */
export const stacks: Stack[] = [
  // Languages
  { id: "typescript", name: "TypeScript", icon: "las la-code", category: "language" },
  { id: "javascript", name: "JavaScript", icon: "lab la-js-square", category: "language" },
  { id: "java", name: "Java", icon: "lab la-java", category: "language" },
  { id: "python", name: "Python", icon: "lab la-python", category: "language" },
  { id: "go", name: "Go", icon: "las la-terminal", category: "language" },

  // Frameworks / UI
  { id: "react", name: "React", icon: "lab la-react", category: "framework" },
  { id: "next", name: "Next.js", icon: "las la-bolt", category: "framework" },
  { id: "react-native", name: "React Native", icon: "lab la-react", category: "mobile" },
  { id: "expo", name: "Expo", icon: "las la-mobile", category: "mobile" },
  { id: "tailwind", name: "Tailwind CSS", icon: "las la-wind", category: "framework" },
  { id: "swing", name: "Java Swing", icon: "las la-desktop", category: "framework" },

  // Backend / Runtime
  { id: "node", name: "Node.js", icon: "lab la-node-js", category: "framework" },
  { id: "express", name: "Express", icon: "las la-server", category: "framework" },

  // Databases
  { id: "mongodb", name: "MongoDB", icon: "las la-leaf", category: "database" },
  { id: "firebase", name: "Firebase", icon: "las la-fire", category: "database" },
  { id: "sql", name: "SQL", icon: "las la-database", category: "database" },

  // Cloud / DevOps
  { id: "aws", name: "AWS", icon: "lab la-aws", category: "cloud" },
  { id: "docker", name: "Docker", icon: "lab la-docker", category: "cloud" },

  // Tools
  { id: "git", name: "Git", icon: "lab la-git-alt", category: "tool" },
  { id: "github", name: "GitHub", icon: "lab la-github", category: "tool" },
  { id: "linux", name: "Linux", icon: "lab la-linux", category: "tool" },
];
