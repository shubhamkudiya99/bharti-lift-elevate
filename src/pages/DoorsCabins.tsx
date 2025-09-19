import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DoorOpen, Palette, Monitor, Hand, Star, Zap } from "lucide-react";

const doorTypes = [
  {
    name: "Telescopic Manual",
    description: "Traditional manual operation doors",
    features: ["Reliable mechanism", "Cost-effective", "Low maintenance"],
  },
  {
    name: "Center Opening",
    description: "Automatic center-opening doors",
    features: ["Smooth operation", "Space efficient", "Modern design"],
  },
  {
    name: "Channel Gate",
    description: "MS powder coated channel gates",
    features: ["Industrial grade", "Durable finish", "Safety compliant"],
  },
  {
    name: "Perforated Doors",
    description: "Ventilated perforated designs",
    features: ["Air circulation", "Visual transparency", "Modern aesthetic"],
  },
  {
    name: "Glass Vision Panel",
    description: "Doors with glass viewing panels",
    features: ["Enhanced visibility", "Premium appearance", "Safety glass"],
  },
];

const cabinFinishes = [
  {
    category: "Stainless Steel Finishes",
    options: [
      { name: "Mirror Finish", description: "High-gloss reflective surface" },
      { name: "Hairline Finish", description: "Brushed linear texture" },
      { name: "Rose Finish", description: "Elegant rose gold tone" },
      { name: "Black Finish", description: "Premium black stainless steel" },
    ],
  },
  {
    category: "Ceiling Options",
    options: [
      { name: "Starlight Ceiling", description: "LED fiber optic starfield effect" },
      { name: "Energy-Saving LEDs", description: "Efficient LED panel lighting" },
      { name: "Recessed Lighting", description: "Clean, minimalist appearance" },
    ],
  },
  {
    category: "Handrails & Accessories",
    options: [
      { name: "SS Tubular Handrails", description: "38mm diameter stainless steel" },
      { name: "Tactile Buttons", description: "Accessible control panels" },
      { name: "Hardened Aluminum Sills", description: "Durable entrance sills" },
      { name: "Vinyl Tile Floors", description: "Various color codes available" },
    ],
  },
];

const carInteriorSpecs = [
  {
    model: "SL-1 Standard",
    panels: "Lacquered steel panels (Code: LS-101)",
    columns: "Hairline SS columns with kick plates",
    buttons: "Tactile push buttons with Braille",
    sills: "Hardened aluminum entrance sills",
    flooring: "Vinyl tile (Code: VT-201)",
    handrails: "Optional SS tubular handrails",
  },
  {
    model: "SL-2 Premium",
    panels: "Lacquered steel panels (Code: LS-201)",
    columns: "Mirror finish SS columns",
    buttons: "Touch-sensitive control panel",
    sills: "Hardened aluminum with SS inlay",
    flooring: "Vinyl tile (Code: VT-301)",
    handrails: "Standard SS tubular handrails",
  },
  {
    model: "SL-3 Luxury",
    panels: "Lacquered steel panels (Code: LS-301)",
    columns: "Rose finish SS columns",
    buttons: "LCD/TFT touch display",
    sills: "Premium hardened aluminum",
    flooring: "Vinyl tile (Code: VT-401)",
    handrails: "Premium SS handrails with LED",
  },
];

const indicatorOptions = [
  {
    type: "7-Segment with Arrows",
    description: "Classic digital floor indicators",
    features: ["Clear visibility", "Directional arrows", "Energy efficient"],
  },
  {
    type: "Dot-Matrix Display",
    description: "Advanced matrix displays",
    features: ["Multiple languages", "Custom messages", "High contrast"],
  },
  {
    type: "LCD/TFT Display",
    description: "Modern touch displays",
    features: ["Full color", "Touch interface", "Information display"],
  },
  {
    type: "Touch COP & LOP",
    description: "Touch-sensitive controls",
    features: ["Modern interface", "Easy to clean", "Customizable"],
  },
];

const DoorsCabins = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Doors & Cabins
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium door systems and cabin finishes designed for safety, aesthetics, and durability
          </p>
        </div>

        {/* Door Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <DoorOpen className="h-8 w-8 mr-3 text-primary" />
            Door Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doorTypes.map((door, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{door.name}</CardTitle>
                  <CardDescription>{door.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {door.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cabin Finishes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <Palette className="h-8 w-8 mr-3 text-primary" />
            Cabin Finishes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cabinFinishes.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-semibold text-foreground">{option.name}</h4>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Car Interior Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <Star className="h-8 w-8 mr-3 text-primary" />
            Car Interior Specifications
          </h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Wall Panels</TableHead>
                  <TableHead>Columns/Kick Plates</TableHead>
                  <TableHead>Control Buttons</TableHead>
                  <TableHead>Entrance Sills</TableHead>
                  <TableHead>Flooring</TableHead>
                  <TableHead>Handrails</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {carInteriorSpecs.map((spec, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{spec.model}</TableCell>
                    <TableCell>{spec.panels}</TableCell>
                    <TableCell>{spec.columns}</TableCell>
                    <TableCell>{spec.buttons}</TableCell>
                    <TableCell>{spec.sills}</TableCell>
                    <TableCell>{spec.flooring}</TableCell>
                    <TableCell>{spec.handrails}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* COP/LOP & Indicators */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <Monitor className="h-8 w-8 mr-3 text-primary" />
            Control Panels & Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indicatorOptions.map((indicator, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{indicator.type}</CardTitle>
                  <CardDescription>{indicator.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {indicator.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="mr-1 mb-1 text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Special Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <Zap className="h-8 w-8 mr-3 text-primary" />
            Special Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Hand className="h-6 w-6" />
                  <span>Accessibility Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Tactile buttons with Braille markings</li>
                  <li>• Audio announcements for floor levels</li>
                  <li>• Extended door hold times</li>
                  <li>• Wheelchair accessible dimensions</li>
                  <li>• Emergency communication systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-steel text-steel-dark">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-6 w-6" />
                  <span>Energy Efficiency</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• LED lighting throughout</li>
                  <li>• Energy-efficient motor systems</li>
                  <li>• Regenerative drive options</li>
                  <li>• Standby mode power saving</li>
                  <li>• Smart scheduling systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Notes */}
        <div className="bg-steel-light p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-4">Technical Notes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">Material Standards</h4>
              <ul className="space-y-1">
                <li>• All stainless steel: 304 grade minimum</li>
                <li>• Lacquered steel: Powder coated finish</li>
                <li>• Glass panels: Safety glass compliance</li>
                <li>• Vinyl flooring: Commercial grade</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Customization Options</h4>
              <ul className="space-y-1">
                <li>• Custom color codes available</li>
                <li>• Logo and branding integration</li>
                <li>• Special lighting configurations</li>
                <li>• Bespoke material combinations</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-steel">
            <p className="text-xs text-muted-foreground">
              All finishes and materials meet relevant IS codes and international standards. 
              Actual appearance may vary from digital representations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorsCabins;