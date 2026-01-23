const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/ic_playstore.png"
              alt="Traction"
              className="w-10 h-10 rounded-xl"
            />
            <span className="font-semibold">Traction</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Traction.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
