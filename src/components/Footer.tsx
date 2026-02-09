import { motion } from "framer-motion";
import { Gamepad2, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="relative pt-20 pb-8 overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <span className="font-display text-xl font-bold tracking-wider">
                NEXUS<span className="text-primary">GAMES</span>
              </span>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              Creando experiencias de juego inolvidables desde 2020. 
              Donde la creatividad se encuentra con la tecnología.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-sm tracking-widest text-primary mb-6">
              ENLACES RÁPIDOS
            </h4>
            <ul className="space-y-3">
              {["Inicio", "Juegos", "Equipo", "Carreras", "Prensa"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-sm tracking-widest text-primary mb-6">
              CONTACTO
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-body text-muted-foreground">
                  hola@nexusgames.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-body text-muted-foreground">
                  +52 55 1234 5678
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body text-muted-foreground">
                  Ciudad de México, MX
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-muted-foreground">
              © 2026 NexusGames. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {["Privacidad", "Términos", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
