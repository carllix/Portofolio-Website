import ProjectsPage from "../components/ProjectsSection";
import HomeSection from "../components/HomeSection";
import AchievementsSection from "@/components/AchievementsSection";
import TechStackSection from "@/components/TechStackSection";
import AboutSection from "@/components/AboutSection";

export default function Page() {
  return (
    <div>
      <HomeSection />
      <AboutSection/>
      <TechStackSection />
      <ProjectsPage />
      <AchievementsSection />
    </div>
  );
}
