import Footer from "@/components/Footer";

/*
 * LEGAL REVIEW REQUIRED. Engineering baseline drafted to satisfy Apple App Review
 * Guideline 1.2 (user-generated content) and Google Play UGC/social policies. Confirm the
 * [CONFIRM] items before publishing: legal entity name, governing-law jurisdiction, and
 * minimum age. Keep in sync with traction-health/docs/store/TERMS_OF_SERVICE.md.
 */
const Terms = () => {
  return (
    <main className="min-h-screen">
      <div className="container max-w-3xl py-16 px-4">
        <a
          href="/"
          className="inline-block mb-8 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to Home
        </a>

        <h1 className="text-4xl font-bold mb-2">Terms of Service &amp; EULA</h1>
        <p className="text-muted-foreground mb-12">Last Updated: June 2, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-foreground/90">
          <section>
            <p>
              These Terms of Service and End User License Agreement (the "Terms") govern your
              use of the Traction Health mobile application (the "App") operated by{" "}
              <strong>[CONFIRM: legal entity name]</strong> ("we," "us," or "our"). By
              downloading, accessing, or using the App, you agree to be bound by these Terms
              and by our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              . If you do not agree, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. License</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to
              use the App for your personal, non-commercial purposes, in accordance with
              these Terms and with the usage rules of the app store from which you obtained
              the App. You may not copy, modify, reverse-engineer, distribute, sell, or lease
              any part of the App except as permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Eligibility and Accounts
            </h2>
            <p>
              You must be at least <strong>[CONFIRM: 13 or 16]</strong> years old to use the
              App and to use any community features. You are responsible for the activity
              under your account and for keeping your credentials secure. Community features
              (shared habits, partnerships, groups, comments, nudges, reactions, and
              connections) require a registered account with a claimed username and are not
              available to anonymous accounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. User-Generated Content
            </h2>
            <p>
              The App lets you create and share content with other users, including your
              username, shared habit data, comments, nudge messages, @mentions, and emoji
              reactions ("User Content"). You retain ownership of your User Content. You grant
              us a worldwide, non-exclusive, royalty-free license to host, store, reproduce,
              and display your User Content solely to operate and provide the App's features
              to you and the users you share with. You are solely responsible for your User
              Content and represent that you have the rights to share it and that it does not
              violate these Terms or any law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Objectionable Content and Abusive Behavior — Zero Tolerance
            </h2>
            <p className="font-medium">
              There is zero tolerance for objectionable content or abusive behavior.
            </p>
            <p>
              You agree that you will not create, upload, post, send, or share any User
              Content, and will not engage in any conduct, that:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                is unlawful, harmful, threatening, abusive, harassing, defamatory, or hateful;
              </li>
              <li>
                is obscene, pornographic, sexually explicit, or otherwise objectionable;
              </li>
              <li>
                bullies, intimidates, impersonates, or targets any individual or group;
              </li>
              <li>promotes self-harm, violence, or illegal activity;</li>
              <li>
                infringes the intellectual property, privacy, or other rights of others;
              </li>
              <li>contains spam, scams, malware, or unsolicited promotional content; or</li>
              <li>
                collects or discloses another person's private information without consent.
              </li>
            </ul>
            <p>
              Choosing a username that is offensive, impersonating, or otherwise
              objectionable is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Reporting, Blocking, and Moderation
            </h2>
            <p>
              We provide tools to keep the community safe, and we act on violations:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Report:</strong> You can report objectionable content or abusive
                users from within the App.
              </li>
              <li>
                <strong>Block:</strong> You can block other users to prevent them from
                interacting with you.
              </li>
              <li>
                <strong>Our response:</strong> We review reports of objectionable content and
                abusive behavior and will remove offending content and may suspend or
                terminate the responsible user's access within 24 hours of receiving a
                report. You may also contact us at{" "}
                <a
                  href="mailto:support@softmaxco.io"
                  className="text-primary hover:underline"
                >
                  support@softmaxco.io
                </a>
                .
              </li>
            </ul>
            <p>
              We may, but are not obligated to, monitor or filter User Content, and we may
              remove any content or terminate any account at our discretion for violating
              these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Prohibited Use of the App
            </h2>
            <p>
              You agree not to misuse the App, including by attempting to access it through
              unauthorized means, disrupting its operation, circumventing security or
              moderation controls, or using it to harm, harass, or collect data about other
              users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
            <p>
              You may stop using the App and delete your account at any time from within the
              App. We may suspend or terminate your access immediately if you violate these
              Terms. On termination, the license granted to you ends. Provisions that by their
              nature should survive termination (including content licenses you have granted,
              disclaimers, and limitations of liability) will survive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disclaimers</h2>
            <p>
              The App is provided "as is" and "as available" without warranties of any kind,
              whether express or implied, including fitness for a particular purpose and
              non-infringement. The App is a habit and wellness tracking tool and does{" "}
              <strong>not</strong> provide medical, health, or professional advice. We do not
              warrant that the App will be uninterrupted, secure, or error-free, and we are
              not responsible for User Content created by other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, we will not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of data,
              arising out of or relating to your use of the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold us harmless from any claims, damages, or
              expenses arising from your User Content, your use of the App, or your violation
              of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Apple App Store and Google Play
            </h2>
            <p>
              These Terms are between you and us, not with Apple or Google. Apple and Google
              are not responsible for the App or its content. Where you obtained the App from
              the Apple App Store, Apple and its subsidiaries are third-party beneficiaries of
              these Terms and may enforce them against you. You agree to comply with the
              applicable app store's terms and usage rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              12. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. We will post the updated Terms and
              update the "Last Updated" date. Your continued use of the App after changes take
              effect constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of{" "}
              <strong>[CONFIRM: governing-law jurisdiction]</strong>, without regard to its
              conflict-of-laws rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact</h2>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@softmaxco.io"
                className="text-primary hover:underline"
              >
                support@softmaxco.io
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://softmaxco.io" className="text-primary hover:underline">
                softmaxco.io
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Terms;
