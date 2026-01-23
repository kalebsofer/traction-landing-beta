import { motion } from "framer-motion";
import { RefreshCcw, MessageCircle, Heart } from "lucide-react";

const requirements = [
  {
    icon: RefreshCcw,
    title: "Regular Usage",
    description: "Use the app as part of your daily routine.",
  },
  {
    icon: MessageCircle,
    title: "Honest Feedback",
    description: "Tell us what works and what doesn't.",
  },
  {
    icon: Heart,
    title: "Patience",
    description: "It's still a bit rough around the edges.",
  },
];

const WhatWeNeed = () => {
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
            What we need <span className="text-gradient">from you</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            In exchange for early access and lifetime free usage, we ask for:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {requirements.map((req, index) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-card text-center"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <req.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{req.title}</h3>
              <p className="text-muted-foreground text-sm">{req.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeNeed;
