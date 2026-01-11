import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, ArrowRight, Users, Award, Handshake, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Uncompromising standards in every shipment, meeting international industrial specifications.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description: "Building long-term relationships with transparent communication and reliable service.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Evolving with industry demands while maintaining our core commitment to quality.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Every decision is made with our clients' operational success in mind.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building Industry Through{" "}
              <span className="text-gradient-gold">Earth's Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nagarajuna Minerals has been a cornerstone of industrial mineral supply,
              serving the construction, manufacturing, and chemical sectors with
              unwavering commitment to quality and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Local Roots to Industrial Leader
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between quality mineral resources
                  and industrial demand, Nagarajuna Minerals has grown from a modest
                  operation to a trusted name in the B2B minerals sector.
                </p>
                <p>
                  Our journey began with a simple belief: that every industrial project
                  deserves access to premium-grade raw materials, delivered with
                  consistency and reliability. Today, we serve hundreds of clients across
                  multiple industries, handling thousands of tons of minerals annually.
                </p>
                <p>
                  With deep roots in the region and extensive knowledge of local and
                  international mineral sources, we've built a reputation for excellence
                  that our clients depend on for their most critical operations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "Years in Business" },
                { value: "200+", label: "Active Clients" },
                { value: "6", label: "Mineral Types" },
                { value: "50K+", label: "Tons/Year" },
              ].map((stat, i) => (
                <div key={i} className="card-industrial p-6 text-center">
                  <div className="stat-value text-4xl">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-lg border border-border bg-background/50">
              <div className="w-14 h-14 rounded-lg bg-mineral-gold/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-mineral-gold" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most reliable supplier of industrial minerals, delivering
                consistent quality, competitive pricing, and exceptional service to
                support our clients' operational excellence and growth.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-lg border border-border bg-background/50">
              <div className="w-14 h-14 rounded-lg bg-mineral-gold/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-mineral-gold" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading industrial minerals partner in the region,
                recognized for our commitment to quality, sustainability, and the
                success of industries we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-industrial p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-mineral-gold/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-mineral-gold" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses that trust Nagarajuna Minerals for their
            industrial raw material needs.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Get in Touch
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
