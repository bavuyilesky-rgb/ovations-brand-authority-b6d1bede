import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sun, Moon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPhoneLink } from "@/lib/contact";
import { useTheme } from "@/components/ThemeProvider";
import logo from "@/assets/logo-new.jpeg";

// Ensure useTheme doesn't throw on Portfolio page
const useSafeTheme = () => {
  try {
    return useTheme();
  } catch {
    return { theme: "dark" as const, setTheme: () => {} };
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme } = useSafeTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const canGoBack = location.key !== "default";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "About Us", href: "/#why" },
    { label: "Services", href: "/#services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Process", href: "/#process" },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-md"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Back button and Logo */}
          <div className="flex items-center gap-2">
            {canGoBack && (
              <button
                onClick={handleBack}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <a href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Ovations Logo"
                className="h-10 md:h-12 w-auto"
                style={{ mixBlendMode: "multiply", filter: "contrast(1.1)" }}
              />
              <span className="font-display text-lg md:text-xl font-bold text-foreground">
                Ovations
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-foreground hover:text-primary hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile: Theme toggle and menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-foreground hover:text-primary hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              ref={buttonRef}
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 bg-background border-l border-border shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="font-display font-semibold text-foreground">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-foreground hover:text-primary transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation links */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xl font-display font-semibold text-foreground hover:text-primary transition-colors py-2"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA at bottom */}
                <div className="p-6 border-t border-border">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href={getPhoneLink()} onClick={() => setIsMobileMenuOpen(false)}>
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
