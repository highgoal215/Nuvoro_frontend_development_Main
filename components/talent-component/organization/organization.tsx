import { organizationData } from "@/app/data/icon/organizationitems";
import { Building2, FileText } from "lucide-react";
import { Button, Card } from "@heroui/react";
export function OrganizationsList() {
  return (
    <Card className="flex flex-col justify-between p-4 sm:p-6 gap-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Organizations
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {organizationData.map((org, index) => (
          <div
            key={index}
            className="flex items-center gap-4 pb-4 sm:pb-6 border-b last:border-0 last:pb-0"
          >
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-100 flex items-center justify-center">
              {org.icon === "building" ? (
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              ) : (
                <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              )}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">{org.name}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {org.activity}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="flat"
        className="w-full mt-4 sm:mt-6 text-sm sm:text-base"
      >
        Post an Update
      </Button>
    </Card>
  );
}
