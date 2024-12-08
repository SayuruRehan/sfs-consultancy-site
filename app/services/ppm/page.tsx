import { ClipboardList } from "lucide-react";

export default function ProjectManagement() {
  return (
    <div>
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <ClipboardList className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Project Management</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground mb-8">
          Professional project planning and management services to ensure successful project delivery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Management Services</h2>
            <ul className="space-y-3">
              <li>Project Planning & Scheduling</li>
              <li>Cost Control & Budgeting</li>
              <li>Quality Management</li>
              <li>Risk Assessment & Mitigation</li>
              <li>Resource Allocation</li>
              <li>Progress Monitoring & Reporting</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Phases</h2>
            <ul className="space-y-3">
              <li>Initiation & Planning</li>
              <li>Design & Development</li>
              <li>Execution & Implementation</li>
              <li>Monitoring & Control</li>
              <li>Testing & Quality Assurance</li>
              <li>Project Closure & Review</li>
            </ul>
          </div>
        </div>

        <div className="bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Experienced Team</h3>
              <p className="text-muted-foreground">
                Our certified project managers bring years of experience in
                handling complex engineering projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Proven Methodology</h3>
              <p className="text-muted-foreground">
                We follow industry-standard project management methodologies
                adapted to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}