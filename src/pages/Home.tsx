import { Button } from "@/components/ui/button";
import { PhoneButton } from "@/components/ui/phone";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building, Hospital, Truck, Users, Shield, Wrench, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-elevator.jpg";

const productShortcuts = [
  {
    title: "Passenger Lifts",
    description: "MRL and Machine Room systems, 4-20 persons",
    icon: Users,
    href: "/products#passenger",
  },
  {
    title: "Capsule Lifts",
    description: "Elegant design with auto doors, 6-15 persons",
    icon: Building,
    href: "/products#capsule",
  },
  {
    title: "Hospital Elevators",
    description: "Stretcher lifts, 15-26 persons",
    icon: Hospital,
    href: "/products#hospital",
  },
  {
    title: "Dumbwaiters",
    description: "Food/service lifts, 100-250 kg capacity",
    icon: Truck,
    href: "/products#dumbwaiter",
  },
];

const trustFeatures = [
  {
    title: "Service Satisfaction Guaranteed",
    description: "Comprehensive support and maintenance",
    icon: Shield,
  },
  {
    title: "Complete Solutions",
    description: "From installation to servicing",
    icon: Wrench,
  },
  {
    title: "Certified Quality",
    description: "GSTIN: 07BDJPK9503M2Z3",
    icon: Award,
  },
];

const projectSpotlight = [
  {
    title: "Hospital Lift, Bhatinda (P.)",
    description: "High-capacity hospital elevator with stretcher accommodation",
    image: "/api/placeholder/400/250",
  },
  {
    title: "Krishna Nagar, East Delhi",
    description: "Residential complex passenger lift installation",
    image: "/api/placeholder/400/250",
  },
  {
    title: "Sec. 23, Sanjay Nagar (GZB.)",
    description: "Commercial building elevator solutions",
    image: "/api/placeholder/400/250",
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="absolute inset-0 bg-black/60" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
            Bharti Elevator
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Passenger, capsule, hospital and dumbwaiter lifts engineered for safety, comfort, and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="text-lg px-8 py-4">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <PhoneButton
              number="+919990917708"
              className="text-lg px-8 py-4 bg-white/10 hover:bg-white/20 rounded-md transition-colors border border-white/20"
            >
              Call +91 9990917708
            </PhoneButton>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-16 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Shortcuts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Elevator Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of vertical transportation solutions designed for every application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productShortcuts.map((product, index) => (
              <Link key={index} to={product.href} className="group">
                <Card className="h-full hover:shadow-card transition-all duration-300 group-hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <product.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Spotlight */}
      <section className="py-20 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence across diverse industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectSpotlight.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="aspect-video bg-steel-light"></div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="steel" size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Ribbon */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Elevate Your Building?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get expert consultation and competitive quotes for your elevator needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PhoneButton
              number="+919990917708"
              className="bg-white text-primary hover:bg-steel-light transition-colors px-8 py-4 rounded-md font-semibold"
            >
              Call Now: +91 9990917708
            </PhoneButton>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Request Site Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;