"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Circle as InfoCircle, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const coreValues = [
    "Innovation",
    "Integrity",
    "Collaboration",
    "Excellence",
    "Growth",
  ];

  const handleValueClick = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleDeleteValue = (value: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the badge click event
    setSelectedValues((prev) => prev.filter((v) => v !== value));
  };

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - Replace with actual authentication
    if (selectedValues) {
      router.push("/register4");
      console.log("success!");
    } else {
      console.log("failed!");
    }
  };
  
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Step 3: Define Your Purpose & Mindset
            </h1>
            <p className="mt-2 text-gray-600">
              Help us understand your values, goals, and mindset to match you
              with the right opportunities.
            </p>
          </div>

          <div className="space-y-8">
            {/* Core Values */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-lg font-semibold">Core Values</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <InfoCircle className="h-4 w-4" />
                        <span>core values guide</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Select values that resonate with your professional
                        philosophy
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="flex flex-wrap gap-2">
                {coreValues.map((value) => (
                  <Badge
                    key={value}
                    variant={
                      selectedValues.includes(value) ? "default" : "outline"
                    }
                    className={`cursor-pointer text-sm py-1.5 px-3 relative group ${
                      selectedValues.includes(value) ? "hover:pr-6" : ""
                    }`}
                    onClick={() => handleValueClick(value)}
                  >
                    {value}
                    {selectedValues.includes(value) && (
                      <X
                        className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity h-3 w-3"
                        onClick={(e) => handleDeleteValue(value, e)}
                      />
                    )}
                  </Badge>
                ))}
              </div>
              <div>
                <Label className="block mb-2">Selected Core Values</Label>
                <div className="flex flex-wrap gap-2">
                  {selectedValues.map((value) => (
                    <Badge
                      key={value}
                      variant="default"
                      className="text-sm py-1.5 px-3 relative group hover:pr-6"
                    >
                      {value}
                      <X
                        className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity h-3 w-3"
                        onClick={(e) => handleDeleteValue(value, e)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
              <Label className="block mb-2">Other values(optional)</Label>
              <Input
                placeholder="Specify other values (optional)"
                className="mt-4"
              />
            </div>

            {/* Golden Circle */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Label className="text-lg font-semibold">Golden Circle</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <InfoCircle className="h-4 w-4" />
                        <span>Learn more</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Define your purpose, process, and actions</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="block mb-2 font-medium">
                    Why - Your Purpose
                  </Label>
                  <Textarea
                    placeholder="What's your purpose? Why do you do what you do?"
                    className="h-24"
                  />
                </div>

                <div>
                  <Label className="block mb-2 font-medium">
                    How - Your Process
                  </Label>
                  <Textarea
                    placeholder="How do you accomplish your purpose?"
                    className="h-24"
                  />
                </div>

                <div>
                  <Label className="block mb-2 font-medium">
                    What - Your Actions
                  </Label>
                  <Textarea
                    placeholder="What specific actions do you take?"
                    className="h-24"
                  />
                </div>
              </div>
            </div>

            {/* Industry Classification */}
            <div className="space-y-6">
              <Label className="text-lg font-semibold block">
                Industry Classification
              </Label>

              <div className="space-y-4">
                <div>
                  <Label className="block mb-2">Sector</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Technology" />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-0">
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="block mb-2">Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Software Development" />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-0">
                      <SelectItem value="software">
                        Software Development
                      </SelectItem>
                      <SelectItem value="hardware">Hardware</SelectItem>
                      <SelectItem value="consulting">IT Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="block mb-2">Sub-industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Web Development" />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-0">
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile Development</SelectItem>
                      <SelectItem value="cloud">Cloud Computing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            {/* Golden Circle */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Label className="text-lg font-semibold">
                  Mindset Assessment
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipContent>
                      <p>Define your purpose, process, and actions</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="block mb-2 font-medium">
                    Describe a major failure and what you learned from it
                  </Label>
                  <Textarea
                    placeholder="Share your experience and learnings..."
                    className="h-24"
                  />
                </div>

                <div>
                  <Label className="block mb-2 font-medium">
                    Share an experience where you took a significant risk
                  </Label>
                  <Textarea
                    placeholder="Describe the situation and outcome..."
                    className="h-24"
                  />
                </div>
                <div>
                  <Label className="block mb-2 font-medium">
                    What is your view on talent versus hard work?
                  </Label>
                  <Textarea
                    placeholder="Share your perspective..."
                    className="h-24"
                  />
                </div>
                <div>
                  <Label className="block mb-2 font-medium">
                    How do you typically respond to criticism?
                  </Label>
                  <Textarea
                    placeholder="Describe your approach..."
                    className="h-24"
                  />
                </div>
                <div>
                  <Label className="block mb-2 font-medium">
                    What skill have you trained for more than 2 years?
                  </Label>
                  <Textarea
                    placeholder="Describe your journey..."
                    className="h-24"
                  />
                </div>
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
