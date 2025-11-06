const About = () => {
  return (
    <section className="py-24 px-4 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About VyomGarud
              </span>
              <div className="h-1 w-20 bg-primary mt-2" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Engineering Tomorrow's
              <span className="block text-gradient">Aerial Dominance</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              VyomGarud is a pioneering defense technology company specializing in advanced 
              unmanned aerial vehicle (UAV) systems. Our mission is to deliver cutting-edge 
              autonomous drones with military-grade precision, reliability, and performance.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine aerospace engineering excellence with AI-powered autonomy to create 
              UAV solutions that redefine what's possible in defense, surveillance, and 
              tactical operations.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <p className="font-semibold">Defense-Ready</p>
                  <p className="text-sm text-muted-foreground">Military-grade systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <p className="font-semibold">AI-Powered</p>
                  <p className="text-sm text-muted-foreground">Autonomous operations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <p className="font-semibold">Proven Reliability</p>
                  <p className="text-sm text-muted-foreground">Mission-critical performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <p className="font-semibold">Custom Solutions</p>
                  <p className="text-sm text-muted-foreground">Tailored to your needs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-hero rounded-lg overflow-hidden border border-primary/20 shadow-orange">
              <img 
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop"
                alt="Military drone in flight"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-primary/30 rounded-lg -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/30 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
