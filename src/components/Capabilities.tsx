import { Card, CardContent } from "@/components/ui/card";
import { Plane, Shield, Zap, Target } from "lucide-react";

const capabilities = [
  {
    icon: Plane,
    title: "Autonomous UAV Systems",
    description: "Advanced unmanned aerial vehicles with fully autonomous flight capabilities, precision navigation, and real-time mission adaptation.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: Shield,
    title: "Defense Solutions",
    description: "Military-grade systems designed for tactical operations, surveillance, and reconnaissance with encrypted communications.",
    image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: Zap,
    title: "Advanced Flight Control",
    description: "State-of-the-art flight controllers with AI-powered stabilization, obstacle avoidance, and adaptive learning algorithms.",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "High-accuracy payload delivery and reconnaissance systems with thermal imaging and advanced sensor fusion technology.",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=600&auto=format&fit=crop"
  }
];

const Capabilities = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Advanced UAV Technology
            <span className="block text-gradient mt-2">Built for Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cutting-edge drone systems engineered for the most demanding missions
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-orange"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={capability.image}
                    alt={capability.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute bottom-6 left-6 w-14 h-14 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <capability.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
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

export default Capabilities;
