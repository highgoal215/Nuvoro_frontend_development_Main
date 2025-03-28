
import { OrgLandingComponentItems } from "@/types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "@heroui/react";
import Image from "next/image";
export default function OrgLandingComponent({
  icon,
  title,
  description,
  button
}: OrgLandingComponentItems) {
  return (
    <Card className="flex justify-center items-center w-full sm:max-w-[300px] lg:max-w-[400px] p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col justify-between items-center gap-4 w-full">
        <CardHeader className="flex justify-center items-center p-0">
          <Image
            alt="icon"
            height={0}
            width={0}
            className=" w-full"
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
        <Button color="success">{button}</Button>
      </div>
    </Card>
  );
}
