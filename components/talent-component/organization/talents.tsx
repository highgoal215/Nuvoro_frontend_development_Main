import { talentsdata } from "@/app/data/icon/talents";
import { Card, Avatar, Button } from "@heroui/react";

export function FeaturedTalents() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Featured Talents</h2>
      <div className="space-y-6">
        {talentsdata.map((talent, index) => (
          <div key={index} className="flex items-center gap-4">
            <Avatar
              src={talent.avatar}
              alt={talent.name}
              fallback={talent.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
              className="h-10 w-10"
            />
            <div>
              <h3 className="font-semibold">{talent.name}</h3>
              <p className="text-sm text-gray-600">{talent.role}</p>
            </div>
          </div>
        ))}
      </div>
      <Button variant="flat" className="w-full mt-6">
        View All Talents
      </Button>
    </Card>
  );
}
