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
      <div className="
          flex md:grid md:grid-cols-3 
          gap-6 
          overflow-x-auto md:overflow-visible 
          snap-x snap-mandatory 
          pb-12 px-6 
          -mx-6 md:mx-0
          scrollbar-hide
      ">
        {/* Map your VisionCards here */}
        {visions.map((v, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-0 snap-center">
                <VisionCard {...v} index={i} />
            </div>
        ))}
      </div>
    </section>
  );
}