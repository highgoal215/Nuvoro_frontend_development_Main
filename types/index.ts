import path from "node:path";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface AdminPanelIcon {
  label: string;
  pageTitle: string;
  icon: string;
  path: string;
}
export interface TalentedLandingDatas{
  icon: string;
  title: string;
  description: string;
}
export interface TrendingSkillsItems{
  title: string;
  percentage: string;
}
export interface OrganizationComponentItems {
  name: string;
  activity: string;
  icon: "building" | "file";
}
export interface JobsItems {
  title: string;
  company: string;
  type: string;
  location: string;
  skills: Array<{
    name: string;
    color: string;
  }>;
}
export interface TalentsItems {
  name: string;
  role: string;
  avatar: string;
}
export interface OrgLandingComponentItems {
  icon: string;
  title: string;
  description: string;
  button: string;
}
