import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PhoneButton } from "@/components/ui/phone";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch for expert consultation, quotes, and service support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Request a Quote</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your full name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+91 XXXXX XXXXX" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Your city" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="project-type">Project Type *</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select elevator type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="passenger">Passenger Lift</SelectItem>
                        <SelectItem value="capsule">Capsule Lift</SelectItem>
                        <SelectItem value="hospital">Hospital Elevator</SelectItem>
                        <SelectItem value="dumbwaiter">Dumbwaiter</SelectItem>
                        <SelectItem value="freight">Freight Elevator</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="capacity">Capacity/Persons</Label>
                    <Input id="capacity" placeholder="e.g., 8 persons" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="speed">Expected Speed</Label>
                    <Input id="speed" placeholder="e.g., 1.0 m/s" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="door-type">Door Type</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select door type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automatic">Automatic Telescopic</SelectItem>
                      <SelectItem value="manual">Manual Telescopic</SelectItem>
                      <SelectItem value="center">Center Opening</SelectItem>
                      <SelectItem value="channel">Channel Gate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Please provide any additional details about your project requirements..."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Submit Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Office Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Emergency only</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dehradun Office */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Dehradun Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Blinkit Market, Canal Road, Dehradun, Himachal Pradesh, Punjab, Amritsar, Bhatinda
                </p>
                <div className="space-y-2">
                  <PhoneButton 
                    number="+919990917708"
                    className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                  >
                    +91 9990917708
                  </PhoneButton>
                  <a href="mailto:bhartielevator1@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    bhartielevator1@gmail.com
                  </a>
                  <div className="flex space-x-2">
                    <Button variant="primary" size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="steel" size="sm" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delhi Office */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Delhi Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  PAN India, Plot No. 50, Khasra No. 44/11, Nangloi, Village Safipur Ranhola, Nathan Vihar, New Delhi 110041
                </p>
                <div className="space-y-2">
                  <PhoneButton 
                    number="+919667007059"
                    className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                  >
                    +91 9667007059
                  </PhoneButton>
                  <PhoneButton 
                    number="+918076390964"
                    className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                  >
                    +91 8076390964
                  </PhoneButton>
                  <a 
                    href="mailto:bhartielevator1@gmail.com"
                    className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    elevatorbharti@gmail.com
                  </a>
                  <div className="flex space-x-2">
                    <Button variant="primary" size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="steel" size="sm" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Brochure */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Download Brochure</CardTitle>
                <CardDescription className="text-primary-foreground/90">
                  Get detailed product specifications and technical information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Download PDF Brochure
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;