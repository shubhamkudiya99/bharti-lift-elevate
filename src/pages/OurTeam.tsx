import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { PhoneButton } from "@/components/ui/phone";
import SunilImage from "../assets/sunil.jpeg";
import ManishImage from "../assets/manish.jpeg";
import SushilImage from "../assets/sushil.jpeg";

const OurTeam = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            “Leadership is about creating trust, building vision, and inspiring growth.”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img src={SunilImage} alt="Sunil Paliwal" className="w-24 h-24 rounded-md" />
                <CardTitle className="text-2xl">Director/CEO - ER. Sunil Paliwal</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">ER. Sunil Paliwal is the backbone of Bharti Elevators.</p>
              <p className="text-sm text-muted-foreground mb-4">
                With over 25+ years of technical and management experience, he leads the company with a strong
                focus on Quality, Safety, and Customer Satisfaction.
              </p>

              <div className="mt-4 p-4 bg-steel-light rounded">
                <h3 className="font-semibold mb-2">Message from the Director</h3>
                <p className="text-sm text-muted-foreground">
                  “Our goal is not just to build elevators, but to deliver a safe, smooth, and reliable vertical
                  movement experience. Quality is our commitment, and trust is our identity.”
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img src={ManishImage} alt="Manish Paliwal" className="w-24 h-24 rounded-md" />
                <CardTitle className="text-2xl">Co-Founder – ER. Manish Paliwal</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Manish Paliwal represents the young and dynamic vision of Bharti Elevators.</p>
              <p className="text-sm text-muted-foreground mb-4">
                He focuses on innovation, branding, modern technology adoption, and ensuring a seamless customer
                experience.
              </p>

              <div className="mt-4 p-4 bg-steel-light rounded">
                <h3 className="font-semibold mb-2">Message from the Co-Founder</h3>
                <p className="text-sm text-muted-foreground">
                  “Our mission is to deliver modern, reliable, and budget-friendly elevator solutions for every home
                  and business. We believe every customer is family, and their comfort and safety come first.”
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img src={SushilImage} alt="ER. Sushil Paliwal" className="w-24 h-24 rounded-md" />
                <CardTitle className="text-2xl">Marketing Head – ER. Sushil Paliwal</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">ER. Sushil Paliwal — Marketing Head</p>
              <p className="text-sm text-muted-foreground mb-4">
                As the Marketing Head with 15+ years of experience, he brings sharp business insight, strong communication skills, and a deep
                understanding of customer needs. His approach blends data-driven planning with creative execution,
                ensuring that every campaign delivers real results.
              </p>

              <p className="text-sm text-muted-foreground mb-4">
                He is known for being hardworking, dedicated, and highly disciplined, leading the marketing team with
                clarity and motivation. His ability to understand the market, build trust with clients, and create
                impactful branding makes him a key pillar of Bharti Elevators.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <PhoneButton
            number="+919990917708"
            className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-md inline-flex items-center gap-2"
          >
            Contact Us
          </PhoneButton>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
