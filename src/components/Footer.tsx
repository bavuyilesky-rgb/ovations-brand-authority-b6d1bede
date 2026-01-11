import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { getPhoneLink, PHONE_DISPLAY } from "@/lib/contact";

const Footer = () => {
  return (
    <footer className="relative bg-charcoal-light border-t border-border">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">
              OVATIONS
            </h3>
            <p className="text-ivory-muted text-sm leading-relaxed mb-6">
              Premium branding and signage solutions that transform businesses into landmarks.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-primary text-lg font-bold">4.3★</span>
              <span className="text-sm text-muted-foreground">Trusted Rating</span>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-display font-semibold mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-ivory-muted text-sm">
                  Mthatha, Eastern Cape<br />South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a 
                  href={getPhoneLink()} 
                  className="text-ivory-muted text-sm hover:text-primary transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-ivory-muted text-sm">24-Hour Service</span>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="font-display font-semibold mb-6 text-foreground">Services</h4>
            <ul className="space-y-3">
              {[
                "Business Branding",
                "Professional Signage",
                "Visual Identity",
                "Custom Prints",
                "Full Solutions",
              ].map((service) => (
                <li key={service}>
                  <span className="text-ivory-muted text-sm hover:text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="font-display font-semibold mb-6 text-foreground">Our Promise</h4>
            <ul className="space-y-3">
              {[
                "Quality Materials",
                "On-Time Delivery",
                "Professional Finish",
                "Local Expertise",
                "Trusted Reputation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-ivory-muted text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ovations. Mthatha's Premium Branding Partner.
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">★</span> "Best Branding Company in Mthatha" — Our Clients
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
