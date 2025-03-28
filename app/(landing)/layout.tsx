"use client";
import TalentedSignupHeader from "@/components/layouts/talented-siginup-header";

export default function TalentedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex  w-full"></div>
      <TalentedSignupHeader />
      <div className="flex w-full bg-black/5">{children}</div>
    </div>
  );
}
