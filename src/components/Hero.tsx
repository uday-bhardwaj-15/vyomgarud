import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Multiple sources for better compatibility */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-15"
        >
          {/* Drone footage video */}
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.pixabay.com/video/2023/07/25/173041-849196651_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Animated Badge */}

          {/* Main Heading with Text Animation */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fade-in-up">
            <span className="block mb-4">VyomGarud</span>
            <span className="block animate-text-shimmer text-5xl md:text-6xl">
              Military-Grade Precision
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Engineering the future of autonomous aerial systems with
            cutting-edge technology and uncompromising reliability for defense
            and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="group px-8 py-6 text-lg bg-primary hover:bg-primary/90 shadow-orange hover:shadow-glow transition-all duration-300"
            >
              Explore Our Systems
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16 animate-fade-in animation-delay-600">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                500+
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Flight Hours
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Reliability
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                24/7
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
