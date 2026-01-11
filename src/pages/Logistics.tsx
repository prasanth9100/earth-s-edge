import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Truck,
  MapPin,
  Clock,
  FileCheck,
  ArrowRight,
  Route,
  Package,
  PhoneCall,
} from "lucide-react";

const capabilities = [
  {
    icon: Truck,
    title: "Bulk Transportation",
    description: "Fleet of heavy-duty trucks capable of handling large-scale mineral shipments across regions.",
  },
  {
    icon: Route,
    title: "Route Optimization",
    description: "Strategic route planning to minimize transit time and ensure cost-effective delivery.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Committed delivery schedules with real-time updates and proactive communication.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Complete paperwork including weighment slips, quality certificates, and delivery receipts.",
  },
];

const serviceAreas = [
  "Hyderabad & Telangana",
  "Andhra Pradesh",
  "Karnataka",
  "Maharashtra",
  "Tamil Nadu",
  "Pan-India (On Request)",
];

const Logistics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Logistics & Supply Chain
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Reliable <span className="text-gradient-gold">Delivery</span> Network
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our coordinated logistics network ensures your minerals reach your facility
              on time, every time. From bulk transportation to last-mile delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              End-to-End Logistics
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => (
              <div key={index} className="card-industrial p-8">
                <div className="w-14 h-14 rounded-lg bg-mineral-gold/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-mineral-gold" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Delivery Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", icon: Package, title: "Order Confirmation", desc: "Your order is confirmed and scheduled for dispatch" },
              { step: "02", icon: Truck, title: "Loading & Dispatch", desc: "Materials are loaded with proper documentation" },
              { step: "03", icon: Route, title: "In Transit", desc: "Real-time tracking and status updates provided" },
              { step: "04", icon: MapPin, title: "Delivery", desc: "On-site delivery with weighment verification" },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="inline-block">
                  <span className="font-display text-6xl text-mineral-gold/20 block">
                    {item.step}
                  </span>
                  <div className="w-16 h-16 rounded-full bg-mineral-gold/10 flex items-center justify-center mx-auto -mt-4">
                    <item.icon className="w-8 h-8 text-mineral-gold" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>

                {/* Connector */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-mineral-gold/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                Coverage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Service Areas
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our logistics network covers major industrial zones across South and
                Central India. For locations outside our regular coverage, we arrange
                special transportation on request.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.map((area, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                  >
                    <MapPin className="w-5 h-5 text-mineral-gold shrink-0" />
                    <span className="text-foreground text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="card-industrial p-8">
              <div className="text-center">
                <PhoneCall className="w-12 h-12 text-mineral-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Need Custom Logistics?
                </h3>
                <p className="text-muted-foreground mb-6">
                  For special delivery requirements, bulk shipments, or locations outside
                  our regular network, contact our logistics team.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Contact Logistics Team
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Logistics;
