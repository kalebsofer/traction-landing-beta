import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check, Loader2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";

const API_URL = "https://script.google.com/macros/s/AKfycbyL0Tv-KzwL_MmPC3eoCWYEhN4NvIEK6Yby3aMcApnTnpWaEJI-QhJe4zCB4E5mO6Z9/exec";
const STORAGE_KEY = "traction_signup_email";

const emailSchema = z.string().email("Please enter a valid email address");

type Platform = "android" | "ios" | null;

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<Platform>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [error, setError] = useState("");
  const [spotsRemaining, setSpotsRemaining] = useState<number | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem(STORAGE_KEY);
    if (storedEmail) {
      setAlreadyRegistered(true);
      setEmail(storedEmail);
    }

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSpotsRemaining(Math.max(0, data.spotsRemaining - 30));
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ email, platform }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem(STORAGE_KEY, email);
        setSpotsRemaining(Math.max(0, data.spotsRemaining - 30));
        setIsSubmitted(true);
        toast.success("You're on the list!");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <span className="text-3xl font-bold text-gradient">
              {spotsRemaining !== null ? spotsRemaining : "—"}
            </span>
            <span className="text-muted-foreground text-sm">spots remaining</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the <span className="text-gradient">Private Beta</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Enter your email and we'll send you an invite when we're ready.
          </p>

          {isSubmitted || alreadyRegistered ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/10 border border-primary/30 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {alreadyRegistered && !isSubmitted ? "You're already signed up!" : "You're on the list!"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {alreadyRegistered && !isSubmitted
                  ? `We have ${email} registered. We'll reach out soon with more info.`
                  : "We'll reach out soon with more info."}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-3">
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
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setPlatform("android")}
                      disabled={isSubmitting}
                      className={`h-14 px-4 rounded-lg border flex items-center gap-2 transition-all ${
                        platform === "android"
                          ? "bg-primary/20 border-primary text-foreground"
                          : "bg-card border-border text-muted-foreground hover:border-muted-foreground"
                      }`}
                    >
                      <Smartphone className="w-5 h-5" />
                      <span className="font-medium">Android</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPlatform("ios")}
                      disabled={isSubmitting}
                      className={`h-14 px-4 rounded-lg border flex items-center gap-2 transition-all ${
                        platform === "ios"
                          ? "bg-primary/20 border-primary text-foreground"
                          : "bg-card border-border text-muted-foreground hover:border-muted-foreground"
                      }`}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <span className="font-medium">iOS</span>
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || !email || !platform}
                  className="h-14 px-8 bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                Unsubscribe anytime. By signing up you agree to receive beta updates.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSignup;
