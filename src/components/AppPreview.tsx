import { motion } from "framer-motion";
import { Check, Flame, BarChart3 } from "lucide-react";

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
            A beautiful, intuitive interface that makes building habits feel rewarding.
          </p>
        </motion.div>

        {/* App Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Daily View Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Today</span>
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">60</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg border border-primary/30">
                <span className="text-sm">Meditation</span>
                <Check className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <span className="text-sm">Daily Exercise</span>
                <span className="text-xs text-muted-foreground">30 min</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <span className="text-sm">Language Studies</span>
                <span className="text-xs text-muted-foreground">2 hrs</span>
              </div>
            </div>
          </motion.div>

          {/* Streak Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-sm text-muted-foreground">Streak</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-center">
                <span className="text-3xl font-bold">13</span>
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <span className="text-3xl font-bold">22</span>
                <p className="text-xs text-muted-foreground">Best</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-full transition-colors ${
                    i < 9 ? "bg-primary" : "bg-secondary"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Weekly Stats</span>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold">34</span>
              <span className="text-lg text-muted-foreground">min</span>
              <p className="text-xs text-muted-foreground">per day (avg)</p>
            </div>
            <div className="flex items-end gap-2 h-20">
              {[15, 0, 45, 50, 42, 42, 33].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-accent/60 rounded-t-sm"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
              <span>S</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
