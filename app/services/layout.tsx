import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - SFS Consultancy",
  description: "Professional engineering and construction consultancy services including CAD, BIM, and Project Management.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </div>
  );
}