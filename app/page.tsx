"use client";

import { PenTool, Building, ClipboardList, BookOpen, GraduationCap } from "lucide-react";
import { ExpertiseCard } from "@/components/home/expertise-card";
import { ProjectCard } from "@/components/home/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const expertise = [
    {
      title: "CAD Services",
      description: "Professional Computer-Aided Design solutions for your projects",
      icon: PenTool,
      features: [
        "2D & 3D CAD Drawing",
        "Technical Documentation",
        "Design Optimization",
        "AutoCAD Expertise"
      ]
    },
    {
      title: "BIM Solutions",
      description: "Building Information Modeling for modern construction",
      icon: Building,
      features: [
        "3D BIM Modeling",
        "Clash Detection",
        "Quantity Takeoff",
        "Revit Implementation"
      ]
    },
    {
      title: "Project Management",
      description: "Comprehensive project planning and management services",
      icon: ClipboardList,
      features: [
        "Schedule Management",
        "Cost Control",
        "Quality Assurance",
        "Risk Management"
      ]
    }
  ];

  const services = [
    {
      title: "Consultancy",
      description: "Expert guidance for your engineering projects",
      icon: BookOpen,
      features: [
        "Technical Consulting",
        "Process Optimization",
        "Feasibility Studies",
        "Expert Reviews"
      ]
    },
    {
      title: "Training",
      description: "Professional development and skill enhancement",
      icon: GraduationCap,
      features: [
        "CAD Training",
        "BIM Workshops",
        "Project Management",
        "Custom Programs"
      ]
    }
  ];

  const featuredProjects = [
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
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Engineering Excellence</h1>
          <p className="text-xl mb-8">
            Delivering innovative solutions in CAD, BIM, and Project Management
            for construction and engineering projects worldwide.
          </p>
        </div>
      </div>

      {/* Areas of Expertise Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our core competencies in engineering and construction consultancy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item) => (
            <ExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      {/* Our Services Section */}
      <div className="bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional services tailored to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ExpertiseCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Past Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Past Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our portfolio of successful project deliveries.
          </p>
          <Link href="/projects">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}