import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    description: "High-grade iron ore for steel manufacturing, construction reinforcement, and heavy industry applications.",
    image: ironOreImg,
    applications: ["Steel Production", "Construction", "Heavy Industry"],
    availability: "Bulk: 10 Tons - 10,000 Tons",
  },
  {
    id: "bauxite",
    name: "Bauxite",
    description: "Premium quality bauxite ore for aluminum extraction, refractory production, and abrasive manufacturing.",
    image: bauxiteImg,
    applications: ["Aluminum Industry", "Refractories", "Abrasives"],
    availability: "Bulk: 5 Tons - 5,000 Tons",
  },
  {
    id: "limestone",
    name: "Limestone",
    description: "Industrial-grade limestone for cement production, road construction, and chemical processing.",
    image: limestoneImg,
    applications: ["Cement", "Construction", "Chemicals"],
    availability: "Bulk: 20 Tons - 20,000 Tons",
  },
  {
    id: "quartz",
    name: "Quartz",
    description: "High-purity quartz crystals for glass manufacturing, electronics, and semiconductor industries.",
    image: quartzImg,
    applications: ["Glass Making", "Electronics", "Semiconductors"],
    availability: "Bulk: 1 Ton - 2,000 Tons",
  },
  {
    id: "feldspar",
    name: "Feldspar",
    description: "Quality feldspar for ceramics, glass production, pottery, and tile manufacturing.",
    image: feldsparImg,
    applications: ["Ceramics", "Glass", "Tiles"],
    availability: "Bulk: 5 Tons - 3,000 Tons",
  },
  {
    id: "coal",
    name: "Coal",
    description: "High-calorific value coal for power generation, industrial heating, and manufacturing processes.",
    image: coalImg,
    applications: ["Power Plants", "Industrial Heating", "Manufacturing"],
    availability: "Bulk: 50 Tons - 50,000 Tons",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Industrial <span className="text-gradient-gold">Minerals</span> Catalog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Browse our comprehensive range of premium-quality minerals. All products
              are quality-tested and available in bulk quantities for industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {minerals.map((mineral) => (
              <div key={mineral.id} className="card-industrial overflow-hidden group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={mineral.image}
                    alt={mineral.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-mineral-gold transition-colors">
                    {mineral.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {mineral.description}
                  </p>

                  {/* Applications */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mineral.applications.map((app, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  {/* Availability */}
                  <div className="pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {mineral.availability}
                    </span>
                    <Link to={`/products/${mineral.id}`}>
                      <Button variant="ghost" size="sm" className="text-mineral-gold hover:text-mineral-amber">
                        View Details
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need a Custom Order?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for specific grades, quantities, or minerals not listed here.
            Our team will work with you to meet your requirements.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Request Custom Quote
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
