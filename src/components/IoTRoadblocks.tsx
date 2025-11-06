import { Shield, Wifi, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const roadblocks = [
  {
    icon: Shield,
    title: "Security Challenges",
    description: "End-to-end encryption and secure boot protocols protect your mission-critical data"
  },
  {
    icon: Wifi,
    title: "Connectivity Issues",
    description: "Redundant network coverage ensures uninterrupted operations in any environment"
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Seamless connectivity across borders with multi-network failover capabilities"
  }
];

const IoTRoadblocks = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Move Past the Roadblocks
            <span className="block text-gradient mt-2">in IoT Connectivity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            VyomGarud's advanced UAV systems eliminate traditional connectivity challenges 
            with military-grade solutions designed for reliability and security.
          </p>
        </div>

        {/* Roadblocks Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roadblocks.map((roadblock, index) => (
            <div 
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-orange"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <roadblock.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{roadblock.title}</h3>
              <p className="text-muted-foreground">{roadblock.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 shadow-orange hover:shadow-glow transition-all duration-300"
          >
            Learn More About Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IoTRoadblocks;
