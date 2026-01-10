import { motion } from "framer-motion";
import { MessageSquare, Pencil, Factory, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consult",
    description: "Tell us your vision. We listen, ask the right questions, and understand your business goals.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design",
    description: "Our team creates custom designs that capture your brand's essence and stand out in the market.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Produce",
    description: "Using premium materials and precision techniques, we bring your designs to life with quality you can see.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Deliver",
    description: "Professional installation or delivery — on time, every time. Your business transforms overnight.",
  },
];

const Process = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal-light relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            How We Work
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Simple. Professional. <span className="text-gradient-gold">Effective.</span>
          </h2>
          <p className="text-ivory-muted text-lg max-w-2xl mx-auto">
            No complicated processes. Just clear communication, quality work, and results you can see.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="relative p-6 rounded-xl bg-background border border-border group-hover:border-primary/50 transition-all duration-300">
                {/* Step number */}
                <span className="absolute -top-4 right-6 text-6xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-ivory-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
