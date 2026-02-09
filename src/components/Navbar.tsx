import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <div className="absolute inset-0 blur-md bg-primary/30" />
            </div>
            <span className="font-display text-xl font-bold tracking-wider glow-text">
              NEXUS<span className="text-primary">GAMES</span>
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Inicio", "Juegos", "Equipo", "Contacto"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-display text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider rounded transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
          >
            ÚNETE
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
