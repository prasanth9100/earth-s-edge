import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-mining.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial mining landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="animate-fade-up">
            <span className="inline-block text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-6 border border-mineral-gold/30 px-4 py-2 rounded-full">
              Powering Industry Since Decades
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-up animation-delay-100 text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            Supplying Industrial{" "}
            <span className="text-gradient-gold">Minerals</span> That Build{" "}
            <span className="text-gradient-gold">The Future</span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Premium quality minerals delivered at scale. From iron ore to limestone, we
            supply the raw materials that power construction, manufacturing, and
            chemical industries across the region.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Request a Quote
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="heroOutline" size="xl">
                Explore Minerals
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-up animation-delay-400 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/30">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "50K+", label: "Tons Delivered" },
              { value: "200+", label: "Active Clients" },
              { value: "6", label: "Mineral Types" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="stat-value">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-mineral-gold transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
