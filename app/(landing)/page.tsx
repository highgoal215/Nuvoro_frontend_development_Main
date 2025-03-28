"use client";
import { TalentedLandingData } from "@/app/data/icon/super-admin-panel/talentedlanding";
import { Talented_Footer } from "@/components/talent-component/footer";
import Landing_Component from "@/components/talent-component/Landing_component";
import { OrganizationsList } from "@/components/talent-component/organization/organization";
import { JobsComponent } from "@/components/talent-component/organization/jobs";
import { FeaturedTalents } from "@/components/talent-component/organization/talents";
import TrendskillsComponent from "@/components/talent-component/Trendskills";
import { Button, Progress } from "@heroui/react";
import Image from "next/image";
import { organizationData } from "../data/icon/organizationitems";
import { talentsdata } from "../data/icon/talents";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.svg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col justify-center items-center pt-4 sm:pt-8 px-4 sm:px-8">
          <div className="flex flex-col md:flex-row font-Roboto text-[14px] sm:text-[16px] text-center w-full">
            <div className="flex flex-1 justify-start items-start flex-col gap-4 w-full md:w-1/2">
              <div className="flex pt-8 md:pt-28">
                <p className="text-[32px] sm:text-[40px] md:text-[60px] font-bold leading-tight">
                  Empower Your Workforce with Nuvoro
                </p>
              </div>
              <div className="flex">
                <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600">
                  AI-driven tools for organizations and talents to connect,
                  grow, and succeed. Smarter, Faster, Better.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  color="primary"
                  variant="bordered"
                  className="w-full sm:w-auto"
                >
                  For Organizations
                </Button>
                <Button
                  color="primary"
                  variant="light"
                  className="w-full sm:w-auto text-sm sm:text-base"
                >
                  For Talents
                </Button>
              </div>
            </div>
            <div className="flex flex-1 w-full md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/Home.svg"
                alt="Home"
                width={0}
                height={0}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between items-center pt-8 sm:pt-16 md:pt-24 px-4 sm:px-8">
          <div className="w-full sm:w-1/3">
            <OrganizationsList />
          </div>
          <div className="w-full sm:w-1/3">
            <JobsComponent />
          </div>
          <div className="w-full sm:w-1/3">
            <FeaturedTalents />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full bg-white justify-between items-center px-4 sm:px-8 py-8">
          <Talented_Footer />
        </div>
      </div>
    </div>
  );
}
