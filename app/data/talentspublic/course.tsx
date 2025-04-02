import { Course } from "@/types";
import ReactImage from "@/assets/svg/talents/React.svg";
import DesignImage from "@/assets/svg/talents/Design.svg";
import CloudImage from "@/assets/svg/talents/clude.svg";
import MachineImage from "@/assets/svg/talents/machine.svg";
export const courses: Course[] = [
  {
    title: "Advanced React Patterns",
    provider: "Frontend Masters",
    duration: "12 hours",
    image: ReactImage.src,
  },
  {
    title: "UI/UX Design Fundamentals",
    provider: "Design Academy",
    duration: "20 hours",
    image:DesignImage.src,
  },
  {
    title: "Cloud Architecture",
    provider: "Cloud Guru",
    duration: "15 hours",
    image:CloudImage.src,
     
  },
  {
    title: "Machine Learning Basics",
    provider: "AI Academy",
    duration: "25 hours",
    image: MachineImage.src,
    
  },
];
