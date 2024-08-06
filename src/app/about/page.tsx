import Achievements from "../../components/AchievementsSection";
import TechStack from "../../components/TechStackSection";

export default function AboutPage() {
  return (
    <div className="w-11/12 mx-auto mt-20 text-center">
      <TechStack/>
      <Achievements/>
    </div>
  );
}
