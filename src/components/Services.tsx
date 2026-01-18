import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Palette, Building2, Printer, Code, Shirt, Camera, ChevronDown, PartyPopper, Crown } from "lucide-react";
import { useLocation } from "react-router-dom";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  items: string[];
}

const services: ServiceItem[] = [
  {
    icon: Sparkles,
    title: "Branding",
    items: [
      "Candle Sticker - R50",
      "Shirt Branding R70 upwards",
      "Name Tags R50",
      "Pull up Banners R1300",
      "X Banners R1000",
      "Wall Banners 2.2m R5000",
      "Wall Banners 3m R7000",
      "Car Branding R2000 upwards",
      "Coffee mug White/Glass R70",
      "Magic Mug R140",
      "Key Holder R70",
      "Sublimated Plate R250",
      "Welcome Board R350",
      "Wrist Tags R2.80 each",
      "Design R150 Print R4 each",
      "Laptop Branding R150",
      "Canvas: A1 - R850, A2 - R650, A3 - R450, A4 - R250",
      "Clock Branding R250",
      "Crystal Trophy R450",
    ],
  },
  {
    icon: Palette,
    title: "Design",
    items: [
      "Certificate Design R150 Print R10 each",
      "Funeral Program Design R70 Print CL(R12), BL(R2)",
      "Poster Design R150",
      "Invitation Cards Design R150",
      "Business Cards Design R150 Print R1.5 each",
      "Calendar Design R150",
      "Table Programme R25",
    ],
  },
  {
    icon: Building2,
    title: "Signage",
    items: [
      "Indoor and Outdoor Signages",
      "Building Sign",
      "Street Sign",
    ],
  },
  {
    icon: Printer,
    title: "Printing",
    items: [
      "Documents Print",
      "Business Cards",
      "Certificates",
      "Photos",
      "ID Cards",
      "etc.",
    ],
  },
  {
    icon: Code,
    title: "Website",
    items: [
      "Custom web applications",
      "E-commerce platforms",
      "Booking & Appointment System",
      "Business management systems",
    ],
  },
  {
    icon: Shirt,
    title: "Fashion",
    items: [
      "Ovations Merch",
      "Custom Designs",
    ],
  },
  {
    icon: Camera,
    title: "Photography/Videography",
    items: [
      "Indoor & Outdoor Studio Shots",
      "Amabaso",
      "Wedding",
      "Birthdays",
      "Umgidi",
      "Funerals",
      "Baby Shower",
      "Bridal Shower",
      "etc.",
      "───────────────────────",
      "STUDIO PACKAGES:",
      "• Single Picture - R15",
      "• 30 Minutes Shoot (2 people, 2 outfit changes, 25 pics) - R350",
      "• 45 Minutes Shoot (3 people, 2 outfit changes, 30 pics) - R400",
      "• 1 Hour Shoot (4 people, 3 outfit changes, 40 pics) - R500",
      "• 2 Hour Shoot (4 people, 3 outfit changes, 40 pics) - R800",
      "───────────────────────",
      "OUTDOOR SERVICES:",
      "• 1 Hour - R600",
      "• Full Event Photography - R3000",
      "• Full Photography & Videography - R6000",
      "• Photography & Short Highlight Video - R2500",
      "───────────────────────",
      "ADDITIONAL SERVICES:",
      "• Poster/Flyer Design - R150",
      "• Program Design & Typing - R180",
    ],
  },
  {
    icon: PartyPopper,
    title: "Hiring",
    items: [
      "Jumping Castles",
      "Trampoline",
      "Portable Swimming Pool",
      "Seesaws",
      "Water Sliding Mat",
      "Backdrop Wood for Events",
      "Glass Photobooth",
      "Tents",
      "etc.",
    ],
  },
  {
    icon: Crown,
    title: "Beauty Pageants",
    items: [
      "Grooming",
      "Public Speaking",
      "Confidence Development",
      "Career Development",
      "Community Service",
      "Leadership Training",
      "etc.",
    ],
  },
];

const ServiceCard = ({ service, index, isOpen, onToggle }: { service: ServiceItem; index: number; isOpen: boolean; onToggle: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      <div 
        className="h-full p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <service.icon className="w-6 h-6 text-primary" />
            </div>

            {/* Title */}
            <h3 className="font-display text-lg font-semibold">
              {service.title}
            </h3>
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </div>

        {/* Dropdown content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 pt-4 border-t border-border space-y-2">
                {service.items.map((item, i) => (
                  <li 
                    key={i} 
                    className={`text-sm ${item.startsWith('•') || item.startsWith('───') ? 'text-foreground/80 font-medium' : 'text-muted-foreground'} ${item.startsWith('Book Your Shoot') ? 'text-primary font-semibold mt-2' : ''}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Check if there's a service to open from sessionStorage
    const serviceToOpen = sessionStorage.getItem('openService');
    if (serviceToOpen) {
      const serviceIndex = services.findIndex(s => s.title === serviceToOpen);
      if (serviceIndex !== -1) {
        setOpenServiceIndex(serviceIndex);
        // Scroll to services section after a short delay
        setTimeout(() => {
          const servicesSection = document.getElementById('services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
      // Clear the stored service
      sessionStorage.removeItem('openService');
    }
  }, [location]);

  const handleToggle = (index: number) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-charcoal-light relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[200px]" />
      
      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            What We <span className="text-gradient-gold">Create</span> For You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Click on any service to see pricing and details.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
              isOpen={openServiceIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
