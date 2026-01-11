import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-mineral-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mineral-copper/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Power Your{" "}
            <span className="text-gradient-gold">Operations</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you need bulk minerals for a major project or regular supply for
            ongoing operations, our team is ready to discuss your requirements and provide
            a competitive quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Request a Quote
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              <Phone size={20} />
              +91 40 1234 5678
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Typically respond within 24 hours • No obligations
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
