import { Truck, Shield, Scale, Factory } from "lucide-react";

const highlights = [
  {
    icon: Scale,
    title: "Bulk Supply",
    description:
      "From kilograms to thousands of tons, we handle orders of any scale with precision and reliability.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description:
      "Every batch undergoes rigorous quality testing to meet international industrial standards.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Timely delivery with our coordinated transportation network across all major industrial zones.",
  },
  {
    icon: Factory,
    title: "Industry-Focused",
    description:
      "Solutions tailored for construction, manufacturing, and chemical industry requirements.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Industrial Scale
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="card-industrial p-8 group"
            >
              <div className="w-14 h-14 rounded-lg bg-mineral-gold/10 flex items-center justify-center mb-6 group-hover:bg-mineral-gold/20 transition-colors">
                <item.icon className="w-7 h-7 text-mineral-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
