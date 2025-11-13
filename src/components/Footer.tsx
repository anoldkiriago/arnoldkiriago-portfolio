export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg gradient-text">Arnold Kiriago</p>
            <p className="text-sm text-muted-foreground">
              Web Developer • IT Support • Creative Digital Specialist
            </p>
          </div>
          
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Arnold Kiriago. All rights reserved.</p>
            <p className="mt-1">Built with passion in Nairobi, Kenya 🇰🇪</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
