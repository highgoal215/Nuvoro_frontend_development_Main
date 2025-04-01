"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo } from "react";
import { JobsData } from "../data/icon/jobsItems";
import { organizationData } from "../data/icon/organizationitems";
import { talentsdata } from "../data/icon/talents";

// Dynamically import heavy components
const DynamicOrganizationsList = dynamic(
  () =>
    import("@/components/talent-component/organization/organization").then(
      (mod) => mod.OrganizationsList
    ),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse h-20 bg-gray-100 rounded-lg" />
    ),
  }
);

const DynamicJobsComponent = dynamic(
  () =>
    import("@/components/talent-component/organization/jobs").then(
      (mod) => mod.JobsComponent
    ),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse h-20 bg-gray-100 rounded-lg" />
    ),
  }
);

const DynamicFeaturedTalents = dynamic(
  () =>
    import("@/components/talent-component/organization/talents").then(
      (mod) => mod.FeaturedTalents
    ),
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
      <div className="animate-pulse h-10 w-full bg-gray-100 rounded-lg" />
    ),
  }
);

export default function Home() {
  // Memoize static data
  const memoizedOrgData = useMemo(() => organizationData, []);
  const memoizedJobsData = useMemo(() => JobsData, []);
  const memoizedTalentsData = useMemo(() => talentsdata, []);

  return (
    <div className="flex w-full flex-col px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-10">
      {/* Hero Section */}
      <div className="flex px-8 flex-col lg:flex-row justify-start items-start gap-6 sm:gap-8 lg:gap-10">
        <div className="flex flex-1 flex-col gap-6 sm:gap-8 lg:gap-10">
          <div className="flex pt-8 sm:pt-12 lg:pt-[112px]">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold">
              Empower Your Workforce with Nuvoro
            </p>
          </div>
          <div className="flex">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[30px]">
              AI-driven tools for organizations and talents to connect, grow,
              and succeed. Smarter, Faster, Better.
            </p>
          </div>
          <div className="flex  flex-col sm:flex-row justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 lg:pt-[32px]">
            <div className="flex w-full sm:w-1/2">
              <DynamicButton
                color="secondary"
                className="w-full text-base sm:text-lg lg:text-[20px] p-2"
              >
                For Organizations
              </DynamicButton>
            </div>
            <div className="flex w-full sm:w-1/2">
              <DynamicButton
                color="default"
                className="w-full text-base sm:text-lg lg:text-[20px]"
              >
                For Talents
              </DynamicButton>
            </div>
          </div>
        </div>
        <div className="flex flex-1 w-full lg:w-auto">
          <Image
            src="/Home.svg"
            alt="HomeImage"
            width={800}
            height={600}
            priority
            loading="eager"
            className="w-full h-auto"
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg=="
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col bg-black/5 p-8 lg:flex-row justify-between items-stretch gap-6 sm:gap-8 pt-4 sm:pt-6 lg:pt-8">
        {/* Organization Card */}
        <div className="flex bg-white flex-1 flex-col items-start justify-start gap-4 transform transition duration-300 hover:scale-105 shadow-md border-2 border-gray-200 rounded-md p-4">
          <div className="flex text-xl sm:text-2xl font-bold">Organization</div>
          <div className="flex  flex-col gap-4">
            {memoizedOrgData.map((org, index) => (
              <DynamicOrganizationsList
                key={index}
                icon={org.icon}
                title={org.title}
                description={org.description}
              />
            ))}
          </div>
          <div className="flex w-full">
            <DynamicButton color="default" className="w-full">
              Post an Update
            </DynamicButton>
          </div>
        </div>

        {/* Jobs Card */}
        <div className="flex bg-white flex-1 flex-col items-start justify-start gap-4 transform transition duration-300 hover:scale-105 shadow-md border-2 border-gray-200 rounded-md p-4">
          <div className="flex text-xl sm:text-2xl font-bold">Jobs</div>
          <div className="flex flex-col gap-4">
            {memoizedJobsData.map((job, index) => (
              <DynamicJobsComponent
                key={index}
                title={job.title}
                company={job.company}
                type={job.type}
                location={job.location}
                skills={job.skills}
              />
            ))}
          </div>
          <div className="flex w-full">
            <DynamicButton color="default" className="w-full">
              View all Jobs
            </DynamicButton>
          </div>
        </div>

        {/* Talents Card */}
        <div className="flex bg-white flex-1 flex-col gap-4 justify-start items-start transform transition duration-300 hover:scale-105 shadow-md border-2 border-gray-200 rounded-md p-4">
          <div className="flex text-xl sm:text-2xl font-bold">Talents</div>
          <div className="flex flex-col gap-4">
            {memoizedTalentsData.map((talent, index) => (
              <DynamicFeaturedTalents
                key={index}
                icon={talent.icon}
                name={talent.name}
                role={talent.role}
              />
            ))}
          </div>
          <div className="flex w-full">
            <DynamicButton color="default" className="w-full">
              View all Talents
            </DynamicButton>
          </div>
        </div>
      </div>
    </div>
  );
}
