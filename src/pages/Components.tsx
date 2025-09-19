import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Shield, Zap, Wrench, Settings, Eye } from "lucide-react";
import componentsImage from "@/assets/elevator-components.jpg";

const componentCategories = [
  {
    title: "Machines & Motors",
    icon: Cog,
    items: [
      {
        name: "Sharp Geared Motors",
        description: "High-efficiency geared traction machines",
        specs: "Various capacities available",
      },
      {
        name: "Sharp Gearless Motors", 
        description: "Premium gearless traction systems",
        specs: "Low noise, energy efficient",
      },
      {
        name: "Montanari Gearless",
        description: "Italian precision gearless machines",
        specs: "Superior performance",
      },
    ],
  },
  {
    title: "Safety Systems",
    icon: Shield,
    items: [
      {
        name: "OSG Overspeed Governor",
        description: "Reliable speed monitoring system",
        specs: "Certified safety compliance",
      },
      {
        name: "Safety Block",
        description: "Emergency braking system",
        specs: "Instant stopping capability",
      },
      {
        name: "Rupture Valve",
        description: "Hydraulic system protection",
        specs: "GMV certified components",
      },
    ],
  },
  {
    title: "Doors & Headers",
    icon: Eye,
    items: [
      {
        name: "Fermator Door Systems",
        description: "Premium European door operators",
        specs: "Smooth, silent operation",
      },
      {
        name: "Philbrick Doors",
        description: "Reliable door mechanisms",
        specs: "Various opening configurations",
      },
      {
        name: "Wittur Components",
        description: "German engineering excellence",
        specs: "Long-lasting durability",
      },
    ],
  },
  {
    title: "Control Systems",
    icon: Settings,
    items: [
      {
        name: "Monarch Control Panel",
        description: "Advanced elevator control systems",
        specs: "Microprocessor-based",
      },
      {
        name: "ARD Systems",
        description: "Automatic rescue devices",
        specs: "Emergency power backup",
      },
      {
        name: "Door Operator Control",
        description: "Precise door timing control",
        specs: "Safety sensor integration",
      },
    ],
  },
  {
    title: "Power & Electrical",
    icon: Zap,
    items: [
      {
        name: "Gearless Power Control",
        description: "Monarch precision power systems",
        specs: "Energy efficient operation",
      },
      {
        name: "Blower Fan Systems",
        description: "Ventilation and cooling",
        specs: "Optimal air circulation",
      },
      {
        name: "Door Sensors",
        description: "Safety detection systems",
        specs: "IR and mechanical options",
      },
    ],
  },
  {
    title: "Structural Components", 
    icon: Wrench,
    items: [
      {
        name: "T Guide Rails",
        description: "Precision-machined guide rails",
        specs: "Smooth car travel",
      },
      {
        name: "Usha Martin Ropes",
        description: "High-strength steel ropes",
        specs: "Superior load capacity",
      },
      {
        name: "GMV Hydraulic Kits",
        description: "Complete hydraulic systems",
        specs: "Car frame, power pack, piston",
      },
    ],
  },
];

const Components = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Components & Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium quality components from trusted global manufacturers ensuring reliability and performance
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div 
            className="h-64 md:h-96 rounded-lg bg-cover bg-center shadow-steel"
            style={{ backgroundImage: `url(${componentsImage})` }}
          />
        </div>

        {/* Component Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {componentCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        {item.specs}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="mt-16">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Quality Assurance</CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg">
                All components meet international standards and certifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Shield className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Safety Certified</h3>
                  <p className="text-sm text-primary-foreground/80">
                    All components comply with relevant IS codes
                  </p>
                </div>
                <div>
                  <Cog className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Precision Engineering</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Manufactured to exact specifications
                  </p>
                </div>
                <div>
                  <Wrench className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Service Support</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Comprehensive maintenance and parts availability
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Notes */}
        <div className="mt-12 bg-steel-light p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">Power Requirements</h4>
              <ul className="space-y-1">
                <li>• 440V 3-phase, 4-wire, 50 Hz</li>
                <li>• 230V single phase termination</li>
                <li>• ELCB/MCCB (client-provided)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Standards Compliance</h4>
              <ul className="space-y-1">
                <li>• All dimensions in millimeters</li>
                <li>• As per relevant IS code</li>
                <li>• International safety standards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;