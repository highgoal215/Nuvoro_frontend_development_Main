"use client";
import { OrganizationsList } from "@/components/talent-component/organization/organization";
import { JobsComponent } from "@/components/talent-component/organization/jobs";
import { FeaturedTalents } from "@/components/talent-component/organization/talents";

import { Button } from "@heroui/react";
import Image from "next/image";
import { JobsData } from "../data/icon/jobsItems";
import { organizationData } from "../data/icon/organizationitems";
import { talentsdata } from "../data/icon/talents";

export default function Home() {
  return (
    <div className="flex w-full flex-col px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-10">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-start items-start gap-6 sm:gap-8 lg:gap-10">
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
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 lg:pt-[32px]">
            <div className="flex w-full sm:w-1/2">
              <Button
                color="secondary"
                className="w-full text-base sm:text-lg lg:text-[20px] p-2"
              >
                For Organizations
              </Button>
            </div>
            <div className="flex w-full sm:w-1/2">
              <Button
                color="default"
                className="w-full text-base sm:text-lg lg:text-[20px]"
              >
                For Talents
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 w-full lg:w-auto">
          <Image
            src="/Home.svg"
            alt="HomeImage"
            width={0}
            height={0}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col px-8 lg:flex-row justify-between items-stretch gap-6 sm:gap-8 pt-4 sm:pt-6 lg:pt-8">
        {/* Organization Card */}
        <div className="flex flex-1 flex-col items-start justify-start gap-4 transform transition duration-300 hover:scale-105 shadow-md border-2 border-gray-200 rounded-md p-4">
          <div className="flex text-xl sm:text-2xl font-bold">Organization</div>
          <div className="flex flex-col gap-4">
            {organizationData.map((org, index) => (
              <OrganizationsList
                key={index}
                icon={org.icon}
                title={org.title}
                description={org.description}
              />
            ))}
          </div>
          <div className="flex w-full">
            <Button color="default" className="w-full">
              Post an Update
            </Button>
          </div>
        </div>

        {/* Jobs Card */}
        <div className="flex flex-1 flex-col items-start justify-start gap-4 transform transition duration-300 hover:scale-105 shadow-md border-2 border-gray-200 rounded-md p-4">
          <div className="flex text-xl sm:text-2xl font-bold">Jobs</div>
          <div className="flex flex-col gap-4">
            {JobsData.map((job, index) => (
              <JobsComponent
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
            <Button color="default" className="w-full">
              View all Jobs
            </Button>
          </div>
        </div>

        {/* Talents Card */}
        <div className="flex flex-1 flex-col gap-4 justify-start items-start transform transition duration-300 hover:scale-105 shadow-md border-2 border-gray-200 rounded-md p-4">
          <div className="flex text-xl sm:text-2xl font-bold">Talents</div>
          <div className="flex flex-col gap-4">
            {talentsdata.map((talent, index) => (
              <FeaturedTalents
                key={index}
                icon={talent.icon}
                name={talent.name}
                role={talent.role}
              />
            ))}
          </div>
          <div className="flex w-full">
            <Button color="default" className="w-full">
              View all Talents
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
