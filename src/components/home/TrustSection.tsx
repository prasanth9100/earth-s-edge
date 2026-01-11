import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const trustPoints = [
  "15+ years of industry experience",
  "Quality-tested materials meeting international standards",
  "Transparent sourcing and documentation",
  "Flexible bulk ordering options",
  "Dedicated account managers for B2B clients",
  "Pan-regional logistics network",
];

const TrustSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Trust & Reliability
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              A Partner You Can{" "}
              <span className="text-gradient-gold">Depend On</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At Nagarajuna Minerals, we understand that industrial operations demand
              consistency, quality, and reliability. Our commitment to excellence has made
              us a trusted supplier for leading construction, manufacturing, and chemical
              companies across the region.
            </p>

            <ul className="space-y-4 mb-10">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mineral-gold shrink-0 mt-0.5" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <Link to="/about">
              <Button variant="heroOutline" size="lg">
                Learn More About Us
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "98%", label: "Client Satisfaction", sublabel: "Based on 2024 survey" },
              { value: "24hr", label: "Quote Response", sublabel: "Average turnaround" },
              { value: "50K+", label: "Tons Delivered", sublabel: "This year alone" },
              { value: "Zero", label: "Quality Rejections", sublabel: "In last 3 years" },
            ].map((stat, index) => (
              <div
                key={index}
                className="card-industrial p-6 text-center"
              >
                <div className="stat-value text-4xl md:text-5xl">{stat.value}</div>
                <div className="text-foreground font-semibold mt-2">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
