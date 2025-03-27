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
