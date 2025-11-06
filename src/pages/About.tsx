import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Target, Award, Rocket, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Focused",
      description: "Every system we build is designed with operational excellence and mission success as the primary objective."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Military-grade security protocols are embedded in every layer of our technology stack."
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Continuous R&D investment keeps us at the forefront of autonomous aerial technology."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous testing and validation ensure our systems meet the highest reliability standards."
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "VyomGarud established with vision for defense-grade UAV systems" },
    { year: "2021", title: "First Prototype", description: "Successful maiden flight of autonomous navigation system" },
    { year: "2022", title: "Defense Partnership", description: "Strategic partnerships with defense organizations" },
    { year: "2023", title: "Production Scale", description: "Mass production capabilities and expanded operations" },
    { year: "2024", title: "Global Expansion", description: "International deployment and 680+ network coverage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-7xl">
          <Link to="/">
            <Button variant="outline" size="sm" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About VyomGarud
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Engineering the Future of
              <span className="block text-gradient mt-2">Aerial Autonomy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              VyomGarud is pioneering the next generation of unmanned aerial vehicle systems 
              with military-grade precision, AI-powered autonomy, and uncompromising reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Our Mission
                </span>
                <div className="h-1 w-20 bg-primary mt-2" />
              </div>
              <h2 className="text-3xl font-bold">Redefining Aerial Defense</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To deliver cutting-edge unmanned aerial systems that combine aerospace engineering 
                excellence with artificial intelligence, providing defense and commercial sectors 
                with reliable, autonomous solutions for the most challenging missions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in pushing the boundaries of what's possible in autonomous flight, 
                ensuring every system we build sets new standards for performance, safety, and reliability.
              </p>
            </div>

            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Our Vision
                </span>
                <div className="h-1 w-20 bg-primary mt-2" />
              </div>
              <h2 className="text-3xl font-bold">Global Leader in UAV Technology</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the world's most trusted provider of autonomous aerial systems, 
                recognized for innovation, reliability, and mission success across defense, 
                surveillance, and tactical operations globally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a future where our UAV systems are the cornerstone of national 
                security infrastructure, providing unmatched situational awareness and operational capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do at VyomGarud
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-orange"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in VyomGarud's evolution
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="flex gap-8 items-start group"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-3xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="relative flex-shrink-0 w-4 h-4 mt-2">
                  <div className="absolute w-4 h-4 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-0.5 h-20 bg-border -translate-x-1/2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team combines decades of experience in aerospace engineering, 
              defense technology, and artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Engineers & Experts</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-16 h-16 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-muted-foreground">Years Combined Experience</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Rocket className="w-16 h-16 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">15+</h3>
              <p className="text-muted-foreground">Patents Filed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Partner with VyomGarud to deploy next-generation UAV systems for your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-orange hover:shadow-glow transition-all duration-300"
              >
                Get In Touch
              </Button>
            </Link>
            <Link to="/">
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
