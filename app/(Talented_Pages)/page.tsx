"use client";

import TalentedLandingHeader from "@/components/layouts/Talented-Landing-header";
import Landing_Component from "@/components/Talent_component/Landing_component";
import { Tab } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TalentedLandingData } from "../data/icon/super-admin-panel/talentedlanding";
import { table } from "console";
import Talented from "@/components/layouts/Talented-Landing-header";
import Talented_Pages from "./layout";
import Talentedlanging_pages from "./talented_landing/talented_landing";

export default function SuperAdminPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen  bg-white">
      <TalentedLandingHeader/>
      <Talentedlanging_pages />
      
    </div>
  );
}
