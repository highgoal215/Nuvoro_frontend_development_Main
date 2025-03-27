import TalentedLandingHeader from "@/components/layouts/Talented-Landing-header";

export default function Talented_Pages({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex w-full  bg-black/5">{children}</div>;
}
