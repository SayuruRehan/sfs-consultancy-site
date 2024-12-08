import { ProjectCard } from "@/components/home/project-card";

export default function Projects() {
  const projects = [
    {
      title: "Modern Office Complex",
      description: "Complete BIM implementation for a 20-story office building",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      category: "BIM"
    },
    {
      title: "Industrial Facility",
      description: "Comprehensive CAD design for manufacturing plant",
      imageUrl: "https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&q=80",
      category: "CAD"
    },
    {
      title: "Healthcare Center",
      description: "End-to-end project management for medical facility",
      imageUrl: "https://images.unsplash.com/photo-1538685634737-24b83e3fa2f8?auto=format&fit=crop&q=80",
      category: "Project Management"
    },
    {
      title: "Residential Complex",
      description: "Multi-tower residential development with complete BIM integration",
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
      category: "BIM"
    },
    {
      title: "Transportation Hub",
      description: "CAD design for major transportation infrastructure",
      imageUrl: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80",
      category: "CAD"
    },
    {
      title: "Educational Campus",
      description: "Project management for university campus expansion",
      imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
      category: "Project Management"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our portfolio of successful projects across various industries and disciplines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}