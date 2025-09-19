import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Zap, Building2, Hospital, Home, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Hospital Lift, Bhatinda (P.)",
    location: "Bhatinda, Punjab",
    type: "Hospital Elevator",
    capacity: "20 persons",
    speed: "1.0 m/s",
    features: ["Stretcher accommodation", "Emergency backup", "Smooth operation"],
    category: "Healthcare",
    icon: Hospital,
  },
  {
    title: "Krishna Nagar, East Delhi",
    location: "East Delhi",
    type: "Passenger Lift",
    capacity: "8 persons",
    speed: "1.0 m/s", 
    features: ["MRL system", "Energy efficient", "Automatic doors"],
    category: "Residential",
    icon: Home,
  },
  {
    title: "Sec. 23, Sanjay Nagar (GZB.)",
    location: "Ghaziabad",
    type: "Commercial Elevator",
    capacity: "13 persons",
    speed: "1.5 m/s",
    features: ["High-speed operation", "Premium finishes", "Advanced controls"],
    category: "Commercial",
    icon: Building2,
  },
  {
    title: "Metro Hospital Complex",
    location: "Dehradun",
    type: "Hospital Elevator",
    capacity: "26 persons",
    speed: "1.2 m/s",
    features: ["Large capacity", "Infection control", "Emergency protocols"],
    category: "Healthcare",
    icon: Hospital,
  },
  {
    title: "IT Park Tower",
    location: "Noida",
    type: "High-Speed Elevator",
    capacity: "16 persons", 
    speed: "1.75 m/s",
    features: ["Gearless system", "Energy efficient", "Smart controls"],
    category: "Commercial",
    icon: Building2,
  },
  {
    title: "Luxury Residences",
    location: "Delhi NCR",
    type: "Capsule Lift",
    capacity: "10 persons",
    speed: "1.0 m/s",
    features: ["Glass panels", "LED lighting", "Silent operation"],
    category: "Residential",
    icon: Home,
  },
];

const categoryColors = {
  Healthcare: "bg-red-100 text-red-800",
  Residential: "bg-green-100 text-green-800", 
  Commercial: "bg-blue-100 text-blue-800",
};

const Projects = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering excellence across diverse industries with customized elevator solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="h-full hover:shadow-card transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <project.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Type</p>
                      <p className="font-medium">{project.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Capacity</p>
                      <p className="font-medium">{project.capacity}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Speed</p>
                      <p className="font-medium">{project.speed}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <Zap className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Key Features</p>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Categories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Project Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Hospital className="h-12 w-12 mx-auto mb-3 text-primary" />
                <CardTitle>Healthcare Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized hospital elevators designed for patient transport, medical equipment, and emergency access.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 mx-auto mb-3 text-primary" />
                <CardTitle>Commercial Buildings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High-performance elevators for offices, retail spaces, and commercial complexes with heavy traffic.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Home className="h-12 w-12 mx-auto mb-3 text-primary" />
                <CardTitle>Residential Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comfortable and efficient residential elevators for apartments, villas, and housing societies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-primary rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Your Project Could Be Next
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-6">
            Contact us to discuss your elevator requirements and get a customized solution
          </p>
          <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;