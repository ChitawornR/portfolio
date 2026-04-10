import type { Project } from "@/src/lib/types";

// dd-rental-car
import ddInvoice from "@/src/assets/image/projects/dd-rental-car/dd-rental-car-invoice.png";
import ddLogin from "@/src/assets/image/projects/dd-rental-car/dd-rental-car-login.png";
import ddMenu from "@/src/assets/image/projects/dd-rental-car/dd-rental-car-menu.png";
import ddRegister from "@/src/assets/image/projects/dd-rental-car/dd-rental-car-register.png";

// heal-jai
import healHome from "@/src/assets/image/projects/heal-jai/home.png";
import healBookDetail from "@/src/assets/image/projects/heal-jai/book-detail.png";
import healMore from "@/src/assets/image/projects/heal-jai/more.png";
import healQuestion from "@/src/assets/image/projects/heal-jai/quesion.png";
import healResult from "@/src/assets/image/projects/heal-jai/result.png";
import healShowAll from "@/src/assets/image/projects/heal-jai/show-all-type.png";
import healTypeDetail from "@/src/assets/image/projects/heal-jai/type-detail.png";

// hon-hon
import honFirst from "@/src/assets/image/projects/hon-hon/First Page.png";
import honCreateProfile from "@/src/assets/image/projects/hon-hon/Create Profile Page-1.png";
import honTimer from "@/src/assets/image/projects/hon-hon/Timer Page-5.png";
import honOverview from "@/src/assets/image/projects/hon-hon/overview_book.png";
import honPresent1 from "@/src/assets/image/projects/hon-hon/hon-hon-present-1.jpg";
import honPresent2 from "@/src/assets/image/projects/hon-hon/hon-hon-present-2.jpg";
import honPoster from "@/src/assets/image/projects/hon-hon/react-final-project.jpg";

// spendy
import spendyHomeDark from "@/src/assets/image/projects/spendy/home-dark.png";
import spendyHomeLight from "@/src/assets/image/projects/spendy/home-light.png";
import spendyHomeBelow from "@/src/assets/image/projects/spendy/home-below.png";
import spendyAdd from "@/src/assets/image/projects/spendy/add-transaction.png";
import spendyTransaction from "@/src/assets/image/projects/spendy/transaction.png";
import spendyReport from "@/src/assets/image/projects/spendy/report-this-month.png";
import spendyLogin from "@/src/assets/image/projects/spendy/login.png";

/**
 * To add a new project:
 *   1. Create folder `src/assets/image/projects/<slug>/` and drop images in.
 *   2. Import them above.
 *   3. Add a new entry to the array below.
 *   4. Reference stack ids from `src/data/stacks.ts`.
 *
 * `orientation` controls how the gallery renders:
 *   - "mobile"  → portrait phone-shaped frames
 *   - "desktop" → landscape frames
 */
export const projects: Project[] = [
  {
    slug: "heal-jai",
    title: "HealJai",
    description:
      "A mobile app that recommends books based on your MBTI personality. Take the test, explore matching titles, and learn more about each personality type.",
    stack: ["typescript", "react-native", "expo", "node", "express", "mongodb"],
    orientation: "mobile",
    images: [healHome, healQuestion, healResult, healTypeDetail, healShowAll, healBookDetail, healMore],
    links: {
      github: "https://github.com/NatrinT/SoftwareEngineerProject",
    },
    year: "2025",
  },
  {
    slug: "hon-hon",
    title: "Hon Hon",
    description:
      "An application that helps you manage time and stay focused while reading books. Built as a Final Project for ITE-434 with a React Native frontend and a Node.js backend.",
    stack: ["typescript", "react-native", "expo", "node", "express", "mongodb"],
    orientation: "mobile",
    images: [honFirst, honCreateProfile, honTimer, honOverview, honPoster, honPresent1, honPresent2],
    links: {
      github: "https://github.com/ChitawornR/ReactNativeFinalProject",
    },
    year: "2024",
  },
  {
    slug: "spendy",
    title: "Spendy",
    description:
      "A personal income/expense tracker for Android. Sign up, log transactions, and visualize spending habits with monthly charts. Supports light & dark themes.",
    stack: ["java", "firebase"],
    orientation: "mobile",
    images: [spendyHomeDark, spendyHomeLight, spendyHomeBelow, spendyLogin, spendyAdd, spendyTransaction, spendyReport],
    links: {
      github: "https://github.com/ChitawornR/Spendy",
    },
    year: "2025",
  },
  {
    slug: "dd-rental-car",
    title: "DD Car RentalCar",
    description:
      "A Java desktop application simulating a car booking and rental system. Users can book, rent, and pay for vehicles in one place. Built to practice OOP fundamentals.",
    stack: ["java", "swing"],
    orientation: "desktop",
    images: [ddMenu, ddLogin, ddRegister, ddInvoice],
    links: {
      github: "https://github.com/ChitawornR/JavaProject",
    },
    year: "2023",
  },
];
