"use client";
import { Button } from "@heroui/react";
import { TalentedLandingData } from "@/app/data/icon/super-admin-panel/talentedlanding";
import Landing_Component from "@/components/talent-component/Landing_component";
import { Talented_Footer } from "@/components/talent-component/footer";
import OrgLandingComponent from "@/components/talent-component/organization/landing-component";
import { OrgLandingComponentData } from "@/app/data/icon/org_data";

export default function OrganizationLandingPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col gap-6 w-full bg-gradient-to-r from-[#49a8df] via-[#000000] to-[#1E40AF] justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-bold leading-tight mb-4 sm:mb-6">
            AI-Powered, Holistic Human Resources Management
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-[30px] opacity-90">
            Recuiting and ALigning Talents for Sustainable Growth and Retenion
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button color="primary" variant="shadow" className="w-full sm:w-48">
            Join the Beta
          </Button>
          <Button color="primary" variant="shadow" className="w-full sm:w-48">
            Learn More
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <div className="bg-[#F9FAFB] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Browse Opportunities
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Discover collaboration opportunities that match your purpose and
              skills
            </p>
          </div>
        </div>
      </div>

      {/* Organization Components Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Footer Section */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
          <Talented_Footer />
        </div>
      </div>
    </div>
  );
}
