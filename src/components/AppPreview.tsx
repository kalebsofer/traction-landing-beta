import { motion } from "framer-motion";

const screenshots = [
  { src: "/screenshot-home.png", alt: "Home screen", label: "Home" },
  { src: "/scrrenshot-calendar.png", alt: "Calendar view", label: "Calendar" },
  { src: "/scrrenshot-analytics.png", alt: "Analytics screen", label: "Stats" },
];

const AppPreview = () => {
  return (
    <section className="py-24 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Track habits. <span className="text-gradient">See progress.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            An intuitive interface that tracks goals and rewards progress.
          </p>
        </motion.div>

        {/* App Screenshots */}
        <div className="flex justify-center items-end gap-4 md:gap-8 max-w-5xl mx-auto">
          {screenshots.map((screen, index) => (
            <motion.div
              key={screen.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className={`flex flex-col items-center ${index === 1 ? "scale-110 z-10" : "opacity-90"}`}
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-card border-4 border-border bg-card">
                <img
                  src={screen.src}
                  alt={screen.alt}
                  className="w-40 md:w-52 lg:w-60 h-auto"
                />
              </div>
              <span className="mt-4 text-sm text-muted-foreground">{screen.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
