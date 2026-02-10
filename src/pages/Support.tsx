import Footer from "@/components/Footer";

const Support = () => {
  return (
    <main className="min-h-screen">
      <div className="container max-w-3xl py-16 px-4">
        <a
          href="/"
          className="inline-block mb-8 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to Home
        </a>

        <h1 className="text-4xl font-bold mb-2">Support</h1>
        <p className="text-muted-foreground mb-12">
          We're here to help. Reach out using any of the options below.
        </p>

        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <p>
              For general questions, feedback, or account issues, email us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:support@softmaxco.io"
                className="text-primary hover:underline font-medium"
              >
                support@softmaxco.io
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Report a Bug
            </h2>
            <p className="mb-4">
              Found something that isn't working right? Submit a bug report for your
              platform:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/6noi3FqGTCKkTd8z8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-muted/50 px-6 py-4 font-medium hover:bg-muted transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                iOS Bug Report
              </a>
              <a
                href="https://forms.gle/42yNFX6KqeLiRvwt8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-muted/50 px-6 py-4 font-medium hover:bg-muted transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 11.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-1.44-.59-3.03-.94-4.72-.94s-3.28.35-4.72.94L5.24 7.67c-.17-.28-.54-.37-.83-.22-.31.16-.43.54-.26.85L6 11.48C2.84 13.27.96 16.35.96 19.84h22.08c0-3.49-1.88-6.57-5.04-8.36M7 17.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25m10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25" />
                </svg>
                Android Bug Report
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Privacy
            </h2>
            <p>
              To learn how we handle your data, read our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Support;
