import { JobsData } from "@/app/data/icon/jobsItems";
import { Card, Badge, Button } from "@heroui/react";

export function JobsComponent() {
  return (
    <Card className="flex flex-col justify-between p-4 sm:p-6 gap-4">
      <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Latest Jobs</p>
      <div className="space-y-4 sm:space-y-6">
        {JobsData.map((job, index) => (
          <div
            key={index}
            className="pb-4 sm:pb-6 border-b last:border-0 last:pb-0"
          >
            <p className="text-base sm:text-lg font-semibold">{job.title}</p>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              {job.company} • {job.type} • {job.location}
            </p>
            <div className="flex flex-wrap gap-2 ">
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
        <Button className="w-full" variant="flat">
          View All Jobs
        </Button>
      </div>
    </Card>
  );
}
