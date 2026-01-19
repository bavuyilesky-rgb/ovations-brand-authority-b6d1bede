import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { getPhoneLink, getWhatsAppLink, PHONE_DISPLAY } from "@/lib/contact";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-charcoal-light border-t border-border">
      {/* Magenta accent line */}
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
            <p className="text-white text-sm leading-relaxed mb-6">
              Premium branding and signage solutions that transform businesses into landmarks.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-primary text-lg font-bold">4.3★</span>
              <span className="text-sm text-white">Trusted Rating</span>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-display font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-white text-sm">
                  LCM Ludidi Building, 3 Chatham St<br />CBD, Shop no.8 Mthatha, 5099
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a 
                  href={getPhoneLink()} 
                  className="text-white text-sm hover:text-primary transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a 
                  href="mailto:ovationszazi@gmail.com" 
                  className="text-white text-sm hover:text-primary transition-colors"
                >
                  ovationszazi@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white text-sm">8am - 5pm Mon-Sat</span>
              </li>
              <li className="mt-4">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-[#25D366] hover:bg-[#1da851] text-white w-full"
                  asChild
                >
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </Button>
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
            <h4 className="font-display font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                "Branding",
                "Design",
                "Signage",
                "Printing",
                "Website",
                "Fashion",
                "Photography/Videography",
                "Hiring",
                "Beauty Pageants",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white text-sm hover:text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="font-display font-semibold mb-6 text-white">Follow Us</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.tiktok.com/@ovations3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-sm hover:text-primary transition-colors flex items-center gap-3"
                >
                  <FaTiktok className="w-5 h-5 text-primary" />
                  @ovations3
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/ovationsza" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-sm hover:text-primary transition-colors flex items-center gap-3"
                >
                  <FaFacebookF className="w-5 h-5 text-primary" />
                  ovationsza
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/ovationszazi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-sm hover:text-primary transition-colors flex items-center gap-3"
                >
                  <FaInstagram className="w-5 h-5 text-primary" />
                  ovationszazi
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Ovations. South Africa's Premium Branding Partner.
            </p>
            <p className="text-sm text-white">
              <span className="text-primary">★</span> "Best Branding Company in South Africa" — Our Clients
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
