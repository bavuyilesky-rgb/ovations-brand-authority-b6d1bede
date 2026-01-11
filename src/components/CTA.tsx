import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPhoneLink, getWhatsAppLink } from "@/lib/contact";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/5">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-ivory-muted font-medium">
              24-Hour Service Available
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Transform
            <br />
            <span className="text-gradient-gold">Your Brand?</span>
          </h2>

          <p className="text-lg md:text-xl text-ivory-muted max-w-2xl mx-auto mb-10">
            Join the businesses that chose quality over compromise. 
            Get a free consultation and see why we're Mthatha's most trusted name in branding.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group w-full sm:w-auto" asChild>
              <a href={getPhoneLink()}>
                <Phone className="w-5 h-5" />
                Call Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="goldOutline" size="xl" className="group w-full sm:w-auto" asChild>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-sm text-muted-foreground">
            ★ 4.3 Rating • Trusted by 100+ Local Businesses • Based in Mthatha
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
