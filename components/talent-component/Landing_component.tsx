import { TalentedLandingData } from "@/app/data/icon/super-admin-panel/talentedlanding";
import { TalentedLandingDatas } from "@/types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@heroui/react";
import Image from "next/image";

export default function Landing_Component({
  icon,
  title,
  description,
}: TalentedLandingDatas) {
  return (
    <Card className="flex justify-center items-center w-full sm:max-w-[300px] lg:max-w-[400px] p-4 sm:p-6 hover:shadow-lg transform transition duration-300 hover:scale-105 shadow-md border-2 border-gray-200 rounded-md p-4">
      <div className="flex flex-col items-start gap-4 w-full ">
        <CardHeader className="flex justify-center items-center p-0">
          <Image
            alt="icon"
            height={32}
            width={32}
            className="sm:h-[40px] sm:w-[40px]"
            src={icon}
          />
        </CardHeader>
        <CardBody className="flex justify-center items-center p-0">
          <p className="text-center text-sm sm:text-base font-medium">
            {title}
          </p>
        </CardBody>
        <CardFooter className="flex justify-center items-center p-0">
          <p className="text-center text-xs sm:text-sm text-gray-600">
            {description}
          </p>
        </CardFooter>
      </div>
    </Card>
  );
}
