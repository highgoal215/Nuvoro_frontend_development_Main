import { TalentedLandingData } from "@/app/data/icon/super-admin-panel/talentedlanding";
import { TalentedLandingDatas } from "@/types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

export default function Landing_Component({
  icon,
  title,
  description,
}: TalentedLandingDatas) {
  return (
    <Card className="flex justify-center items-center w-full sm:max-w-[300px] lg:max-w-[400px] p-4 sm:p-6">
      <div className="flex flex-col items-center gap-4 w-full">
        <CardHeader className="flex justify-center items-center p-0">
          <Image
            alt="heroui logo"
            height={32}
            width={32}
            className="sm:h-[40px] sm:w-[40px] "
            radius="sm"
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
