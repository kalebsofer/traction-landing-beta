import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow rounded-full blur-3xl opacity-40 animate-pulse-glow" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <img
            src="/ic_playstore.png"
            alt="Traction"
            className="w-20 h-20 rounded-2xl shadow-glow"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Private Beta • First 100 Users</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
        >
          New Year's resolution{" "}
          <span className="text-gradient">not going to plan?</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Hold yourself accountable with <span className="text-foreground font-semibold">Traction</span>. 
          Your app for building better habits.
        </motion.p>

        {/* CTA Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="animate-float"
        >
          <a href="#signup" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Join the Beta</span>
            <ChevronUp className="w-5 h-5 rotate-180" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
