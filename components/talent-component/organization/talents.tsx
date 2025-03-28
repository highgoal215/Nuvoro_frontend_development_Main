import { talentsdata } from "@/app/data/icon/talents";
import { Card, Avatar, Button } from "@heroui/react";

export function FeaturedTalents() {
  return (
    <Card className="flex flex-col justify-between p-4 sm:p-6 gap-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Featured Talents
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {talentsdata.map((talent, index) => (
          <div
            key={index}
            className="flex items-center gap-4 pb-4 sm:pb-6 border-b last:border-0 last:pb-0"
          >
            <Avatar
              src={talent.avatar}
              alt={talent.name}
              fallback={talent.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
            <div>
              <h3 className="text-base sm:text-lg font-semibold">
                {talent.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {talent.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="flat"
        className="w-full mt-4 sm:mt-6 text-sm sm:text-base"
      >
        View All Talents
      </Button>
    </Card>
  );
}
