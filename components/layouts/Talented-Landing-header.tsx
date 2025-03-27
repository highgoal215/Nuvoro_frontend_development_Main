"use client";

import { usePathname } from "next/navigation";
import { Image } from "@heroui/image";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import Logo from "@/assets/svg/logo.svg";
import { Button } from "@heroui/react";
export default function TalentedLandingHeader() {
  const pathname = usePathname();
  let tabs = [
    {
      id: "Talents",
      label: "Talents",
    },
    {
      id: "Organizations",
      label: "Organizations",
    },
    {
      id: "Jobs",
      label: "Jobs",
    },
    {
      id: "Projects",
      label: "Projects",
      
    },
    {
      id: "Learnings",
      label: "Learnings",
      
    },
    {
      id: "NewsFeeds",
      label: "NewsFeeds",
    },
  ];
  return (
    <div className="flex flex-row flex-1 items-center  pr-8 pl-8">
      <div className="py-4">
        <Image src={Logo.src} className="w-[223px] h-8" alt="image" />
      </div>
      <div className="flex flex-1  justify-around items-center pl-6">
        <Tabs
          aria-label="Dynamic tabs"
          items={tabs}
          variant="underlined"
          size="lg"
        >
          {(item) => <Tab key={item.id} title={item.label}></Tab>}
        </Tabs>
      </div>
      <div className="flex flex-1 gap-4 justify-end items-center">
        <Button color="primary" variant="shadow">
          Sign In
        </Button>
      </div>
    </div>
  );
}
