"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Plus, Briefcase, Trophy, Upload, Router } from "lucide-react";
import { useState } from "react";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Certification, JobExperience, Project } from "@/types";
import SaveImage from "@/assets/svg/org/save.svg";

export default function TalentRegister4() {
  const [skills, setSkills] = useState<string[]>(["JavaScript", "React"]);
  const [newSkill, setNewSkill] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const router = useRouter();
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      title: "",
      institution: "",
      year: "",
      status: "",
      description: "",
    },
  ]);

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleCertificationChange = (
    index: number,
    field: keyof Certification,
    value: string
  ) => {
    const newCertifications = [...certifications];
    newCertifications[index] = {
      ...newCertifications[index],
      [field]: value,
    };
    setCertifications(newCertifications);
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      {
        title: "",
        institution: "",
        year: "",
        status: "",
        description: "",
      },
    ]);
  };

  const removeCertification = (index: number) => {
    const newCertifications = certifications.filter((_, i) => i !== index);
    setCertifications(newCertifications);
  };
  const [experiences, setExperiences] = useState<JobExperience[]>([
    {
      jobTitle: "",
      companyName: "",
      location: "",
      jobType: "",
      salary: "",
      isCurrentJob: false,
      startDate: { year: "", month: "" },
      endDate: { year: "", month: "" },
      description: "",
      enjoyed: [],
      challenges: [],
    },
  ]);

  const [projects, setProjects] = useState<Project[]>([
    {
      title: "",
      type: "",
      status: "",
      budgetRange: "",
      description: "",
    },
  ]);

  const months = [
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
  ];

  const years = Array.from({ length: 50 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );

  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
    "Remote",
  ];

  const projectTypes = [
    "Individual",
    "Collaboration",
    "Team Lead",
    "Consulting",
    "Research",
    "Open Source",
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $50,000",
    "Over $50,000",
    "Non-commercial",
  ];

  const enjoymentFactors = [
    "Tasks and responsibilities",
    "Work environment",
    "Company culture",
    "Opportunities for growth",
    "Compensation and benefits",
  ];

  const challengeFactors = [
    "Salary was not competitive",
    "Lack of interest in the work",
    "Management or leadership issues",
    "Limited opportunities for advancement",
    "Work-life balance issues",
  ];

  const handleExperienceChange = (
    index: number,
    field: keyof JobExperience,
    value: any
  ) => {
    const newExperiences = [...experiences];
    if (field === "startDate" || field === "endDate") {
      const [dateField, dateValue] = value;
      newExperiences[index][field] = {
        ...newExperiences[index][field],
        [dateField]: dateValue,
      };
    } else {
      newExperiences[index] = {
        ...newExperiences[index],
        [field]: value,
      };
    }
    setExperiences(newExperiences);
  };

  const handleProjectChange = (
    index: number,
    field: keyof Project,
    value: string
  ) => {
    const newProjects = [...projects];
    newProjects[index] = {
      ...newProjects[index],
      [field]: value,
    };
    setProjects(newProjects);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        jobTitle: "",
        companyName: "",
        location: "",
        jobType: "",
        salary: "",
        isCurrentJob: false,
        startDate: { year: "", month: "" },
        endDate: { year: "", month: "" },
        description: "",
        enjoyed: [],
        challenges: [],
      },
    ]);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        type: "",
        status: "",
        budgetRange: "",
        description: "",
      },
    ]);
  };

  const toggleFactor = (
    index: number,
    factor: string,
    type: "enjoyed" | "challenges"
  ) => {
    const newExperiences = [...experiences];
    const factors = newExperiences[index][type];
    const factorIndex = factors.indexOf(factor);

    if (factorIndex === -1) {
      factors.push(factor);
    } else {
      factors.splice(factorIndex, 1);
    }

    setExperiences(newExperiences);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Showcase Your Skills and Experience
          </h1>
          <p className="mt-2 text-gray-600">
            Highlight your hard and soft skills, certifications, and
            achievements to stand out.
          </p>
        </div>

        {/* Hard Skills Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Hard Skills</h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Add a skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addSkill()}
              />
              <Button onClick={addSkill}>
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="flex items-center gap-1 px-3 py-1"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="ml-1 hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Certifications
          </h2>
          {certifications.map((cert, index) => (
            <div key={index} className="grid gap-4 border-b pb-6 last:border-0">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">
                  Certification {index + 1}
                </h3>
                {index > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeCertification(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Certification title"
                  value={cert.title}
                  onChange={(e) =>
                    handleCertificationChange(index, "title", e.target.value)
                  }
                />
                <Input
                  placeholder="Institution name"
                  value={cert.institution}
                  onChange={(e) =>
                    handleCertificationChange(
                      index,
                      "institution",
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <Select 
                  value={cert.year}
                  onValueChange={(value) =>
                    handleCertificationChange(index, "year", value)
                  }
                >
                  <SelectTrigger >
                    <SelectValue placeholder="Year Obtained"  className="bg-white z-0"/>
                  </SelectTrigger>
                  <SelectContent className="bg-white z-0">
                    {[...Array(10)].map((_, i) => (
                      <SelectItem key={2024 - i} value={(2024 - i).toString()}>
                        {2024 - i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={cert.status}
                  onValueChange={(value) =>
                    handleCertificationChange(index, "status", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-0">
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Textarea
                placeholder="Describe your key learnings and achievements"
                className="min-h-[100px]"
                value={cert.description}
                onChange={(e) =>
                  handleCertificationChange(
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
            </div>
          ))}
          <Button
            variant="outline"
            className="w-full md:w-auto"
            onClick={addCertification}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Another Certification
          </Button>
        </section>

        {/* Soft Skills Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Communication",
              "Leadership",
              "Problem Solving",
              "Time Management",
              "Teamwork",
              "Creativity/ Innovation",
              "Stress & Emotion Management",
              "Public Speaking",
              "Critical Thinking",
            ].map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <Checkbox id={skill} />
                <label
                  htmlFor={skill}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {skill}
                </label>
              </div>
            ))}
          </div>
          <Button className="w-full mt-6">
            Complete a 5-minute assessment to get skill analytics
          </Button>
        </section>
        {/* Job Experience Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            <h2 className="text-xl font-semibold text-gray-900">
              Job Experience
            </h2>
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className="border-b pb-6 last:border-0 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Job Title"
                  value={exp.jobTitle}
                  onChange={(e) =>
                    handleExperienceChange(index, "jobTitle", e.target.value)
                  }
                />
                <Input
                  placeholder="Company Name"
                  value={exp.companyName}
                  onChange={(e) =>
                    handleExperienceChange(index, "companyName", e.target.value)
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select 
                  value={exp.location}
                  onValueChange={(value) =>
                    handleExperienceChange(index, "location", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-0">
                    {[
                      "United States",
                      "Canada",
                      "United Kingdom",
                      "Remote",
                    ].map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={exp.jobType}
                  onValueChange={(value) =>
                    handleExperienceChange(index, "jobType", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-0">
                    {jobTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex gap-2">
                  <Input
                    placeholder="Salary"
                    type="number"
                    value={exp.salary}
                    onChange={(e) =>
                      handleExperienceChange(index, "salary", e.target.value)
                    }
                  />
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`current-${index}`}
                      checked={exp.isCurrentJob}
                      onCheckedChange={(checked) =>
                        handleExperienceChange(index, "isCurrentJob", checked)
                      }
                    />
                    <label
                      htmlFor={`current-${index}`}
                      className="text-sm text-gray-600"
                    >
                      Current
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Select
                  value={exp.startDate.year}
                  onValueChange={(value) =>
                    handleExperienceChange(index, "startDate", ["year", value])
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Start Year" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-0">
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={exp.startDate.month}
                  onValueChange={(value) =>
                    handleExperienceChange(index, "startDate", ["month", value])
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Start Month" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-0">
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={exp.endDate.year}
                  onValueChange={(value) =>
                    handleExperienceChange(index, "endDate", ["year", value])
                  }
                  disabled={exp.isCurrentJob}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="End Year" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-0">
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={exp.endDate.month}
                  onValueChange={(value) =>
                    handleExperienceChange(index, "endDate", ["month", value])
                  }
                  disabled={exp.isCurrentJob}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="End Month" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-0">
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Describe your responsibilities and achievements"
                value={exp.description}
                onChange={(e) =>
                  handleExperienceChange(index, "description", e.target.value)
                }
                className="min-h-[100px]"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">
                    What You Enjoyed Most
                  </h4>
                  {enjoymentFactors.map((factor) => (
                    <div key={factor} className="flex items-center space-x-2">
                      <Checkbox
                        id={`enjoyed-${index}-${factor}`}
                        checked={exp.enjoyed.includes(factor)}
                        onCheckedChange={() =>
                          toggleFactor(index, factor, "enjoyed")
                        }
                      />
                      <label
                        htmlFor={`enjoyed-${index}-${factor}`}
                        className="text-sm text-gray-600"
                      >
                        {factor}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">
                    Challenges Faced
                  </h4>
                  {challengeFactors.map((factor) => (
                    <div key={factor} className="flex items-center space-x-2">
                      <Checkbox
                        id={`challenge-${index}-${factor}`}
                        checked={exp.challenges.includes(factor)}
                        onCheckedChange={() =>
                          toggleFactor(index, factor, "challenges")
                        }
                      />
                      <label
                        htmlFor={`challenge-${index}-${factor}`}
                        className="text-sm text-gray-600"
                      >
                        {factor}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <Button
            variant="outline"
            className="w-full md:w-auto"
            onClick={addExperience}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Another Experience
          </Button>
        </section>

        {/* Project Achievements Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6" />
            <h2 className="text-xl font-semibold text-gray-900">
              Project Achievements
            </h2>
          </div>

          {projects.map((project, index) => (
            <div key={index} className="border-b pb-6 last:border-0 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Project Title"
                  value={project.title}
                  onChange={(e) =>
                    handleProjectChange(index, "title", e.target.value)
                  }
                />
                <Select
                  value={project.type}
                  onValueChange={(value) =>
                    handleProjectChange(index, "type", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Project Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-0">
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  value={project.status}
                  onValueChange={(value) =>
                    handleProjectChange(index, "status", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-0">
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="planned">Planned</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={project.budgetRange}
                  onValueChange={(value) =>
                    handleProjectChange(index, "budgetRange", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Budget Range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-0">
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Describe the project and your achievements"
                value={project.description}
                onChange={(e) =>
                  handleProjectChange(index, "description", e.target.value)
                }
                className="min-h-[100px]"
              />
            </div>
          ))}

          <Button
            variant="outline"
            className="w-full md:w-auto"
            onClick={addProject}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Another Project
          </Button>
        </section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 ">
            <Card className="p-8">
              <div className="flex justify-between items-center pb-4">
                <h1 className="text-3xl font-bold text-gray-90 ">References</h1>
              </div>
              <button
                type="button"
                tabIndex={0}
                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => document.getElementById("fileInput")?.click()}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    document.getElementById("fileInput")?.click();
                  }
                }}
              >
                <input
                  type="file"
                  id="fileInput"
                  multiple
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      Drag and drop your reference letters here, or click to
                      select files
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      PDF, DOC, DOCX up to 10MB each
                    </p>
                  </div>
                </div>
              </button>

              {files.length > 0 && (
                <div className="mt-6 space-y-2">
                  <h3 className="font-medium text-gray-900">Selected files:</h3>
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                    >
                      <span className="text-sm text-gray-600">{file.name}</span>
                      <span className="text-xs text-gray-500">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            <div className="flex justify-between items-center pt-6">
              <div className="flex justify-end pt-4">
                <Button
                  color="primary"
                  onClick={() => router.push("/register3")}
                >
                  <span className="ml-2">-</span>
                  Back
                </Button>
              </div>
              <div className="flex justify-end pt-4 gap-2">
                <Button color="primary">
                  <Image
                    src={ SaveImage}
                    alt="save"
                    width={20}
                    height={20}
                    className=" pr-2"
                  />
                  Save Draft
                </Button>
              </div>
              <div className="flex justify-end pt-4">
                <Button color="primary">
                  Next
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
