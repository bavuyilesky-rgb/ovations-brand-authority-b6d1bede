import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Palette, PenTool, Building2, Printer, Camera, Shirt, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";

import serviceSignage from "@/assets/service-signage.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import servicePrints from "@/assets/service-prints.jpg";
import photographyStudio from "@/assets/photography-studio.jpeg";

// Portfolio images
import canvasPortrait from "@/assets/portfolio-canvas-portrait.png";
import certificate from "@/assets/portfolio-certificate.png";
import uniform from "@/assets/portfolio-uniform.png";
import officeSignage from "@/assets/portfolio-office-signage.png";
import bannerFestival from "@/assets/portfolio-banner-festival.png";
import pullupBanner from "@/assets/portfolio-pullup-banner.png";
import trophy from "@/assets/portfolio-trophy.png";
import tshirts from "@/assets/portfolio-tshirts.png";
import candles from "@/assets/portfolio-candles.avif";
import birthdayPhoto from "@/assets/portfolio-birthday.jpg";
import weddingWhite from "@/assets/portfolio-wedding-white.jpeg";
import phoneUV from "@/assets/portfolio-phone-uv.png";
import bdayInvite from "@/assets/portfolio-bday-invite.png";
import mallDirectory from "@/assets/portfolio-mall-directory.png";
import streetSign from "@/assets/portfolio-street-sign.png";
import schoolTies from "@/assets/portfolio-school-ties.png";
import weddingInvite from "@/assets/portfolio-wedding-invite.png";
import ovationsLogo from "@/assets/portfolio-ovations-logo.jpeg";

type Category = "all" | "branding" | "designs" | "signage" | "printing" | "photography" | "fashion" | "software";

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
  // Branding
  {
    id: "1",
    title: "Custom Branded Candles Collection",
    category: "branding",
    client: "Mthatha Events Co.",
    description: "Personalized candle branding for events including logos, names, and custom fragrances for weddings and corporate functions.",
    image: candles,
    results: ["Unique event gifts", "Brand memorable moments", "Premium quality finish"],
  },
  {
    id: "2",
    title: "Corporate T-Shirt Branding",
    category: "branding",
    client: "Swift Logistics Mthatha",
    description: "Full team uniform branding including t-shirts, caps, and name tags for a professional fleet appearance.",
    image: tshirts,
    results: ["Team unity improved", "Professional image", "Durable prints"],
  },
  {
    id: "3",
    title: "Crystal Trophy Collection",
    category: "branding",
    client: "Eastern Cape Sports Awards",
    description: "Custom crystal trophies with laser engraving for annual sports awards ceremony.",
    image: trophy,
    results: ["Prestigious awards", "Custom engraving", "Lasting memories"],
  },
  {
    id: "4",
    title: "Pull-Up & X-Banner Package",
    category: "branding",
    client: "Mthatha Business Expo",
    description: "Complete exhibition package with pull-up banners, X-banners, and backdrop banners for trade show presence.",
    image: pullupBanner,
    results: ["Stand out at events", "Easy setup", "High-impact visuals"],
  },
  // Designs
  {
    id: "5",
    title: "Wedding Invitation Suite",
    category: "designs",
    client: "Private Client",
    description: "Complete wedding stationery including invitations, programs, and save-the-dates with elegant typography.",
    image: weddingInvite,
    results: ["Cohesive design theme", "Premium paper stock", "Guest appreciation"],
  },
  {
    id: "6",
    title: "Corporate Certificate Design",
    category: "designs",
    client: "Mthatha Training Institute",
    description: "Professional certificate templates with gold foil accents and security features for training programs.",
    image: certificate,
    results: ["Professional recognition", "Tamper-proof design", "Brand consistency"],
  },
  {
    id: "7",
    title: "Video Invitation Creation",
    category: "designs",
    client: "Birthday Celebrations",
    description: "Animated video invitations with music, custom graphics, and event details for social media sharing.",
    image: bdayInvite,
    results: ["Viral potential", "Modern appeal", "Easy sharing"],
  },
  // Signage
  {
    id: "8",
    title: "Corporate Office Signage",
    category: "signage",
    client: "Eastern Cape Legal Associates",
    description: "Premium indoor and outdoor signage installation including illuminated entrance signs and wayfinding.",
    image: officeSignage,
    results: ["Professional presence", "24/7 visibility", "Client navigation improved"],
  },
  {
    id: "9",
    title: "Shopping Center Directory",
    category: "signage",
    client: "Mthatha Mall",
    description: "Large-scale directory signage and wayfinding system for a major shopping center with 50+ stores.",
    image: mallDirectory,
    results: ["Customer navigation simplified", "Professional mall image", "Reduced complaints"],
  },
  {
    id: "10",
    title: "Street Signage Installation",
    category: "signage",
    client: "Mthatha Municipality",
    description: "Durable outdoor street signs and directional signage for improved community navigation.",
    image: streetSign,
    results: ["Weather resistant", "Clear visibility", "Community benefit"],
  },
  // Printing
  {
    id: "11",
    title: "Large Format Banner Printing",
    category: "printing",
    client: "Mthatha Festival",
    description: "High-quality large format banners, posters, and stickers for annual cultural festival.",
    image: bannerFestival,
    results: ["Vibrant colors", "Weather durable", "Quick turnaround"],
  },
  {
    id: "12",
    title: "Canvas Portrait Printing",
    category: "printing",
    client: "Art Gallery Mthatha",
    description: "Gallery-quality canvas prints with museum-grade materials for art exhibitions.",
    image: canvasPortrait,
    results: ["Archival quality", "True color reproduction", "Professional mounting"],
  },
  {
    id: "13",
    title: "UV DTF Phone Cover Printing",
    category: "printing",
    client: "Tech Accessories Shop",
    description: "Custom phone covers and accessories using UV DTF technology for vibrant, scratch-resistant designs on hard surfaces.",
    image: phoneUV,
    results: ["2880x1440 dpi quality", "Scratch resistant", "Custom designs"],
  },
  // Photography
  {
    id: "14",
    title: "Traditional Wedding Coverage",
    category: "photography",
    client: "Private Wedding",
    description: "Complete wedding photography including traditional ceremonies, umgidi, and reception coverage.",
    image: weddingWhite,
    results: ["Full day coverage", "Edited album", "Lasting memories"],
  },
  {
    id: "15",
    title: "Studio Portrait Session",
    category: "photography",
    client: "Corporate Headshots",
    description: "Professional indoor studio photography for corporate headshots, family portraits, and personal branding.",
    image: photographyStudio,
    results: ["Professional lighting", "Multiple poses", "Quick delivery"],
  },
  {
    id: "16",
    title: "Birthday Celebration",
    category: "photography",
    client: "Birthday Party",
    description: "Event photography coverage for baby showers, bridal showers, birthdays, and special occasions.",
    image: birthdayPhoto,
    results: ["Candid moments captured", "Same-day previews", "Full gallery access"],
  },
  // Fashion
  {
    id: "17",
    title: "School Tie Collection",
    category: "fashion",
    client: "Mthatha High Schools",
    description: "Custom school ties with embroidered logos and school colors for multiple institutions.",
    image: schoolTies,
    results: ["School pride", "Durable materials", "Bulk pricing"],
  },
  {
    id: "18",
    title: "Corporate Uniform Branding",
    category: "fashion",
    client: "Retail Chain",
    description: "Complete uniform solution including shirts, name tags, and accessories for retail staff.",
    image: uniform,
    results: ["Brand consistency", "Comfortable wear", "Professional look"],
  },
  // Software Development
  {
    id: "19",
    title: "Ovations Website",
    category: "software",
    client: "Ovations",
    description: "Modern, responsive company website showcasing all services including branding, design, signage, printing, photography, and fashion.",
    image: ovationsLogo,
    results: ["Professional online presence", "Mobile responsive", "Service showcase"],
  },
];

const categories = [
  { id: "all" as Category, label: "All Projects", icon: Palette },
  { id: "branding" as Category, label: "Branding", icon: Palette },
  { id: "designs" as Category, label: "Designs", icon: PenTool },
  { id: "signage" as Category, label: "Signage", icon: Building2 },
  { id: "printing" as Category, label: "Printing", icon: Printer },
  { id: "photography" as Category, label: "Photography", icon: Camera },
  { id: "fashion" as Category, label: "Fashion", icon: Shirt },
  { id: "software" as Category, label: "Software", icon: Code },
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient-gold">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our work across Branding, Designs, Signage, Printing, Photography, and Fashion. 
              Premium solutions that deliver real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-y border-border bg-charcoal-light/50 sticky top-20 z-30 backdrop-blur-sm">
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

      {/* Category Description */}
      <section className="py-8 border-b border-border">
        <div className="container px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              {activeCategory === "branding" && (
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  <span className="text-primary font-semibold">Branding:</span> Candles, programs, t-shirts, coffee mugs, key holders, wall clocks, pull-up banners, X-banners, backdrop banners, wall paper, laptop branding, name tags, school ties, plates, crystal trophies, canvas portraits & more.
                </p>
              )}
              {activeCategory === "designs" && (
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  <span className="text-primary font-semibold">Designs:</span> Certificates, programs, invitations, posters, business cards, calendars, car magnets, video invitations and all types of graphic design.
                </p>
              )}
              {activeCategory === "signage" && (
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  <span className="text-primary font-semibold">Signage:</span> Indoor and outdoor signage, building signs, street signs, illuminated signs, wayfinding systems, and directional signage.
                </p>
              )}
              {activeCategory === "printing" && (
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  <span className="text-primary font-semibold">Printing:</span> Posters, banners, stickers, canvas printing, and UV DTF printing for ceramics, phone covers, round objects, PVC, wood, metal, acrylic and more. Both A3 and A4 sizes with up to 2880x1440 dpi resolution.
                </p>
              )}
              {activeCategory === "photography" && (
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  <span className="text-primary font-semibold">Photography:</span> Indoor studio and outdoor shoots. Weddings, birthdays, umgidi, funerals, baby showers, bridal showers, amabaso, corporate events and all celebrations.
                </p>
              )}
              {activeCategory === "fashion" && (
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  <span className="text-primary font-semibold">Fashion:</span> Custom school ties, corporate uniforms, branded apparel, and fashion accessories for organizations and businesses.
                </p>
              )}
              {activeCategory === "software" && (
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  <span className="text-primary font-semibold">Software Development:</span> Custom web applications, e-commerce platforms, booking systems, school management portals, business management systems, and mobile-responsive solutions.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
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
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="border-t border-border pt-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Results</p>
                      <ul className="space-y-1">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
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
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>


      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Portfolio;
