import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate email
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - In production, this would call your backend
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("You're on the list! Check your email for confirmation.");
  };

  const spotsRemaining = 73; // This would be dynamic in production

  return (
    <section id="signup" className="py-24 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          {/* Spots Counter */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-primary/30 mb-8 shadow-glow"
          >
            <span className="text-3xl font-bold text-gradient">{spotsRemaining}</span>
            <span className="text-muted-foreground text-sm">spots remaining</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the <span className="text-gradient">Private Beta</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Enter your email to secure your spot. We'll send you an invite when we're ready.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/10 border border-primary/30 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
              <p className="text-muted-foreground text-sm">
                Check your email for a confirmation. We'll reach out soon with your beta access.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="h-14 px-8 bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold transition-all"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-destructive text-sm"
                >
                  {error}
                </motion.p>
              )}
              <p className="text-xs text-muted-foreground">
                No spam. Unsubscribe anytime. By signing up you agree to receive beta updates.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSignup;
