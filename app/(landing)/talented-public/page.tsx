"use client";
import { Button } from "@heroui/button";
import {Image} from "@heroui/image";
import { Card } from "@heroui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@heroui/avatar";
import TalentedHomeImage from "@/assets/svg/talented-publicpage.svg";
import {
  FileText,
  Briefcase,
  FolderGit2,
  Link,
  Edit,
  Upload,
  School,
  Clock,
  ExternalLink,
  DollarSign,
  User,
  MessageCircle,
  Share2,
  Heart,
} from "lucide-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { useState, useRef } from "react";
import ProfileSection from "@/components/talent-component/talentedpublic/profilesection";
import JobsSection from "@/components/talent-component/talentedpublic/jobsection";
import { projects } from "@/app/data/talentspublic/project";
import { courses } from "@/app/data/talentspublic/course";
import { posts } from "@/app/data/talentspublic/post";
import { image } from "@heroui/theme";

export default function TalentedPublicPages() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here you would typically handle the file upload to your backend
      console.log("Uploading file:", selectedFile.name);
      // Reset the selection after upload
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      onClose();
    }
  };

  return (
    <div className="bg-white  flex gap-12  flex-col w-full">
      {/* Hero Section */}
      <div className="flex  flex-col lg:flex-row justify-start items-start">
        <div className="flex flex-1 w-full bg-[#046A8A]  px-8 flex-col gap-6 sm:gap-8 lg:gap-10">
          <div className="flex pt-8 sm:pt-12 lg:pt-[112px]">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold">
              Unlock Your Potential with Nuvoro
            </p>
          </div>
          <div className="flex">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[30px]">
              AI-powered tools to showcase skills, find opportunities, and grow
              your career.
            </p>
          </div>
          <div className="flex  flex-col p-4 sm:flex-row justify-between gap-1 sm:gap-2 pt-4 sm:pt-6 lg:pt-2">
            <div className="flex w-full  pb-24 sm:w-1/2">
              <Button>Build Your Profile</Button>
            </div>
            <div className="flex w-full sm:w-1/2">
              <Button>Explore Jobs</Button>
            </div>
            <div className="flex w-full sm:w-1/2">
              <Button>Find Projects</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 w-full h-full lg:w-auto">
          <Image
            src={TalentedHomeImage.src}
            alt="HomeImage"
            width={0}
            height={0}
            className="w-full h-full rounded-none object-cover"
            removeWrapper
          />
        </div>
      </div>
      <div className="mx-8 bg-white rounded-lg border-2 shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Your Profile, Your Brand
            </h1>
            <p className="text-gray-600 text-sm">
              Complete your profile to increase visibility to recruiters
            </p>
          </div>
          <Button className="mt-2 md:mt-0 bg-blue-600 hover:bg-blue-700">
            Edit Profile
          </Button>
        </div>

        <div className="mb-2 flex justify-between items-center">
          <span className="text-sm font-medium">Profile Completion</span>
          <span className="text-sm font-medium">70%</span>
        </div>
        <Progress
          value={70}
          className="h-2 bg-gray-200"
          indicatorClassName="bg-blue-600"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <ProfileSection
            icon="file-text"
            title="Resume"
            buttonText="Upload Resume"
          />
          <ProfileSection
            icon="code"
            title="Skills"
            skills={["JavaScript", "React", "Node.js"]}
          />
          <ProfileSection
            icon="link"
            title="Portfolio"
            buttonText="Add Portfolio Link"
          />
        </div>
      </div>
      <div className="flex px-8">
        <JobsSection />
      </div>
      {/* Projects Section */}
      <div className="flex flex-col w-full px-8">
        <div className="flex flex-1 justify-start items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Projects That Match Your Expertise
          </h2>
          <div className="flex flex-1 justify-end items-center">
            <Button className="text-[#1B4D5C]">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6">
              <div className="flex w-full justify-between">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <h3 className="text-xl font-semibold mb-4">
                  {project.duration}
                </h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <User className="w-4 h-4 mr-2" />
                  <span>Client: {project.client}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>Budget: {project.budget}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Duration: {project.duration}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <Button className="w-full bg-[#1B4D5C] hover:bg-[#163d4a]">
                Apply for Project
              </Button>
            </Card>
          ))}
        </div>
      </div>
      {/* { course section} */}
      <div className="flex flex-col w-full px-8">
        <div className="flex w-full justify-between items-center">
          <div className="flex w-full justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Upskill and Stay Ahead
              </h2>
              <p className="text-gray-600">
                Recommended courses based on your profile and career goals
              </p>
            </div>
          </div>
          <div className="flex">
            <Button className="text-[#1B4D5C]">
              Explore All Courses
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        {/* <div className="f"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <School className="w-4 h-4 mr-2" />
                    <span>{course.provider}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <Button className="w-full bg-[#1B4D5C] hover:bg-[#163d4a]">
                  Enroll Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
        {/* </div> */}
      </div>
      <div className="flex flex-col w-full px-8">
        <div className="flex flex-row w-full justify-between items-center ">
          <div className="flex flex-col flex-1 ">
            <p className=" text-2xl font-semibold text-gray-900">
              Connect and Grow
            </p>
            <p className="text-gray-600 mb-8">
              Share your thoughts and connect with other professionals
            </p>
          </div>

          <div className="flex justify-end flex-1 ">
            <Button>Create a Post</Button>
          </div>
        </div>
        <div>
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="rounded-full object-cover"
                    />
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {post.author.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {post.author.role}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {post.timeAgo}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-700">{post.content}</p>
                    <div className="mt-4 flex items-center space-x-6">
                      <button className="flex items-center text-gray-500 hover:text-gray-700">
                        <Heart className="h-5 w-5 mr-1" />
                        <span>{post.likes} Likes</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-gray-700">
                        <MessageCircle className="h-5 w-5 mr-1" />
                        <span>{post.comments} Comments</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-gray-700">
                        <Share2 className="h-5 w-5 mr-1" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
