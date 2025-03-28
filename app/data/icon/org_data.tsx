import { OrgLandingComponentItems } from "@/types";
import project from "@/assets/svg/org/project.svg";
import course from "@/assets/svg/org/course.svg";
import workshop from "@/assets/svg/org/workshop.svg";
export const OrgLandingComponentData: OrgLandingComponentItems[] = [
  {
    icon: project.src,
    title: "Projects",
    description:
      "Join innovative projects and collaborate with talented professionals.",
    button: "Explore Projects",
  },
  {
    icon: course.src,
    title: "Courses",
    description:
      "Access curated learning paths to enhance your skills and knowledge.",
    button: "Browse Courses",
  },
  {
    icon: workshop.src,
    title: "Workshops",
    description:
      "Participate in interactive workshops and expand your network.",
    button: "Join Workshops",
  },
];
