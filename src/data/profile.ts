import type { Profile, ContactLink } from "@/src/lib/types";
import avatar from "@/src/assets/image/me/chittaworn.png";

export const profile: Profile = {
  name: "Chittaworn Khiri-eksathit",
  alias: "ChitawornR",
  role: "Software Engineer",
  location: "Bangkok, Thailand",
  taglines: [
    "Building things on the web.",
    "Full-stack curious. Detail obsessed.",
    "Code. Coffee. Repeat.",
  ],
  bio: "Software engineer who loves turning ideas into clean, fast, and maintainable products. I work across the stack — from APIs and databases to polished UIs — and enjoy automating anything that can be automated.",
  avatar,
};

export const contacts: ContactLink[] = [
  {
    id: "email",
    label: "chittaworn.kh@gmail.com",
    href: "mailto:chittaworn.kh@gmail.com",
    icon: "las la-envelope",
  },
  {
    id: "github",
    label: "github.com/ChitawornR",
    href: "https://github.com/ChitawornR",
    icon: "lab la-github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chittaworn-khiri-eksathit/",
    icon: "lab la-linkedin",
  },
];
