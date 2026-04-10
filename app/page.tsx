import { Navbar } from "@/src/components/navbar";
import { ProfileSection } from "@/src/components/sections/profile-section";
import { StackSection } from "@/src/components/sections/stack-section";
import { EducationSection } from "@/src/components/sections/education-section";
import { ActivitiesSection } from "@/src/components/sections/activities-section";
import { ProjectsSection } from "@/src/components/sections/projects-section";
import { ContactSection } from "@/src/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <ProfileSection />
        <StackSection />
        <EducationSection />
        <ActivitiesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
