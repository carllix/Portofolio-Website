import Image from "next/image";

interface Achievement {
  title: string;
  date: string;
  desc: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    title:
      "Outstanding Academic Student at SMAN 1 Bekasi for the 2022/2023 Academic Year",
    date: "23 May 2023",
    desc: "Thanks to my hard work over 3 years at SMAN 1 Bekasi, I am proud to have achieved the title of Outstanding Academic Student at SMAN 1 Bekasi for the 2022/2023 academic year and ranked 2nd in my batch.",
    image: "OutstandingAcademicStudent.jpg",
  },
  {
    title:
      "1st Place in the Dhammavijja Senior High School Competition at the National Level VIII Sippa Dhamma Samajja",
    date: "21-25 June 2021",
    desc: "I, along with my friends Jonathan and Steven, as representatives from West Java Province, achieved 1st Place in the Dhammavijja Senior High School Competition at the National Level VIII Sippa Dhamma Samajja, organized by the Ministry of Religious Affairs of the Republic of Indonesia.",
    image: "DhammavijjaSDSVIII.jpg",
  },
];

const CardAchievement = ({title, date, desc, image}: Achievement) => {
  return (
    <div className="bg-[#121212] rounded-xl flex py-5 px-7 my-8 items-center">
      <div className="basis-1/4">
        <Image
          src={`/Achievements/${image}`}
          alt={title}
          width={500}
          height={500}
          className="w-full h-44 rounded-xl"
        />
      </div>
      <div className="basis-3/4 ml-7 text-start">
        <p className="font-bold text-xl">{title}</p>
        <p className="mt-2 text-[rgb(135,196,182)]">{date}</p>
        <p className="mt-4 font-sm">{desc}</p>
      </div>
    </div>
  );
}
export default function AchievementsSection() {
  return (
    <div className="w-11/12 mx-auto pt-20 text-center" id="achievements">
      <p className="text-3xl font-black">
        My <span className="text-[rgb(135,196,182)]">Achievements</span>
      </p>
      {achievements.map((achievement) => (
        <CardAchievement
          title={achievement.title}
          date={achievement.date}
          desc={achievement.desc}
          image={achievement.image}
          key={achievement.title}
        />
      ))}
    </div>
  );
}
