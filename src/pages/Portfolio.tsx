import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Building2, Store, Car, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

import serviceSignage from "@/assets/service-signage.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import servicePrints from "@/assets/service-prints.jpg";

type Category = "all" | "signage" | "branding" | "vehicle" | "prints";

interface Project {
  id: string;
  title: string;
  category: Category;
  client: string;
  description: string;
  image: string;
  results: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Retail Store Rebrand",
    category: "branding",
    client: "Mthatha Fashion Hub",
    description: "Complete brand identity overhaul including logo design, color palette, and brand guidelines for a leading fashion retailer.",
    image: serviceBranding,
    results: ["40% increase in foot traffic", "Brand recognition improved", "Customer trust elevated"],
  },
  {
    id: "2",
    title: "Corporate Office Signage",
    category: "signage",
    client: "Eastern Cape Legal Associates",
    description: "Premium indoor and outdoor signage installation for a prestigious law firm, including illuminated entrance signs and wayfinding.",
    image: serviceSignage,
    results: ["Professional presence established", "Client navigation improved", "24/7 visibility"],
  },
  {
    id: "3",
    title: "Fleet Vehicle Branding",
    category: "vehicle",
    client: "Swift Logistics Mthatha",
    description: "Full fleet wrap and branding for 12 delivery vehicles, turning every trip into a mobile advertisement.",
    image: serviceBranding,
    results: ["Mobile advertising 24/7", "Brand awareness doubled", "Professional fleet image"],
  },
  {
    id: "4",
    title: "Restaurant Launch Package",
    category: "branding",
    client: "Umtata Grill House",
    description: "Complete branding package including logo, menu design, signage, and marketing materials for a new restaurant opening.",
    image: servicePrints,
    results: ["Successful grand opening", "Strong brand identity", "Social media buzz created"],
  },
  {
    id: "5",
    title: "Shopping Center Directory",
    category: "signage",
    client: "Mthatha Mall",
    description: "Large-scale directory signage and wayfinding system for a major shopping center with 50+ stores.",
    image: serviceSignage,
    results: ["Customer navigation simplified", "Professional mall image", "Reduced customer complaints"],
  },
  {
    id: "6",
    title: "Business Card & Stationery",
    category: "prints",
    client: "Dr. Nkosi Medical Practice",
    description: "Premium business cards, letterheads, and prescription pads with gold foil accents for a medical practice.",
    image: servicePrints,
    results: ["Professional patient impression", "Cohesive brand materials", "Quality that reflects expertise"],
  },
];

const categories = [
  { id: "all" as Category, label: "All Projects", icon: Building2 },
  { id: "signage" as Category, label: "Signage", icon: Building2 },
  { id: "branding" as Category, label: "Branding", icon: Store },
  { id: "vehicle" as Category, label: "Vehicle", icon: Car },
  { id: "prints" as Category, label: "Prints", icon: Printer },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container px-6 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-ivory-muted hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient-gold">Portfolio</span>
            </h1>
            <p className="text-lg text-ivory-muted max-w-2xl">
              See how we've transformed businesses across Mthatha and the Eastern Cape with 
              premium branding and signage solutions that deliver real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-y border-border bg-charcoal-light/50">
        <div className="container px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "gold" : "dark"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className="gap-2"
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-primary font-medium mb-2">{project.client}</p>
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-ivory-muted text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="border-t border-border pt-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Results</p>
                      <ul className="space-y-1">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-ivory-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ivory-muted">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-charcoal-light">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient-gold">Case Study</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={serviceSignage}
                alt="Mthatha Mall Signage Project"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <div>
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Case Study
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Mthatha Mall Complete Signage Overhaul
              </h3>
              <p className="text-ivory-muted mb-6 leading-relaxed">
                When Mthatha Mall needed to modernize their entire wayfinding and directory system, 
                they chose Ovations. We delivered a comprehensive signage solution that improved 
                customer navigation and elevated the mall's professional image.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Signs Installed</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">2 weeks</p>
                  <p className="text-sm text-muted-foreground">Project Time</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 italic text-ivory-muted">
                "Ovations transformed our mall's image completely. The professionalism and quality 
                exceeded our expectations. They're truly the best in Mthatha."
                <footer className="mt-2 text-sm text-muted-foreground not-italic">
                  — Mall Management
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default Portfolio;
