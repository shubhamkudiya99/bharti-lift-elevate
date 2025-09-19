import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Wrench, Phone, ArrowRight } from "lucide-react";
import { PhoneButton } from "@/components/ui/phone";

const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Bharti Elevator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering complete elevator solutions with guaranteed service satisfaction across North India
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Bharti Elevator has established itself as a trusted name in the vertical transportation industry, 
                specializing in comprehensive elevator solutions across residential, commercial, and healthcare sectors.
              </p>
              <p>
                With operations spanning from Dehradun to Delhi NCR, we have built a reputation for delivering 
                high-quality elevator installations, maintenance, and modernization services that prioritize 
                safety, efficiency, and customer satisfaction.
              </p>
              <p>
                Our commitment to excellence is reflected in our motto: "Service Satisfaction Guaranteed" - 
                a promise we uphold through every project, from initial consultation to long-term maintenance support.
              </p>
            </div>
          </div>
          
          <div>
            <Card className="h-full bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Service Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6" />
                    <span>Service Satisfaction Guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6" />
                    <span>Certified Quality Components</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6" />
                    <span>Expert Technical Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="h-6 w-6" />
                    <span>Complete Solutions Provider</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <p className="text-sm">
                    <strong>GSTIN:</strong> 07BDJPK9503M2Z3
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Range */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Complete Product Range
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Passenger Lifts</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  MRL and Machine Room systems, 4-20 persons capacity
                </p>
                <Badge variant="secondary">272-1360 kg</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-12 w-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">C</span>
                </div>
                <h3 className="font-semibold mb-2">Capsule Lifts</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Elegant design with panoramic views, 6-15 persons
                </p>
                <Badge variant="secondary">Premium Design</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-12 w-12 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">+</span>
                </div>
                <h3 className="font-semibold mb-2">Hospital Elevators</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Stretcher lifts for healthcare, 15-26 persons
                </p>
                <Badge variant="secondary">Medical Grade</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-12 w-12 mx-auto mb-4 bg-steel rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">D</span>
                </div>
                <h3 className="font-semibold mb-2">Dumbwaiters</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Food & service lifts, 100-250 kg capacity
                </p>
                <Badge variant="secondary">0.25 m/s</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Dehradun Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Blinkit Market, Canal Road, Dehradun
                </p>
                <PhoneButton 
                  number="+919990917708"
                  className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                >
                  +91 9990917708
                </PhoneButton>
                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground">Coverage Areas:</p>
                  <p className="text-sm text-muted-foreground">
                    Dehradun, Haridwar, Rishikesh, Mussoorie, Uttarakhand region
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Delhi Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Plot No. 50, Khasra No. 44/11, Nangloi, Village Safipur Ranhola, Nathan Vihar, New Delhi 110041
                </p>
                <PhoneButton 
                  number="+919667007059"
                  className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                >
                  +91 9667007059
                </PhoneButton>
                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground">Coverage Areas:</p>
                  <p className="text-sm text-muted-foreground">
                    Delhi NCR, Ghaziabad, Noida, Faridabad, Gurgaon
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Compliance & Standards */}
        <div className="bg-steel-light p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Compliance & Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Safety Standards</h3>
              <p className="text-sm text-muted-foreground">
                All installations comply with relevant IS codes and safety regulations
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Certified components from trusted international manufacturers
              </p>
            </div>
            <div className="text-center">
              <Wrench className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Technical Support</h3>
              <p className="text-sm text-muted-foreground">
                Expert installation, maintenance, and modernization services
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Technical Note:</strong> All dimensions are approximate and may vary by site conditions; 
              power supply: 440V 3-phase, 4-wire, 50 Hz and 230V single phase termination to ELCB/MCCB (client-provided).
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-primary rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-6">
            Experience the Bharti Elevator difference - where service satisfaction is guaranteed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PhoneButton
              number="+919990917708"
              className="bg-white text-primary hover:bg-steel-light transition-colors px-8 py-4 rounded-md font-semibold flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </PhoneButton>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Get Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;