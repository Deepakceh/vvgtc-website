import Marquee from "react-fast-marquee";

const stats = [
  { label: "Youth Trained", value: "5000+" },
  { label: "Job Placements", value: "3200+" },
  { label: "Govt. Programs", value: "12+" },
  { label: "Courses", value: "50+" },
  { label: "States Covered", value: "18+" },
  { label: "Certified Trainers", value: "35+" },
  { label: "Placement Rate", value: "80%" },
];

export default function StatsMarquee() {
  // Duplicate the list to make it loop seamlessly
  const loopStats = [...stats, ...stats];

  return (
    <div className="bg-sky-50 py-6 border-y border-sky-300">
      <Marquee pauseOnHover={true} speed={35} gradient={true}>
        {loopStats.map((stat, idx) => (
          <div key={idx} className="min-w-[250px] mx-6 bg-white  rounded-lg p-8 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-sky-600">{stat.value}</h2>
            <p className="text-sm font-medium text-gray-700 mt-1">{stat.label}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
