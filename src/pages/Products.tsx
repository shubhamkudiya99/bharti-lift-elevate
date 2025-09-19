import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Building, Hospital, Truck, ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Elevator Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of vertical transportation solutions engineered for safety, reliability, and efficiency
          </p>
        </div>

        {/* Passenger Lifts */}
        <section id="passenger" className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-primary text-primary-foreground">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8" />
                <div>
                  <CardTitle className="text-2xl">Passenger Lifts</CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    MRL and Machine Room Systems
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Capacities: 4–20 persons (272–1360 kg)</li>
                    <li>• Speeds: 0.65–1.5 m/s</li>
                    <li>• Pit depth: 1600–1800 mm</li>
                    <li>• Overhead: 4300–4800 mm</li>
                    <li>• Automatic Telescopic Doors available</li>
                    <li>• Energy-efficient MRL options</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Capacity</TableHead>
                        <TableHead>Car Size (mm)</TableHead>
                        <TableHead>Entrance (mm)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>6 persons</TableCell>
                        <TableCell>1100×1400</TableCell>
                        <TableCell>800×2100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>8 persons</TableCell>
                        <TableCell>1350×1400</TableCell>
                        <TableCell>900×2100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>10 persons</TableCell>
                        <TableCell>1600×1400</TableCell>
                        <TableCell>900×2100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>13 persons</TableCell>
                        <TableCell>1350×1600</TableCell>
                        <TableCell>900×2100</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Capsule Lifts */}
        <section id="capsule" className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-steel text-steel-dark">
              <div className="flex items-center space-x-3">
                <Building className="h-8 w-8" />
                <div>
                  <CardTitle className="text-2xl">Capsule Lifts</CardTitle>
                  <CardDescription className="text-steel-dark/80">
                    Elegant Design with Automatic Doors
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Capacities: 6–15 persons</li>
                    <li>• Panoramic glass walls available</li>
                    <li>• Smooth and silent operation</li>
                    <li>• Minimal maintenance requirements</li>
                    <li>• Architectural glass options</li>
                    <li>• LED lighting systems</li>
                  </ul>
                  <div className="mt-6">
                    <Badge variant="secondary" className="mr-2">Energy Efficient</Badge>
                    <Badge variant="secondary" className="mr-2">Low Noise</Badge>
                    <Badge variant="secondary">Premium Design</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Typical Dimensions</h3>
                  <div className="space-y-4">
                    <div className="bg-steel-light p-4 rounded-lg">
                      <h4 className="font-medium">6-8 Persons</h4>
                      <p className="text-sm text-muted-foreground">Car: 1100×1400 mm</p>
                      <p className="text-sm text-muted-foreground">Well: 1500×1800 mm</p>
                    </div>
                    <div className="bg-steel-light p-4 rounded-lg">
                      <h4 className="font-medium">10-13 Persons</h4>
                      <p className="text-sm text-muted-foreground">Car: 1350×1600 mm</p>
                      <p className="text-sm text-muted-foreground">Well: 1750×2000 mm</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Hospital Elevators */}
        <section id="hospital" className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-primary text-primary-foreground">
              <div className="flex items-center space-x-3">
                <Hospital className="h-8 w-8" />
                <div>
                  <CardTitle className="text-2xl">Hospital Elevators</CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    Stretcher Lifts for Healthcare Facilities
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Capacities: 15–26 persons</li>
                    <li>• Stretcher accommodation</li>
                    <li>• Speeds up to 1.5 m/s</li>
                    <li>• Pit depth: 3700–4350 mm</li>
                    <li>• Overhead: 5500–6700 mm</li>
                    <li>• As per relevant IS code</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Hospital Lift Specifications</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Capacity</TableHead>
                        <TableHead>Car Size (mm)</TableHead>
                        <TableHead>Entrance (mm)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>15 persons</TableCell>
                        <TableCell>1000×2400</TableCell>
                        <TableCell>800×2100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>20 persons</TableCell>
                        <TableCell>1200×2400</TableCell>
                        <TableCell>900×2100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>26 persons</TableCell>
                        <TableCell>1600×2400</TableCell>
                        <TableCell>1200×2100</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Dumbwaiters */}
        <section id="dumbwaiter" className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-steel text-steel-dark">
              <div className="flex items-center space-x-3">
                <Truck className="h-8 w-8" />
                <div>
                  <CardTitle className="text-2xl">Dumbwaiters</CardTitle>
                  <CardDescription className="text-steel-dark/80">
                    Food & Service Lifts
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Load capacity: 100–250 kg (50 kg increments)</li>
                    <li>• Speed: 0.25 m/s</li>
                    <li>• Overhead: ~4400 mm</li>
                    <li>• Pit: ~750 mm</li>
                    <li>• Traction drive with worm gear</li>
                    <li>• 24V controls with indicators</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technical Details</h3>
                  <div className="space-y-4">
                    <div className="bg-steel-light p-4 rounded-lg">
                      <h4 className="font-medium">Drive System</h4>
                      <p className="text-sm text-muted-foreground">Motor + magnetic disc brake + hand wheel</p>
                    </div>
                    <div className="bg-steel-light p-4 rounded-lg">
                      <h4 className="font-medium">Safety Features</h4>
                      <p className="text-sm text-muted-foreground">IR door safety, guided suspension</p>
                    </div>
                    <div className="bg-steel-light p-4 rounded-lg">
                      <h4 className="font-medium">Controls</h4>
                      <p className="text-sm text-muted-foreground">24V with indicators and buzzer</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Need Custom Specifications?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-6">
            Our engineers can design elevator solutions tailored to your specific requirements
          </p>
          <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
            Request Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;