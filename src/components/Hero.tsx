import { motion } from "framer-motion";
import { ChevronDown, Zap, Target, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-background to-secondary/20" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Glowing orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-body text-sm text-primary tracking-wider">ESTUDIO DE VIDEOJUEGOS</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          >
            <span className="text-foreground">CREAMOS</span>
            <br />
            <span className="gradient-text glow-text">UNIVERSOS</span>
            <br />
            <span className="text-foreground">DIGITALES</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Desarrollamos experiencias de juego inmersivas que desafían los límites de la creatividad y la tecnología.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary text-primary-foreground font-display font-bold tracking-wider rounded transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
            >
              EXPLORAR JUEGOS
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-primary/50 text-primary font-display font-bold tracking-wider rounded transition-all duration-300 hover:bg-primary/10 hover:border-primary"
            >
              CONOCE AL EQUIPO
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { icon: Gamepad2, value: "12+", label: "Juegos" },
              { icon: Target, value: "2M+", label: "Jugadores" },
              { icon: Cpu, value: "5", label: "Años" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-primary/50" />
      </motion.div>
    </section>
  );
};

// Need to import this for the stats
import { Gamepad2 } from "lucide-react";

export default Hero;
