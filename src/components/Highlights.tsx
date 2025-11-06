import { Cpu, Radio, Lock } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "AI-Powered Autonomy",
    description: "Advanced machine learning algorithms enable intelligent decision-making and adaptive mission execution without human intervention."
  },
  {
    icon: Radio,
    title: "Long-Range Communications",
    description: "Encrypted satellite and radio links provide secure, uninterrupted control and data transmission over extended distances."
  },
  {
    icon: Lock,
    title: "Military-Grade Security",
    description: "Multi-layer encryption, secure boot, and tamper-resistant hardware ensure mission-critical data protection."
  }
];

const Highlights = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose VyomGarud
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Industry-Leading Features
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-8 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary/50 transition-all duration-500 hover:shadow-orange h-full">
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  {/* Decorative Corner */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
