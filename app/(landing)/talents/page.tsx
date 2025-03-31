"use client";
import { TalentedLandingData } from "@/app/data/icon/super-admin-panel/talentedlanding";
import { Talented_Footer } from "@/components/talent-component/footer";
import Landing_Component from "@/components/talent-component/Landing_component";
import TrendskillsComponent from "@/components/talent-component/Trendskills";
import { Button, Progress } from "@heroui/react";
import Image from "next/image";

export default function TalentedLandingPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex flex-col justify-center items-center pt-4 sm:pt-8 px-4 sm:px-8">
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
          <Button color="secondary" className="text-sm sm:text-base">
            Register to Unlock Tailored Opportunities
          </Button>
        </div>
        <div className="flex w-full pt-8 sm:pt-14">
          <Image
            src="/IMG.svg"
            alt="image"
            width={0}
            height={0}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between items-center pt-12 sm:pt-24 px-4 sm:px-8">
        {TalentedLandingData.map((item, index) => {
          return (
            <Landing_Component
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
      <div className="flex flex-col  lg:flex-row gap-8 lg:gap-12 justify-between items-center pt-12 sm:pt-24 pb-12 sm:pb-[192px] bg-[#F9FAFB]  sm:px-8">
        <div className="flex flex-1 flex-col gap-4 w-full lg:w-auto px-8">
          <div className="text-[24px] sm:text-[30px]">Dashboard Preview</div>
          <div className="flex flex-col gap-4 bg-white p-4 rounded-lg">
            <div>Your Match level</div>
            <div className="flex flex-col w-full">
              <Progress
                classNames={{
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="Lose weight"
                radius="sm"
                showValueLabel={true}
                size="sm"
                value={65}
              />
              <Progress
                classNames={{
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="Lose weight"
                radius="sm"
                showValueLabel={true}
                size="sm"
                value={65}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col w-full lg:w-auto">
          <div className="text-[18px] sm:text-[20px]">Trending Skills</div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-1 flex-col gap-4 w-full sm:w-auto p-4 rounded-lg">
              <TrendskillsComponent title="Data Analysis" percentage="+15%" />
              <TrendskillsComponent title="AL/ML" percentage="+28%" />
            </div>
            <div className="flex flex-1 flex-col gap-4 w-full sm:w-auto p-4 rounded-lg">
              <TrendskillsComponent
                title="Project Management"
                percentage="+10%"
              />
              <TrendskillsComponent
                title="Digital Marketing"
                percentage="+18%"
              />
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
          <Button color="secondary" className="text-sm sm:text-base">
            Register to Unlock Tailored Opportunities
          </Button>
        </div>
      </div>
    </div>
  );
}
