import { useState } from "react";
import { Button, Input, Chip } from "@heroui/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Camera } from "lucide-react";

export default function Register1Page() {
  const [interests, setInterests] = useState<string[]>([]);

  return (
    <div className="flex justify-center items-center px-40">
      <main className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-2xl font-semibold mb-2">
            Step 1: Tell Us About Yourself
          </h1>
          <p className="text-gray-500 mb-8">
            Start by sharing your basic details to build your profile.
          </p>

          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
              <div className="absolute bottom-0 right-0 bg-black rounded-full p-2 cursor-pointer">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                Recommended size: 500x500px, max 2MB
              </p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <Input label="Full Name" placeholder="Enter your full name" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Select label="Day" placeholder="Day">
                  {Array.from({ length: 31 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div>
                <Select label="Month" placeholder="Month">
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month) => (
                    <SelectItem key={month} value={month.toLowerCase()}>
                      {month}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div>
                <Select label="Year" placeholder="Year">
                  {Array.from({ length: 100 }, (_, i) => (
                    <SelectItem
                      key={i}
                      value={String(new Date().getFullYear() - i)}
                    >
                      {new Date().getFullYear() - i}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <Select label="Gender" placeholder="Select gender">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">
                  Prefer not to say
                </SelectItem>
              </Select>
            </div>

            <div>
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Select
                label="Country of Residence"
                placeholder="Select your country"
              >
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                {/* Add more countries as needed */}
              </Select>
            </div>

            <div>
              <Input
                label="City/Region"
                placeholder="Enter your city or region"
              />
            </div>

            <div>
              <Select label="Ethnicity" placeholder="Select ethnicity">
                <SelectItem value="asian">Asian</SelectItem>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="hispanic">Hispanic</SelectItem>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">
                  Prefer not to say
                </SelectItem>
              </Select>
            </div>

            <div>
              <Input
                label="About You"
                placeholder="Write a short bio about yourself"
                className="h-32"
              />
              <div className="text-right">
                <span className="text-sm text-gray-500">0/256</span>
              </div>
            </div>

            <div>
              <Input
                label="Interests"
                placeholder="Add interests (e.g. AI Marketing #Design)"
                className="mb-2"
              />
              <div className="flex gap-2 flex-wrap">
                {interests.map((interest) => (
                  <Chip
                    key={interest}
                    variant="flat"
                    className="cursor-pointer"
                  >
                    {interest}
                  </Chip>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button color="primary">
                Next
                <span className="ml-2">→</span>
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
