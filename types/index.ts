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
  icon: "building" | "file";
  title: string;
  description: string;
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
  icon: string;
  name: string;
  role: string;
}
export interface OrgLandingComponentItems {
  icon: string;
  title: string;
  description: string;
  button: string;
}
