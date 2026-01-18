import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Palette, Building2, Printer, Code, Shirt, Camera, PartyPopper, Crown } from "lucide-react";

interface ShowcaseItem {
  title: string;
  category: string;
  icon: React.ElementType;
  serviceKey: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Branding",
    category: "Custom Branding Solutions",
    icon: Sparkles,
    serviceKey: "Branding",
  },
  {
    title: "Design",
    category: "Professional Designs",
    icon: Palette,
    serviceKey: "Design",
  },
  {
    title: "Signage",
    category: "Indoor & Outdoor Signs",
    icon: Building2,
    serviceKey: "Signage",
  },
  {
    title: "Printing",
    category: "Quality Prints",
    icon: Printer,
    serviceKey: "Printing",
  },
  {
    title: "Website",
    category: "Web Development",
    icon: Code,
    serviceKey: "Website",
  },
  {
    title: "Fashion",
    category: "Custom Apparel",
    icon: Shirt,
    serviceKey: "Fashion",
  },
  {
    title: "Photography",
    category: "Photo & Video",
    icon: Camera,
    serviceKey: "Photography/Videography",
  },
  {
    title: "Hiring",
    category: "Event Equipment",
    icon: PartyPopper,
    serviceKey: "Hiring",
  },
  {
    title: "Beauty Pageants",
    category: "Training & Development",
    icon: Crown,
    serviceKey: "Beauty Pageants",
  },
];

const Showcase = () => {
  const handleServiceClick = (serviceKey: string) => {
    // Store the service to open in sessionStorage
    sessionStorage.setItem('openService', serviceKey);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            What We <span className="text-gradient-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Click on any service to view pricing and details.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to="/#services"
                onClick={() => handleServiceClick(item.serviceKey)}
                className="group relative flex flex-col items-center p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-base font-semibold text-foreground text-center mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs text-muted-foreground text-center">
                  {item.category}
                </span>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
