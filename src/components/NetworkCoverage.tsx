import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const NetworkCoverage = () => {
  const features = [
    "Access to 680+ networks in 180+ countries",
    "Choose the best networks for your mission",
    "Redundant coverage for critical operations",
    "Always connected to strongest signal",
    "Real-time network switching",
    "Military-grade security protocols"
  ];

  return (
    <section className="py-24 px-4 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/3] bg-gradient-hero rounded-lg overflow-hidden border border-primary/20 shadow-orange">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
                alt="Global network coverage visualization"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            {/* Decorative Corner */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Network Coverage
              </span>
              <div className="h-1 w-20 bg-primary mt-2" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Expansive Cellular
              <span className="block text-gradient">Coverage</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose your network coverage and gain access to 680+ networks in 180+ countries. 
              Choose the best networks for your business, ensuring redundant coverage and always 
              connecting to the strongest, most stable signal.
            </p>

            {/* Features List */}
            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-orange hover:shadow-glow transition-all duration-300"
              >
                View Networks
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkCoverage;
