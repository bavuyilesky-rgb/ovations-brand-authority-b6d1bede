import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationMap = () => {
  // Mthatha, Eastern Cape, South Africa coordinates
  const mthatha = {
    lat: -31.5889,
    lng: 28.7844,
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mthatha.lat},${mthatha.lng}&query_place_id=Mthatha,+Eastern+Cape,+South+Africa`;

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
            <span className="text-sm text-ivory-muted font-medium">Find Us</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Located in the Heart of{" "}
            <span className="text-gradient-gold">Mthatha</span>
          </h2>
          <p className="text-ivory-muted max-w-2xl mx-auto">
            Visit our studio or call us for on-site consultations. We serve businesses 
            across the Eastern Cape with premium branding solutions.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54234.86671772099!2d28.744!3d-31.589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e636e6f2e8af4c1%3A0x4a6c4e9cf0e8a2c9!2sMthatha%2C%20Eastern%20Cape%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
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
              <h3 className="font-display font-bold text-lg mb-2">Ovations Studio</h3>
              <p className="text-ivory-muted text-sm mb-4">
                Mthatha, Eastern Cape<br />
                South Africa
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
