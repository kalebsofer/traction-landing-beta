import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const STORAGE_KEY = "traction_signup_email";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem(STORAGE_KEY);
    if (storedEmail) {
      setAlreadyRegistered(true);
      setEmail(storedEmail);
    }
  }, []);

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Private Beta</span>
          </h2>

          {alreadyRegistered ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/10 border border-primary/30 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                You're already signed up!
              </h3>
              <p className="text-muted-foreground text-sm">
                We have {email} registered. We'll reach out soon with more info.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <p className="text-xl font-semibold mb-2">
                Registration is now full
              </p>
              <p className="text-muted-foreground text-sm">
                Thank you for your interest! Watch this space for public launch updates.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSignup;
