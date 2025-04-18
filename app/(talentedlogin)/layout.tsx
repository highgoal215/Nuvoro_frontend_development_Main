"use client";
import TalentedSignupHeader from "@/components/layouts/talented-siginup-header";
import { Talented_Footer } from "@/components/talent-component/footer";

export default function TalentedLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-[1440px] mx-auto">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <TalentedSignupHeader />
      </div>
      <div className="flex-1 w-full">{children}</div>
      <div className="w-full">
        <Talented_Footer />
      </div>
    </div>
  );
}
