import { motion } from "framer-motion";
import { Sparkles, Building2, Palette, PenTool, Layers } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Business Branding",
    result: "Stand out from competitors",
    description: "Complete brand identity that makes customers remember you. From logo design to brand guidelines that ensure consistency across every touchpoint.",
  },
  {
    icon: Building2,
    title: "Professional Signage",
    result: "Get noticed from the street",
    description: "Eye-catching signs that turn passersby into customers. Illuminated signs, 3D lettering, and storefront displays that command attention.",
  },
  {
    icon: Palette,
    title: "Visual Identity",
    result: "Build instant credibility",
    description: "Cohesive visual systems that communicate professionalism. Business cards, letterheads, and marketing materials that make an impression.",
  },
  {
    icon: PenTool,
    title: "Custom Prints",
    result: "Promote anywhere, anytime",
    description: "High-quality prints for any purpose. Banners, posters, vehicle wraps, and promotional materials that carry your message far and wide.",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    result: "One partner, complete peace of mind",
    description: "From concept to installation, we handle everything. Design, production, and installation — delivered on time, every time.",
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal-light relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[200px]" />
      
      <div className="container px-6 relative">
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
            What We <span className="text-gradient-gold">Create</span> For You
          </h2>
          <p className="text-ivory-muted text-lg max-w-2xl mx-auto">
            Every service is designed with one goal: making your business impossible to ignore.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:translate-y-[-4px]">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Result tag */}
                <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider mb-3 px-3 py-1 bg-primary/10 rounded-full">
                  {service.result}
                </span>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-ivory-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
