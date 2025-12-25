import VisionCard from "./VisionCard";
import { HeartHandshake, BookOpen, Users, ShieldCheck } from "lucide-react";

export default function VisionGrid() {
  const visions = [
    {
      title: "Drug Abuse Rehabilitation",
      text: "A faith-guided rehabilitation initiative combining spiritual restoration, counseling, and structured recovery support.",
      icon: ShieldCheck,
    },
    {
      title: "Bible Study & Library",
      text: "A dedicated space for discipleship, research, and quiet reflection for worshippers, students, and leaders.",
      icon: BookOpen,
    },
    {
      title: "Youth & Women Empowerment",
      text: "Mentorship and skills development programs aimed at strengthening leadership and uplifting families.",
      icon: Users,
    },
    {
      title: "Community Care & Counseling",
      text: "Compassionate engagement and faith-based counseling rooted in dignity and Christian values.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="bg-stone-beige py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visions.map((item, index) => (
            <VisionCard 
              key={index}
              title={item.title}
              text={item.text}
              icon={item.icon}
              index={index} // Passed for staggered animation
            />
          ))}
        </div>
      </div>
    </section>
  );
}