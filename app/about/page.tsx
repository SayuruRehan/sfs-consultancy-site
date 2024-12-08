import { Users, Award, History, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About SFS Consultancy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A leading engineering and construction consultancy firm delivering innovative solutions since 1995.
        </p>
      </div>

      {/* Company Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-6">
            Founded in 1995, SFS Consultancy has grown from a small engineering firm to a global
            consultancy leader. We've successfully delivered over 1,000 projects across 30 countries,
            building a reputation for excellence in CAD, BIM, and Project Management services.
          </p>
          <p className="text-muted-foreground">
            Our commitment to innovation, quality, and client satisfaction has made us a trusted
            partner for organizations worldwide, from small businesses to Fortune 500 companies.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
            alt="Team collaboration"
            className="rounded-lg shadow-lg w-full h-[300px] object-cover"
          />
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          {
            icon: Users,
            title: "Expert Team",
            description: "Certified professionals with decades of industry experience"
          },
          {
            icon: Award,
            title: "Quality First",
            description: "ISO 9001 certified processes and deliverables"
          },
          {
            icon: History,
            title: "Timely Delivery",
            description: "Consistent track record of on-time project completion"
          },
          {
            icon: Target,
            title: "Innovation",
            description: "Cutting-edge solutions using latest technologies"
          }
        ].map((feature, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            To deliver exceptional engineering and construction consultancy services
            that exceed client expectations, while promoting innovation and sustainable
            practices in every project we undertake.
          </p>
        </div>
        <div className="bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground">
            To be the global leader in engineering consultancy, recognized for our
            innovative solutions, technical excellence, and commitment to sustainable
            development.
          </p>
        </div>
      </div>
    </div>
  );
}