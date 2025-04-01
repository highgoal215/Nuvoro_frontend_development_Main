"use client";
import { TalentedLandingData } from "@/app/data/icon/super-admin-panel/talentedlanding";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo } from "react";
// Dynamically import heavy components
const DynamicFooter = dynamic(
  () =>
    import("@/components/talent-component/footer").then(
      (mod) => mod.Talented_Footer
    ),
  {
    ssr: false,
    loading: () => <div className="animate-pulse h-20 bg-gray-100" />,
  }
);

const DynamicLandingComponent = dynamic(
  () => import("@/components/talent-component/Landing_component"),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse h-40 bg-gray-100 rounded-lg" />
    ),
  }
);

const DynamicTrendSkills = dynamic(
  () => import("@/components/talent-component/Trendskills"),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse h-20 bg-gray-100 rounded-lg" />
    ),
  }
);

const DynamicButton = dynamic(
  () => import("@heroui/react").then((mod) => mod.Button),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse h-10 w-40 bg-gray-100 rounded-lg" />
    ),
  }
);

const DynamicProgress = dynamic(
  () => import("@heroui/react").then((mod) => mod.Progress),
  {
    ssr: false,
    loading: () => <div className="animate-pulse h-4 bg-gray-100 rounded-lg" />,
  }
);

export default function TalentedLandingPage() {
  // Memoize static data
  const landingData = useMemo(() => TalentedLandingData, []);

  // Memoize progress data
  const progressData = useMemo(
    () => ({
      classNames: {
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      },
      radius: "sm" as const,
      showValueLabel: true,
      size: "sm" as const,
      value: 65,
    }),
    []
  );

  // Memoize trend skills data
  const trendSkillsData = useMemo(
    () => [
      { title: "Data Analysis", percentage: "+15%" },
      { title: "AL/ML", percentage: "+28%" },
      { title: "Project Management", percentage: "+10%" },
      { title: "Digital Marketing", percentage: "+18%" },
    ],
    []
  );

  return (
    <div className="w-full  min-h-screen bg-white">
      <div className="flex px-8 flex-col justify-center items-center pt-4 sm:pt-8  sm:px-8">
        <div className="flex font-Roboto text-[14px] sm:text-[16px] text-center">
          <p>
            Build a Meaningful Career on Our AI-Powered, Purpose-Driven Growth
            Platform
          </p>
        </div>
        <div className="flex font-Roboto text-[32px] sm:text-[40px] lg:text-[48px] pt-4 sm:pt-6 text-center">
          <p>Your Career is More Than a Resume</p>
        </div>
        <div className="flex font-Roboto text-[16px] sm:text-[18px] lg:text-[20px] pt-4 sm:pt-8 text-center px-4">
          <p>
            Prioritize purpose and skill-building while we match you with roles
            aligned with your vision
          </p>
        </div>
        <div className="flex pt-4 sm:pt-8">
          <DynamicButton color="secondary" className="text-sm sm:text-base">
            Register to Unlock Tailored Opportunities
          </DynamicButton>
        </div>
        <div className="flex w-full pt-8 sm:pt-14">
          <Image
            src="/IMG.svg"
            alt="image"
            width={1200}
            height={600}
            priority
            loading="eager"
            className="w-full h-auto"
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
          />
        </div>
      </div>
      <div className="flex  flex-col sm:flex-row gap-4 sm:gap-8 justify-between items-center pt-12 sm:pt-24 px-4 sm:px-8 ">
        {landingData.map((item, index) => (
          <DynamicLandingComponent
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="flex flex-col  lg:flex-row gap-8 lg:gap-12 justify-between items-center pt-12 sm:pt-24 pb-12 sm:pb-[192px] bg-[#F9FAFB]  sm:px-8">
        <div className="flex flex-1 flex-col gap-4 w-full lg:w-auto px-8">
          <div className="text-[24px] sm:text-[30px]">Dashboard Preview</div>
          <div className="flex flex-col gap-4 bg-white px-4 rounded-lg transform transition duration-300 hover:scale-105 shadow-md h-full py-10">
            <div>Your Match level</div>
            <div className="flex flex-col w-full transfo">
              <DynamicProgress {...progressData} label="Lose weight" />
              <DynamicProgress {...progressData} label="Lose weight" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col w-full lg:w-auto">
          <div className="text-[18px] sm:text-[20px]">Trending Skills</div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex bg-black/5 flex-1 flex-col gap-4 w-full sm:w-auto p-4 rounded-lg">
              {trendSkillsData.slice(0, 2).map((skill, index) => (
                <div
                  key={index}
                  className="transform transition duration-300 hover:scale-105 shadow-md h-full"
                >
                  <DynamicTrendSkills
                    title={skill.title}
                    percentage={skill.percentage}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-1 flex-col gap-4 w-full sm:w-auto p-4 rounded-lg">
              {trendSkillsData.slice(2).map((skill, index) => (
                <div
                  key={index}
                  className="transform transition duration-300 hover:scale-105 shadow-md h-full"
                >
                  <DynamicTrendSkills
                    title={skill.title}
                    percentage={skill.percentage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full bg-black justify-between items-center px-4 sm:px-8">
        <p className="text-white pt-8 sm:pt-12 pb-4 sm:pb-6 text-center text-sm sm:text-base">
          No cost, no barriers—just alignment and growth powered by AI. Unlock
          tailored opportunities today.
        </p>
        <div className="flex pb-4 sm:pb-6">
          <DynamicButton color="secondary" className="text-sm sm:text-base">
            Register to Unlock Tailored Opportunities
          </DynamicButton>
        </div>
      </div>
    </div>
  );
}
