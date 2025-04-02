"use client";
import TalentedSignupHeader from "@/components/layouts/talented-siginup-header";
import { Talented_Footer } from "@/components/talent-component/footer";

export default function TalentedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col  min-h-screen w-full max-w-[1440px] mx-auto bg-green-400">
      <div className="w-full ">
        <TalentedSignupHeader />
      </div>
      <div className="flex w-full">{children}</div>
      <div className=" flex w-full ">
        <Talented_Footer />
      </div>
    </div>
  );
}
