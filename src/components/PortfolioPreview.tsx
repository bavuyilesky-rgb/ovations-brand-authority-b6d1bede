import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import signageImage from "@/assets/hero-signage.jpg";
import brandingImage from "@/assets/service-branding.jpg";
import printsImage from "@/assets/service-prints.jpg";

const portfolioItems = [
  {
    image: signageImage,
    category: "ILLUMINATED SIGNS",
    title: "Professional Signage",
  },
  {
    image: brandingImage,
    category: "COMPLETE BRANDING",
    title: "Brand Identity",
  },
  {
    image: printsImage,
    category: "CUSTOM PRINTING",
    title: "Large Format Prints",
  },
];

const PortfolioPreview = () => {
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quality speaks for itself. Here's a glimpse of what premium branding looks like.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to="/portfolio"
                className="group relative block aspect-[4/5] rounded-xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs font-medium uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white mt-2">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
