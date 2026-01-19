import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Trusted branding company. They understand what businesses in Mthatha need.",
    author: "Local Business Owner",
    rating: 5,
  },
  {
    quote: "Best branding company in Mthatha. Professional work, professional team.",
    author: "Retail Store Owner",
    rating: 5,
  },
  {
    quote: "Finally, a company that delivers what they promise. Our signage looks incredible.",
    author: "Restaurant Owner",
    rating: 4,
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Social Proof
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            The Streets <span className="text-gradient-gold">Talk</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We didn't build our reputation online. We built it in Mthatha, 
            one satisfied customer at a time.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 p-8 rounded-2xl bg-card border border-border"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? 'text-primary fill-primary' : 'text-primary/30'}`}
                />
              ))}
            </div>
            <p className="text-3xl font-display font-bold text-primary">4.3</p>
            <p className="text-sm text-white font-medium">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-display font-bold text-white">Years</p>
            <p className="text-sm text-white font-medium">of Excellence</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-display font-bold text-white">100+</p>
            <p className="text-sm text-white font-medium">Businesses Branded</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-display font-bold text-white">Mthatha</p>
            <p className="text-sm text-white font-medium">Based & Proud</p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'text-primary fill-primary' : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <p className="text-sm text-muted-foreground font-medium">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
