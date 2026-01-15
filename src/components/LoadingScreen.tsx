import { motion } from "framer-motion";
import logo from "@/assets/logo-new.jpeg";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      {/* Background glow */}
      <div className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
      
      <div className="relative flex flex-col items-center">
        {/* Logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img 
            src={logo} 
            alt="Ovations Logo" 
            className="h-24 md:h-32 w-auto"
            style={{ mixBlendMode: 'multiply', filter: 'contrast(1.1)' }}
          />
          
          {/* Underline animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
          />
        </motion.div>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-sm text-muted-foreground tracking-widest uppercase"
        >
          Premium Branding & Signage
        </motion.p>
        
        {/* Loading dots */}
        <div className="flex gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-primary"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
