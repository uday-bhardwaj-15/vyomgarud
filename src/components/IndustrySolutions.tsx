import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Gauge, Zap, CreditCard, Truck, Package } from "lucide-react";

const industries = [
  {
    icon: MapPin,
    title: "Asset Tracking",
    description: "Real-time GPS tracking for high-value assets with geofencing and predictive analytics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: Gauge,
    title: "Smart Metering",
    description: "Automated utility monitoring with remote diagnostics and consumption optimization",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: Zap,
    title: "EV Charging",
    description: "Smart charging infrastructure management with load balancing and remote control",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: CreditCard,
    title: "POS Systems",
    description: "Secure payment terminals with reliable connectivity and real-time transaction processing",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: Truck,
    title: "Telematics",
    description: "Vehicle tracking and fleet management with driver behavior analysis and maintenance alerts",
    image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: Package,
    title: "Logistics",
    description: "Supply chain optimization with real-time shipment tracking and route optimization",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=600&auto=format&fit=crop"
  }
];

const IndustrySolutions = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Industry Applications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Solutions for Every
            <span className="block text-gradient mt-2">Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            VyomGarud offers a range of IoT connectivity solutions for businesses of any size 
            and in any industry, from development to deployment to daily operations.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-orange"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <industry.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
