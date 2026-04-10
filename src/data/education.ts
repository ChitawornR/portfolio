import type { Education } from "@/src/lib/types";
import tniLogo from "@/src/assets/image/logo/tni-logo.png";
import highSchoolLogo from "@/src/assets/image/logo/high-school-logo.png";

export const education: Education[] = [
  {
    id: "tni",
    level: "university",
    institution: "Thai-Nichi Institute of Technology (TNI)",
    degree: "B.Sc.",
    field: "Information Technology",
    period: "2022 — 2026",
    logo: tniLogo,
  },
  {
    id: "high-school",
    level: "high-school",
    institution: "Triamudom Suksa Pattanakarn Suvarnabhumi School",
    field: "Science — Mathematics",
    period: "2019 — 2022",
    logo: highSchoolLogo,
  },
];
