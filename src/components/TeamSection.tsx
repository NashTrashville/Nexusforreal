import { motion } from "framer-motion";

import ceoImage from "@/assets/team/ceo.jpeg";
import marketingImage from "@/assets/team/marketing.jpeg";
import designerImage from "@/assets/team/designer.jpeg";
import programmerImage from "@/assets/team/programmer.jpeg";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sebastian Lazaro Cruz",
    role: "CEO & Fundador",
    description: "Visionario líder con más de 10 años de experiencia en la industria del gaming.",
    image: ceoImage,
  },
  {
    name: "Alfredo Vicente Gomez",
    role: "Director de Marketing",
    description: "Estratega digital especializado en posicionamiento de marcas gaming.",
    image: marketingImage,
  },
  {
    name: "Eduardo Esteban Escobar Dominguez",
    role: "Lead Designer",
    description: "Artista conceptual y diseñador de niveles con pasión por mundos inmersivos.",
    image: designerImage,
  },
  {
    name: "Gabriel Ruiz Gurrion",
    role: "Lead Programmer",
    description: "Arquitecto de software especializado en motores de juego y optimización.",
    image: programmerImage,
  },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -right-64 top-1/4 w-[500px] h-[500px] border border-primary/10 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-display text-sm text-primary tracking-[0.3em] mb-4 block">
            NUESTRO EQUIPO
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            LAS <span className="gradient-text">MENTES</span> DETRÁS
            <br />
            DE LA MAGIA
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Un equipo apasionado de creativos y técnicos dedicados a crear las mejores experiencias de juego.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg cyber-border bg-card">
                {/* Image container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/20 backdrop-blur-sm transition-opacity duration-300"
                  />
                  
                  {/* Scanline effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scanlines" />
                </div>

                {/* Info */}
                <div className="p-6 relative">
                  {/* Role badge */}
                  <div className="absolute -top-4 left-6">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground font-display text-xs tracking-wider rounded">
                      {member.role.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold mt-2 mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50 mt-4"
                  />
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
