import type { Experience } from "@/src/lib/types";

/**
 * To add a new experience, append an entry to the array below.
 * No UI changes are required — the Experience section renders from this file.
 */
export const experiences: Experience[] = [
  {
    id: "digio-intern",
    company: "Digio (Thailand) Co., Ltd.",
    role: "Full Stack Developer Intern",
    location: "Bangkok, Thailand",
    period: "December 2025 — March 2026",
    highlights: [
      "Worked as a full stack developer intern on the Digipay team, contributing to the senior project: the Planet Plus credit card system — a Flutter mobile app, Next.js admin portal, and Go microservices communicating via gRPC.",
      "Picked up serverless development in practice — building and deploying services on AWS Lambda with the Serverless Framework, following Clean Architecture.",
      "Worked in an Agile workflow (sprint planning, stand-ups, retrospectives) alongside the Digipay team, shipping features in iterative cycles.",
      "Integrated agentic AI tooling (Claude Code) into the day-to-day workflow, accelerating delivery and reducing estimated development time.",
    ],
    stack: [
      "flutter",
      "next",
      "typescript",
      "go",
      "grpc",
      "microservices",
      "aws-lambda",
      "serverless",
      "docker",
    ],
    website: "https://www.digio.co.th/",
  },
];
