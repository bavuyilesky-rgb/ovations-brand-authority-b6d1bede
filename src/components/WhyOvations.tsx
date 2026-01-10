import { motion } from "framer-motion";
import { Shield, Users, Award, Clock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted by Mthatha",
    description: "Before we had a website, we had your trust. Years of delivering quality work built our reputation the old-fashioned way — word of mouth.",
  },
  {
    icon: Users,
    title: "Your Success, Our Mission",
    description: "We don't just make signs. We make businesses visible, credible, and memorable. Your growth is our portfolio.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Every project is crafted with precision and attention to detail. We use the finest materials because your brand deserves nothing less.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "24-hour service means we're here when you need us. Deadlines aren't suggestions — they're commitments we honor.",
  },
];

const WhyOvations = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Everyone in Mthatha Knows Us.
            <br />
            <span className="text-gradient-gold">Now You Do Too.</span>
          </h2>
          <p className="text-ivory-muted text-lg max-w-2xl mx-auto">
            We built our name on trust, not marketing. Every sign we install is a promise kept, 
            every brand we create is a business transformed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-ivory-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOvations;
