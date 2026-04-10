import type { Activity } from "@/src/lib/types";
import cyberSecure from "@/src/assets/image/activities/cyber-secure.jpg";
import genAiCard from "@/src/assets/image/activities/gen-ai-card.jpg";
import mosOlympic from "@/src/assets/image/activities/mos-olympic.jpg";
import staffGenAi from "@/src/assets/image/activities/staff-gen-ai-meeting.jpg";
import staffTniDay from "@/src/assets/image/activities/staff-tni-day.jpg";
import taAmornpan from "@/src/assets/image/activities/ta-amornpan.jpg";
import tniIcbir from "@/src/assets/image/activities/tni-icbir.jpg";

/**
 * To add a new activity:
 *   1. Drop the image into `src/assets/image/activities/`.
 *   2. Import it above.
 *   3. Add a new entry to the array below.
 */
export const activities: Activity[] = [
  {
    id: "tni-icbir",
    title: "ICBIR Conference",
    description: "Attended the International Conference on Business and Industrial Research at TNI.",
    image: tniIcbir,
  },
  {
    id: "gen-ai-card",
    title: "Generative AI Workshop",
    description: "Hands-on session exploring practical use cases of generative AI.",
    image: genAiCard,
  },
  {
    id: "staff-gen-ai-meeting",
    title: "Gen AI Staff Meeting",
    description: "Joined the staff team for a Gen AI strategy meeting.",
    image: staffGenAi,
  },
  {
    id: "cyber-secure",
    title: "Cybersecurity Training",
    description: "Cybersecurity awareness and best-practices session.",
    image: cyberSecure,
  },
  {
    id: "mos-olympic",
    title: "MOS Olympic",
    description: "Participated in the Microsoft Office Specialist Olympic competition.",
    image: mosOlympic,
  },
  {
    id: "ta-amornpan",
    title: "Teaching Assistant (C#, Java)",
    description: "Served as a teaching assistant for Aj. Amornpan's class.",
    image: taAmornpan,
  },
  {
    id: "staff-tni-day",
    title: "TNI Open House Staff",
    description: "Volunteered as staff during the TNI Open House event.",
    image: staffTniDay,
  },
];
