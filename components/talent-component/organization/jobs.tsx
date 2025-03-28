import { JobsData } from "@/app/data/icon/jobsItems";
import { Card, Badge, Button } from "@heroui/react";

export function JobsComponent() {
  return (
    <Card className="flex flex-col justify-between p-4 sm:p-6 gap-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Latest Jobs
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {JobsData.map((job, index) => (
          <div
            key={index}
            className="pb-4 sm:pb-6 border-b last:border-0 last:pb-0"
          >
            <h3 className="text-base sm:text-lg font-semibold">{job.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              {job.company} • {job.type} • {job.location}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {job.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="flat"
                  className={`${skill.color} border-0 text-xs sm:text-sm`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button
        className="w-full mt-4 sm:mt-6 text-sm sm:text-base"
        variant="flat"
      >
        View All Jobs
      </Button>
    </Card>
  );
}
