import { motion } from "framer-motion";
import { Rocket, MessageSquare, Crown } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Early Access",
    description: "Be the first to test new features before anyone else.",
  },
  {
    icon: MessageSquare,
    title: "Shape the Product",
    description: "Your feedback directly influences our roadmap and future features.",
  },
  {
    icon: Crown,
    title: "Lifetime Free",
    description: "Lock in free access forever as a founding member.",
  },
];

const BetaBenefits = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What you get as an{" "}
            <span className="text-gradient">early adopter</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BetaBenefits;
