const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(to bottom, #E9FFEB, #1B998B)" }}
            >
              <img
                src="/ic_playstore_legacy.png"
                alt="Traction"
                className="w-full h-full"
              />
            </div>
            <span className="font-semibold">Traction</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <p className="text-sm text-muted-foreground">
              © 2026 Traction.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
