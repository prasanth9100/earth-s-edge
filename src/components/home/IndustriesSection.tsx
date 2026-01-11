import { Building2, Factory, FlaskConical } from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Construction",
    description:
      "Supplying essential raw materials for infrastructure projects, road construction, and building development.",
    minerals: ["Limestone", "Iron Ore", "Quartz"],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Premium grade minerals for steel plants, aluminum smelters, glass factories, and industrial production.",
    minerals: ["Iron Ore", "Bauxite", "Feldspar"],
  },
  {
    icon: FlaskConical,
    name: "Chemical Industries",
    description:
      "High-purity minerals and raw materials for chemical processing, pharmaceuticals, and specialized applications.",
    minerals: ["Quartz", "Limestone", "Coal"],
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--mineral-gold))_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powering Multiple Sectors
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Our minerals form the backbone of critical industries, enabling infrastructure
            development, manufacturing excellence, and industrial innovation.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative p-8 rounded-lg border border-border bg-background/50 backdrop-blur-sm group hover:border-mineral-gold/30 transition-all duration-500"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-mineral-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-mineral-gold/20 to-mineral-copper/10 flex items-center justify-center mb-6">
                <industry.icon className="w-8 h-8 text-mineral-gold" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">{industry.name}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {industry.description}
              </p>

              <div className="pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Key Minerals:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {industry.minerals.map((mineral, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded bg-mineral-gold/10 text-mineral-gold"
                    >
                      {mineral}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
