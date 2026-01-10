import { motion } from "framer-motion";
import signageImage from "@/assets/service-signage.jpg";
import brandingImage from "@/assets/service-branding.jpg";
import printsImage from "@/assets/service-prints.jpg";

const showcaseItems = [
  {
    image: signageImage,
    title: "Professional Signage",
    category: "Illuminated Signs",
  },
  {
    image: brandingImage,
    title: "Brand Identity",
    category: "Complete Branding",
  },
  {
    image: printsImage,
    title: "Large Format Prints",
    category: "Custom Printing",
  },
];

const Showcase = () => {
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
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            See the <span className="text-gradient-gold">Difference</span>
          </h2>
          <p className="text-ivory-muted text-lg max-w-2xl mx-auto">
            Quality speaks for itself. Here's a glimpse of what premium branding looks like.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
