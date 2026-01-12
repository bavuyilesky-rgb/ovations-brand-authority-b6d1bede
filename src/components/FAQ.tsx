import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Ovations offer?",
    answer: "We offer a comprehensive range of branding and printing services including Branding (candles, t-shirts, mugs, banners, wall clocks, trophies), Designs (certificates, invitations, business cards, video invitations), Signage (indoor/outdoor, building signs, street signs), Printing (posters, banners, stickers, canvas, UV DTF printing), Photography (studio shots, weddings, events), and Fashion services.",
  },
  {
    question: "What is UV DTF printing and what can it print on?",
    answer: "UV DTF (Direct-to-Film) printers use ultraviolet ink technology to print vibrant, durable designs. They're ideal for printing on ceramics, phone covers, round objects, PVC, wood, metal, acrylic, and many more hard surfaces. We offer both A3 and A4 sizes with high-resolution printing up to 2880 x 1440 dpi.",
  },
  {
    question: "How long does a typical branding project take?",
    answer: "Turnaround times vary based on the project complexity. Simple items like business cards take 24-48 hours. Custom signage typically takes 3-7 days. Complete branding packages including logo design, stationery, and signage may take 1-2 weeks. Rush orders are available for urgent needs.",
  },
  {
    question: "Do you offer photography services?",
    answer: "Yes! We provide both indoor studio and outdoor photography services. We cover weddings, birthdays, umgidi, funerals, baby showers, bridal showers, amabaso, and all types of events. Contact us for package pricing.",
  },
  {
    question: "What are your signage options?",
    answer: "We create indoor and outdoor signage including illuminated signs, building signs, street signs, wayfinding systems, pull-up banners, X-banners, backdrop banners, and wall graphics. All our signs are made with premium materials for durability.",
  },
  {
    question: "How do I get a quote for my project?",
    answer: "Getting a quote is easy! Click the 'Get Quote' button, call us at 063 794 1194, or send us a WhatsApp message. We respond within hours and can provide detailed quotes for any project size.",
  },
  {
    question: "Do you deliver or is pickup only?",
    answer: "We offer both pickup from our Mthatha location and delivery services. Local delivery in Mthatha is available, and we can arrange shipping to other areas in the Eastern Cape. Delivery fees vary based on location and order size.",
  },
  {
    question: "What design file formats do you accept?",
    answer: "We accept most common file formats including PDF, AI, PSD, PNG, JPG, and SVG. For best print quality, we recommend high-resolution files (300 DPI or higher). Don't have a design? Our team can create one for you!",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-50" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Questions & Answers
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-ivory-muted text-lg max-w-2xl mx-auto">
            Everything you need to know about our services, pricing, and process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ivory-muted leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
