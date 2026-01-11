import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Shield, Warehouse, Truck, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Material Sourcing",
    description: "Strategic sourcing from verified mines and suppliers, ensuring consistent quality and supply reliability.",
    details: [
      "Verified supplier network",
      "Quality pre-assessment",
      "Origin documentation",
      "Supply consistency monitoring",
    ],
  },
  {
    step: "02",
    icon: Shield,
    title: "Quality Control",
    description: "Rigorous quality testing at multiple stages to ensure materials meet industrial specifications.",
    details: [
      "Chemical composition analysis",
      "Physical property testing",
      "Grade verification",
      "Batch certification",
    ],
  },
  {
    step: "03",
    icon: Warehouse,
    title: "Storage & Handling",
    description: "Professional storage facilities maintaining material integrity and preventing contamination.",
    details: [
      "Climate-controlled storage",
      "Segregated material bays",
      "Inventory management",
      "FIFO dispatch system",
    ],
  },
  {
    step: "04",
    icon: Truck,
    title: "Dispatch & Delivery",
    description: "Coordinated logistics ensuring timely delivery with proper documentation and tracking.",
    details: [
      "Fleet coordination",
      "Route optimization",
      "Real-time tracking",
      "Delivery confirmation",
    ],
  },
];

const MaterialManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Material <span className="text-gradient-gold">Management</span> System
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our comprehensive material management approach ensures quality, traceability,
              and reliability at every stage—from source to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-display text-5xl text-mineral-gold/30">
                      {step.step}
                    </span>
                    <div className="w-14 h-14 rounded-lg bg-mineral-gold/10 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-mineral-gold" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-mineral-gold shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="aspect-square max-w-md mx-auto rounded-lg bg-gradient-to-br from-card to-background border border-border flex items-center justify-center">
                      <step.icon className="w-32 h-32 text-mineral-gold/20" />
                    </div>
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute left-1/2 -bottom-16 w-px h-16 bg-gradient-to-b from-mineral-gold/50 to-transparent" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Experience Our Quality Process
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us and benefit from our systematic approach to material
            management that ensures consistency and reliability for your operations.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Start Your Inquiry
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaterialManagement;
