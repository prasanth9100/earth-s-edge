import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import ironOreImg from "@/assets/mineral-iron-ore.jpg";
import bauxiteImg from "@/assets/mineral-bauxite.jpg";
import limestoneImg from "@/assets/mineral-limestone.jpg";
import quartzImg from "@/assets/mineral-quartz.jpg";
import feldsparImg from "@/assets/mineral-feldspar.jpg";
import coalImg from "@/assets/mineral-coal.jpg";

const minerals = [
  {
    id: "iron-ore",
    name: "Iron Ore",
    description: "High-grade iron ore for steel manufacturing and construction.",
    image: ironOreImg,
    applications: ["Steel Production", "Construction"],
  },
  {
    id: "bauxite",
    name: "Bauxite",
    description: "Premium bauxite ore for aluminum extraction and refractories.",
    image: bauxiteImg,
    applications: ["Aluminum Industry", "Refractories"],
  },
  {
    id: "limestone",
    name: "Limestone",
    description: "Quality limestone for cement, construction, and chemical industries.",
    image: limestoneImg,
    applications: ["Cement", "Chemicals"],
  },
  {
    id: "quartz",
    name: "Quartz",
    description: "Pure quartz crystals for glass, electronics, and industrial use.",
    image: quartzImg,
    applications: ["Glass Making", "Electronics"],
  },
  {
    id: "feldspar",
    name: "Feldspar",
    description: "Industrial feldspar for ceramics, glass, and pottery production.",
    image: feldsparImg,
    applications: ["Ceramics", "Glass"],
  },
  {
    id: "coal",
    name: "Coal",
    description: "High-calorific coal for power generation and industrial heating.",
    image: coalImg,
    applications: ["Power Plants", "Industries"],
  },
];

const FeaturedMinerals = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div>
            <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Our Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Minerals
            </h2>
            <div className="section-divider" />
          </div>
          <Link to="/products">
            <Button variant="heroOutline" size="lg">
              View All Products
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>

        {/* Minerals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {minerals.map((mineral) => (
            <Link
              key={mineral.id}
              to={`/products/${mineral.id}`}
              className="group"
            >
              <div className="card-industrial overflow-hidden">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={mineral.image}
                    alt={mineral.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-mineral-gold transition-colors">
                    {mineral.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {mineral.description}
                  </p>
                  <div className="flex gap-2">
                    {mineral.applications.map((app, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMinerals;
