"use client";
import Landing_Component from "@/components/talent-component/Landing_component";
import OrgLandingComponent from "@/components/talent-component/organization/landing-component";
import { TalentedLandingData } from "@/app/data/icon/super-admin-panel/talentedlanding";
import { OrgLandingComponentData } from "@/app/data/icon/org_data";
import { Button } from "@heroui/react";

export default function OrganizationLandingPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col gap-6 w-full bg-gradient-to-r from-[#49a8df] via-[#000000] to-[#1E40AF] justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-bold leading-tight mb-3 sm:mb-4 md:mb-6">
            AI-Powered, Holistic Human Resources Management
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-[30px] opacity-90">
            Recuiting and ALigning Talents for Sustainable Growth and Retenion
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Button
            color="primary"
            variant="shadow"
            className="w-full sm:w-48 text-sm sm:text-base"
          >
            Join the Beta
          </Button>
          <Button
            color="primary"
            variant="shadow"
            className="w-full sm:w-48 text-sm sm:text-base"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {TalentedLandingData.map((item, index) => (
            <Landing_Component
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* Opportunities Section */}
      <div className="bg-[#F9FAFB] py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Browse Opportunities
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Discover collaboration opportunities that match your purpose and
              skills
            </p>
          </div>
        </div>
      </div>

      {/* Organization Components Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {OrgLandingComponentData.map((item, index) => (
            <OrgLandingComponent
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              button={item.button}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
