import { Building } from "lucide-react";

export default function BIMServices() {
  return (
    <div>
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Building className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">BIM Solutions</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground mb-8">
          Comprehensive Building Information Modeling solutions for modern construction and engineering projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">BIM Services</h2>
            <ul className="space-y-3">
              <li>3D BIM Modeling & Coordination</li>
              <li>Clash Detection & Resolution</li>
              <li>Quantity Takeoff & Estimation</li>
              <li>Revit Family Creation</li>
              <li>4D Construction Sequencing</li>
              <li>BIM Implementation Strategy</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">BIM Benefits</h2>
            <ul className="space-y-3">
              <li>Enhanced Project Visualization</li>
              <li>Improved Collaboration</li>
              <li>Reduced Construction Costs</li>
              <li>Better Project Planning</li>
              <li>Efficient Resource Management</li>
              <li>Streamlined Documentation</li>
            </ul>
          </div>
        </div>

        <div className="bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our BIM Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Advanced Technology</h3>
              <p className="text-muted-foreground">
                We utilize the latest BIM software and technologies to deliver
                cutting-edge solutions for your projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Industry Standards</h3>
              <p className="text-muted-foreground">
                Our BIM processes comply with international standards and best
                practices for optimal results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}