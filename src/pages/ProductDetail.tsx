import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Truck, Shield, ArrowRight } from "lucide-react";

import ironOreImg from "@/assets/mineral-iron-ore.jpg";
import bauxiteImg from "@/assets/mineral-bauxite.jpg";
import limestoneImg from "@/assets/mineral-limestone.jpg";
import quartzImg from "@/assets/mineral-quartz.jpg";
import feldsparImg from "@/assets/mineral-feldspar.jpg";
import coalImg from "@/assets/mineral-coal.jpg";

const mineralData: Record<string, {
  name: string;
  image: string;
  description: string;
  longDescription: string;
  applications: string[];
  grades: string[];
  packaging: string[];
  minOrder: string;
}> = {
  "iron-ore": {
    name: "Iron Ore",
    image: ironOreImg,
    description: "High-grade iron ore for steel manufacturing and construction.",
    longDescription: "Our iron ore is sourced from premium deposits, ensuring high iron content and low impurities. Ideal for steel manufacturing, construction reinforcement, and heavy industrial applications. We offer consistent quality that meets international metallurgical standards.",
    applications: ["Steel Production", "Construction Reinforcement", "Foundries", "Heavy Machinery Manufacturing"],
    grades: ["Fe 62%+", "Fe 58%", "Fe 55%", "Fines & Lumps"],
    packaging: ["Loose Bulk", "50kg Bags", "Jumbo Bags (1 Ton)"],
    minOrder: "10 Tons",
  },
  "bauxite": {
    name: "Bauxite",
    image: bauxiteImg,
    description: "Premium bauxite ore for aluminum extraction and refractories.",
    longDescription: "Our bauxite is characterized by high alumina content and low silica levels, making it ideal for aluminum smelting and refractory applications. Sourced from carefully selected deposits to ensure consistent quality for industrial processing.",
    applications: ["Aluminum Extraction", "Refractory Manufacturing", "Abrasive Production", "Cement Industry"],
    grades: ["High Alumina (>55%)", "Medium Grade", "Calcined Bauxite"],
    packaging: ["Loose Bulk", "50kg Bags", "Jumbo Bags (1 Ton)"],
    minOrder: "5 Tons",
  },
  "limestone": {
    name: "Limestone",
    image: limestoneImg,
    description: "Quality limestone for cement, construction, and chemical industries.",
    longDescription: "Our limestone products offer high calcium carbonate content with consistent chemical composition. Perfect for cement manufacturing, road construction, and chemical processing. Available in various sizes from powder to crushed aggregates.",
    applications: ["Cement Manufacturing", "Road Construction", "Chemical Processing", "Water Treatment"],
    grades: ["High Calcium (>95% CaCO3)", "Standard Grade", "Agricultural Lime"],
    packaging: ["Loose Bulk", "25kg Bags", "50kg Bags", "Jumbo Bags"],
    minOrder: "20 Tons",
  },
  "quartz": {
    name: "Quartz",
    image: quartzImg,
    description: "Pure quartz crystals for glass, electronics, and industrial use.",
    longDescription: "Premium quality quartz with high silica content and exceptional purity. Essential for glass manufacturing, electronics, and semiconductor industries. Our quartz undergoes rigorous quality testing to ensure it meets the stringent requirements of high-tech applications.",
    applications: ["Glass Manufacturing", "Electronics", "Semiconductor Industry", "Solar Panels"],
    grades: ["Ultra-Pure (>99.5% SiO2)", "High Purity", "Industrial Grade"],
    packaging: ["50kg Bags", "Jumbo Bags (1 Ton)", "Custom Packaging"],
    minOrder: "1 Ton",
  },
  "feldspar": {
    name: "Feldspar",
    image: feldsparImg,
    description: "Industrial feldspar for ceramics, glass, and pottery production.",
    longDescription: "Our feldspar products are carefully processed to maintain optimal alkali content and low iron levels. Ideal for ceramic and glass industries, providing excellent fluxing properties and enhanced product durability.",
    applications: ["Ceramics Manufacturing", "Glass Production", "Tile Making", "Pottery"],
    grades: ["Potash Feldspar", "Soda Feldspar", "Ceramic Grade"],
    packaging: ["50kg Bags", "Jumbo Bags (1 Ton)", "Loose Bulk"],
    minOrder: "5 Tons",
  },
  "coal": {
    name: "Coal",
    image: coalImg,
    description: "High-calorific coal for power generation and industrial heating.",
    longDescription: "Our coal offerings feature high calorific value with controlled ash and sulfur content. Sourced from established mines, our coal is ideal for power generation, industrial boilers, and manufacturing processes requiring consistent heat output.",
    applications: ["Power Generation", "Industrial Boilers", "Cement Kilns", "Manufacturing"],
    grades: ["Indonesian Coal (5500+ GCV)", "Indian Coal", "Imported Varieties"],
    packaging: ["Loose Bulk Only"],
    minOrder: "50 Tons",
  },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const mineral = mineralData[id || ""];

  if (!mineral) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Mineral Not Found</h1>
          <Link to="/products">
            <Button variant="heroOutline">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 bg-card">
        <div className="container mx-auto px-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-mineral-gold transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Hero */}
      <section className="pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={mineral.image}
                alt={mineral.name}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
            </div>

            {/* Details */}
            <div className="py-8">
              <span className="text-mineral-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                Industrial Mineral
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {mineral.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {mineral.longDescription}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-background border border-border">
                  <Package className="w-6 h-6 text-mineral-gold mx-auto mb-2" />
                  <span className="text-xs text-muted-foreground block">Min. Order</span>
                  <span className="text-sm font-semibold text-foreground">{mineral.minOrder}</span>
                </div>
                <div className="text-center p-4 rounded-lg bg-background border border-border">
                  <Truck className="w-6 h-6 text-mineral-gold mx-auto mb-2" />
                  <span className="text-xs text-muted-foreground block">Delivery</span>
                  <span className="text-sm font-semibold text-foreground">Pan-India</span>
                </div>
                <div className="text-center p-4 rounded-lg bg-background border border-border">
                  <Shield className="w-6 h-6 text-mineral-gold mx-auto mb-2" />
                  <span className="text-xs text-muted-foreground block">Quality</span>
                  <span className="text-sm font-semibold text-foreground">Certified</span>
                </div>
              </div>

              {/* CTA */}
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full">
                  Request Quote for {mineral.name}
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Applications */}
            <div className="card-industrial p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Industrial Applications</h3>
              <ul className="space-y-2">
                {mineral.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-mineral-gold" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Grades */}
            <div className="card-industrial p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Available Grades</h3>
              <ul className="space-y-2">
                {mineral.grades.map((grade, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-mineral-gold" />
                    {grade}
                  </li>
                ))}
              </ul>
            </div>

            {/* Packaging */}
            <div className="card-industrial p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Packaging Options</h3>
              <ul className="space-y-2">
                {mineral.packaging.map((pkg, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-mineral-gold" />
                    {pkg}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
