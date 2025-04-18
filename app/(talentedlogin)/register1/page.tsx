"use client";
import { useState, useRef, useMemo, useCallback } from "react";
import { Button, SelectItem, Chip } from "@nextui-org/react";
import { Camera } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { DatePicker } from "@heroui/react";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
// Lazy load heavy components
const DynamicSelect = dynamic(
  () => import("@nextui-org/react").then((mod) => mod.Select),
  {
    ssr: false,
    loading: () => (
      <div className="h-10 bg-gray-100 rounded-lg animate-pulse" />
    ),
  }
);

const DynamicInput = dynamic(
  () => import("@nextui-org/react").then((mod) => mod.Input),
  {
    ssr: false,
    loading: () => (
      <div className="h-10 bg-gray-100 rounded-lg animate-pulse" />
    ),
  }
);

export default function Register1Page() {
  const [interests, setInterests] = useState<string[]>([]);
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(parseDate("2024-04-04"));
  let formatter = useDateFormatter({ dateStyle: "full" });
  const [formData, setFormData] = useState({
    fullName: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    email: "",
    country: "",
    city: "",
    ethnicity: "",
    about: "",
  });
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - Replace with actual authentication
    if (formData) {
      router.push("/register2");
      console.log("success!");
    } else {
      console.log("failed!");
    }
  };
  // Memoize handlers
  const handleAvatarClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          alert("File size must be less than 2MB");
          event.target.value = "";
          return;
        }

        if (!file.type.startsWith("image/")) {
          alert("Please upload an image file");
          event.target.value = "";
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          setAvatar(e.target?.result as string);
        };
        reader.onerror = () => {
          alert("Error reading file");
          event.target.value = "";
        };
        reader.readAsDataURL(file);
      }
    },
    []
  );

  // Memoize form handlers
  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8">
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">
          Step 1: Tell Us About Yourself
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
          Start by sharing your basic details to build your profile.
        </p>

        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              onClick={handleAvatarClick}
              aria-label="Upload profile picture"
            >
              {avatar ? (
                <Image
                  src={avatar}
                  alt="Avatar"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              ) : (
                <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              )}
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Recommended size: 500x500px, max 2MB
            </p>
          </div>
        </div>

        <form className="space-y-4 sm:space-y-6">
          <div>
            <DynamicInput
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              classNames={{
                input: "text-sm sm:text-base",
                label: "text-sm sm:text-base",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex">
              <DatePicker
                className="w-full max-w-auto"
                label="Date of Birth"
                value={value}
                onChange={() => setValue}
                classNames={{
                  input: "text-sm sm:text-base",
                  label: "text-sm sm:text-base",
                }}
              />
            </div>
            <div className="flex ">
              <DynamicSelect
                label="Gender"
                placeholder="Select gender"
                selectedKeys={formData.gender ? [formData.gender] : []}
                onChange={(e) => handleInputChange("gender", e.target.value)}
                classNames={{
                  trigger: "text-sm sm:text-base",
                  label: "text-sm sm:text-base",
                }}
              >
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">
                  Prefer not to say
                </SelectItem>
              </DynamicSelect>
            </div>
          </div>

          <div>
            <DynamicInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              classNames={{
                input: "text-sm sm:text-base",
                label: "text-sm sm:text-base",
              }}
            />
          </div>

          <div>
            <DynamicSelect
              label="Country of Residence"
              placeholder="Select your country"
              selectedKeys={formData.country ? [formData.country] : []}
              onChange={(e) => handleInputChange("country", e.target.value)}
              classNames={{
                trigger: "text-sm sm:text-base",
                label: "text-sm sm:text-base",
              }}
            >
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </DynamicSelect>
          </div>

          <div>
            <DynamicInput
              label="City/Region"
              placeholder="Enter your city or region"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              classNames={{
                input: "text-sm sm:text-base",
                label: "text-sm sm:text-base",
              }}
            />
          </div>

          <div>
            <DynamicSelect
              label="Ethnicity"
              placeholder="Select ethnicity"
              selectedKeys={formData.ethnicity ? [formData.ethnicity] : []}
              onChange={(e) => handleInputChange("ethnicity", e.target.value)}
              classNames={{
                trigger: "text-sm sm:text-base",
                label: "text-sm sm:text-base",
              }}
            >
              <SelectItem value="asian">Asian</SelectItem>
              <SelectItem value="black">Black</SelectItem>
              <SelectItem value="hispanic">Hispanic</SelectItem>
              <SelectItem value="white">White</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="prefer-not-to-say">
                Prefer not to say
              </SelectItem>
            </DynamicSelect>
          </div>

          <div>
            <DynamicInput
              label="About You"
              placeholder="Write a short bio about yourself"
              className="h-24 sm:h-32"
              value={formData.about}
              onChange={(e) => handleInputChange("about", e.target.value)}
              classNames={{
                input: "text-sm sm:text-base",
                label: "text-sm sm:text-base",
              }}
            />
            <div className="text-right">
              <span className="text-xs sm:text-sm text-gray-500">
                {formData.about.length}/256
              </span>
            </div>
          </div>

          <div>
            <DynamicInput
              label="Interests"
              placeholder="Add interests (e.g. AI Marketing #Design)"
              className="mb-2"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value) {
                  e.preventDefault();
                  setInterests((prev) => [...prev, e.currentTarget.value]);
                  e.currentTarget.value = "";
                }
              }}
              classNames={{
                input: "text-sm sm:text-base",
                label: "text-sm sm:text-base",
              }}
            />
            <div className="flex gap-2 flex-wrap">
              {interests.map((interest) => (
                <Chip
                  key={interest}
                  variant="flat"
                  className="cursor-pointer text-sm sm:text-base"
                  onClose={() =>
                    setInterests((prev) => prev.filter((i) => i !== interest))
                  }
                >
                  {interest}
                </Chip>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button
              color="primary"
              onClick={handleSubmit}
              className="w-full sm:w-auto text-sm sm:text-base"
            >
              Next
              <span className="ml-2">→</span>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
