"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TalentRegister2() {
  const [employmentTypes, setEmploymentTypes] = useState({
    fullTime: false,
    partTime: false,
    freelance: false,
    internship: false,
  });

  const [locationType, setLocationType] = useState({
    onsite: false,
    remote: false,
    hybrid: false,
  });
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - Replace with actual authentication
    if (employmentTypes && locationType) {
      router.push("/register3");
      console.log("success!");
    } else {
      console.log("failed!");
    }
  };
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Step 2: Your Availability & Work Preferences
            </h1>
            <p className="mt-2 text-gray-600">
              Let us know your job-seeking status and preferred work types.
            </p>
          </div>

          <div className="space-y-8">
            {/* Job-seeking Status */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label htmlFor="status" className="text-lg font-semibold">
                  What&apos;s your current job-seeking status?
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Select your current employment situation</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your status" />
                </SelectTrigger>
                <SelectContent className="bg-white z-0">
                  <SelectItem value="actively">Actively looking</SelectItem>
                  <SelectItem value="passively">Passively looking</SelectItem>
                  <SelectItem value="employed">Currently employed</SelectItem>
                  <SelectItem value="not-looking">Not looking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Work Types */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                What type of work are you interested in?
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Select all that apply</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Employment Type */}
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-700">Employment type</h3>
                  <div className="space-y-3">
                    {Object.entries({
                      fullTime: "Full-time",
                      partTime: "Part-time",
                      freelance: "Freelance/ Contract",
                      internship: "Internship",
                    }).map(([key, label]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <Checkbox
                          id={key}
                          checked={
                            employmentTypes[key as keyof typeof employmentTypes]
                          }
                          onCheckedChange={(checked) =>
                            setEmploymentTypes((prev) => ({
                              ...prev,
                              [key]: checked,
                            }))
                          }
                        />
                        <Label htmlFor={key}>{label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Type */}
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-700">Location type</h3>
                  <div className="space-y-3">
                    {Object.entries({
                      onsite: "On-site",
                      remote: "Remote",
                      hybrid: "Hybrid",
                    }).map(([key, label]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <Checkbox
                          id={key}
                          checked={
                            locationType[key as keyof typeof locationType]
                          }
                          onCheckedChange={(checked) =>
                            setLocationType((prev) => ({
                              ...prev,
                              [key]: checked,
                            }))
                          }
                        />
                        <Label htmlFor={key}>{label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Work Style Preferences */}
            <div className="space-y-8">
              <h2 className="text-lg font-semibold">
                Rate each statement from 1 (Strongly Disagree) to 5 (Strongly
                Agree)
              </h2>

              {/* Independent Work vs. Collaboration */}
              <div className="space-y-4">
                <Label className="block font-medium">
                  Independent Work vs. Collaboration
                </Label>
                <p className="text-sm text-gray-600">
                  I prefer working independently rather than in a group.
                </p>
                <RadioGroup className="flex gap-4" defaultValue="3">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div
                      key={value}
                      className="flex flex-col items-center gap-2"
                    >
                      <RadioGroupItem
                        value={value.toString()}
                        id={`independent-${value}`}
                      />
                      <Label htmlFor={`independent-${value}`}>{value}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Structured vs. Flexible Environments */}
              <div className="space-y-4">
                <Label className="block font-medium">
                  Structured vs. Flexible Environments
                </Label>
                <p className="text-sm text-gray-600">
                  I work best in a structured environment with clear deadlines.
                </p>
                <RadioGroup className="flex gap-4" defaultValue="3">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div
                      key={value}
                      className="flex flex-col items-center gap-2"
                    >
                      <RadioGroupItem
                        value={value.toString()}
                        id={`structured-${value}`}
                      />
                      <Label htmlFor={`structured-${value}`}>{value}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end pt-4">
              <Button color="primary" onClick={handleSubmit}>
                Next
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
