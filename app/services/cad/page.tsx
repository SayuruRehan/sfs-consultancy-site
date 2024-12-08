import { PenTool } from "lucide-react";

export default function CADServices() {
  return (
    <div>
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <PenTool className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">CAD Services</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground mb-8">
          Professional Computer-Aided Design solutions tailored to meet your engineering and construction needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our CAD Expertise</h2>
            <ul className="space-y-3">
              <li>2D & 3D CAD Drawing Development</li>
              <li>Technical Documentation & Detailing</li>
              <li>Design Optimization & Review</li>
              <li>AutoCAD Implementation & Training</li>
              <li>Custom CAD Standards Development</li>
              <li>Drawing Conversion & Migration</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Industries Served</h2>
            <ul className="space-y-3">
              <li>Architecture & Construction</li>
              <li>Manufacturing & Industrial Design</li>
              <li>Civil Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Electrical Systems</li>
              <li>Infrastructure Development</li>
            </ul>
          </div>
        </div>

        <div className="bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our CAD Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Expertise & Experience</h3>
              <p className="text-muted-foreground">
                Our team of certified CAD professionals brings years of industry experience
                and technical expertise to every project.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Rigorous quality control processes ensure accurate, detailed, and
                standard-compliant deliverables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}