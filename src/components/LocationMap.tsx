import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationMap = () => {
  // Mthatha, Eastern Cape, South Africa coordinates
  const mthatha = {
    lat: -31.5889,
    lng: 28.7844,
  };

  const address = "LCM Ludidi Building, 3 Chatham St, CBD, Shop no.8 Mthatha, 5099";

  // Use the Directions endpoint (more reliable than search links)
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section className="py-20 bg-charcoal-light relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/5">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-white font-medium">Find Us</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
            Located in the Heart of{" "}
            <span className="text-gradient-gold">Mthatha</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Visit our studio or call us for on-site consultations. We serve businesses 
            across South Africa with premium branding solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-border shadow-2xl"
        >
          {/* Google Maps Embed */}
          <div className="aspect-[16/9] md:aspect-[21/9] w-full">
            <iframe
              src={"https://www.google.com/maps?q=" + encodeURIComponent(address) + "&output=embed"}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ovations Location - Mthatha, Eastern Cape"
            />
          </div>

          {/* Overlay card */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm">
            <div className="bg-card/95 backdrop-blur-lg border border-border rounded-xl p-6 shadow-xl">
              <h3 className="font-display font-bold text-lg mb-2 text-foreground">Ovations Studio</h3>
              <p className="text-muted-foreground text-sm mb-4">
                LCM Ludidi Building, 3 Chatham St<br />
                CBD, Shop no.8 Mthatha, 5099
              </p>
              <Button variant="gold" size="sm" asChild>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;
