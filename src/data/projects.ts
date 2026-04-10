import type { Project } from "@/src/lib/types";

// senior-project
import seniorOverview from "@/src/assets/image/projects/senior-project/overview.png";

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

const SENIOR_DRIVE =
  "https://drive.google.com/drive/folders/1br9JQW0H-KQ2wZ_A80KHtC9GjP5Mbcj3?usp=drive_link";

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
 *
 * `featured: true` → shown on the home page (top 3).
 * All projects are shown on the /projects page.
 */
export const projects: Project[] = [
  {
    slug: "senior-project",
    title:
      "Using Agentic AI to Develop the Planet Plus Credit Card System: A Case Study of Digio (Thailand) Co., Ltd.",
    description:
      "Senior project at Digio (Thailand) Co., Ltd. — full-stack delivery of the Planet Plus credit card platform: Flutter mobile app, Next.js admin portal, and Go microservices powered by gRPC.",
    longDescription: `Led the full-stack development of the **Planet Plus** credit card platform as part of the Digipay team at **Digio (Thailand) Co., Ltd.**, exploring how Agentic AI workflows can accelerate real-world fintech delivery.

**1. Planet Plus Mobile App — Flutter**
- Built a production-grade customer mobile app using **Flutter** with the **BLoC** pattern for predictable state management.
- Implemented credit card onboarding, transaction history, statement view, rewards, and secure authentication flows.
- Integrated with backend microservices through typed API clients and handled offline / error states gracefully.

**2. Web Admin Portal — Next.js 15 / TypeScript / Tailwind v4**
- Designed and implemented an internal admin portal for the operations team using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.
- Shipped dashboards for users, transactions, wallets, and card operations with role-based access control.
- Focused on a clean, component-driven architecture that can scale as more admin features are added.

**3. Backend Microservices — Go + gRPC + Protocol Buffers**
- Architected and implemented multiple Go microservices following **Clean Architecture** principles: API Gateway, Auth Service, User Service, Transaction Service, and Wallet Service.
- Defined strict service contracts with **Protocol Buffers** and served them over **gRPC** for low-latency inter-service communication.
- Centralized cross-cutting concerns (auth, rate-limit, logging, tracing) at the API Gateway so downstream services stay focused and simple.

**Outcome**
A cohesive, end-to-end credit card system — from mobile UX to backend plumbing — built with a modern, AI-assisted workflow and ready to plug into Digio's existing fintech stack.`,
    stack: [
      "flutter",
      "dart",
      "bloc",
      "next",
      "typescript",
      "tailwind",
      "go",
      "grpc",
      "protobuf",
      "microservices",
      "docker",
    ],
    orientation: "desktop",
    images: [seniorOverview],
    featured: true,
    links: {
      report: SENIOR_DRIVE,
      slide: SENIOR_DRIVE,
    },
    year: "2026",
  },
  {
    slug: "heal-jai",
    title: "HealJai",
    description:
      "A mobile app that recommends books based on your MBTI personality. Take the test, explore matching titles, and learn more about each personality type.",
    longDescription: `**HealJai** is a cross-platform mobile app built with **React Native + Expo** that recommends books based on the user's **MBTI** personality type.

**Key features**
- Personality test with dynamic question flow and result screen.
- Book catalogue grouped by MBTI type with detail pages.
- Profile / settings, theming, and persistent auth.

**Architecture**
- **Frontend:** React Native (Expo) with TypeScript.
- **Backend:** Node.js + Express REST API.
- **Database:** MongoDB for users, books, and test results.

Built as a Software Engineering group project — I contributed to both the mobile UI and the backend API design.`,
    stack: ["typescript", "react-native", "expo", "node", "express", "mongodb"],
    orientation: "mobile",
    images: [healHome, healQuestion, healResult, healTypeDetail, healShowAll, healBookDetail, healMore],
    featured: true,
    links: {
      github: "https://github.com/NatrinT/SoftwareEngineerProject",
    },
    year: "2025",
  },
  {
    slug: "spendy",
    title: "Spendy",
    description:
      "A personal income/expense tracker for Android. Sign up, log transactions, and visualize spending habits with monthly charts. Supports light & dark themes.",
    longDescription: `**Spendy** is an Android-native income & expense tracker built for the ITE-439 Mobile Application course.

**Key features**
- Email / password authentication with **Firebase Auth**.
- Add, edit, and categorise income / expense transactions.
- Monthly summary report with charts.
- Full **light & dark** theme support.

**Stack**
- **Java** on Android with **Firebase** (Auth + Firestore).
- Clean separation between UI, data, and business logic.

A great exercise in building a polished, real-world mobile product on a tight course timeline.`,
    stack: ["java", "firebase"],
    orientation: "mobile",
    images: [spendyHomeDark, spendyHomeLight, spendyHomeBelow, spendyLogin, spendyAdd, spendyTransaction, spendyReport],
    featured: true,
    links: {
      github: "https://github.com/ChitawornR/Spendy",
    },
    year: "2025",
  },
  {
    slug: "hon-hon",
    title: "Hon Hon",
    description:
      "An application that helps you manage time and stay focused while reading books. Built as a Final Project for ITE-434 with a React Native frontend and a Node.js backend.",
    longDescription: `**Hon Hon** is a reading companion app that helps users focus, track reading time, and build a habit around books. It was developed as the Final Project for **ITE-434** (React Native).

**Key features**
- Profile creation and book shelf management.
- Focus timer with session tracking while reading.
- Overview of reading progress per book.

**Stack**
- **React Native + Expo** (TypeScript) frontend.
- **Node.js + Express** backend with **MongoDB**.`,
    stack: ["typescript", "react-native", "expo", "node", "express", "mongodb"],
    orientation: "mobile",
    images: [honFirst, honCreateProfile, honTimer, honOverview, honPoster, honPresent1, honPresent2],
    links: {
      github: "https://github.com/ChitawornR/ReactNativeFinalProject",
    },
    year: "2024",
  },
  {
    slug: "dd-rental-car",
    title: "DD Car RentalCar",
    description:
      "A Java desktop application simulating a car booking and rental system. Users can book, rent, and pay for vehicles in one place. Built to practice OOP fundamentals.",
    longDescription: `**DD Car RentalCar** is a Java Swing desktop application that simulates a complete car rental workflow. It was built for the **INT-107 Object-Oriented Programming** course.

**Key features**
- User registration and login.
- Browse available cars, book, and rent.
- Invoice / payment screen for completed rentals.

**Stack**
- **Java** with **Swing** for the desktop UI.
- OOP design with clear separation between models, services, and views.`,
    stack: ["java", "swing"],
    orientation: "desktop",
    images: [ddMenu, ddLogin, ddRegister, ddInvoice],
    links: {
      github: "https://github.com/ChitawornR/JavaProject",
    },
    year: "2023",
  },
];
