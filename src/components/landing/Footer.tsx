export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <span className="font-heading font-bold text-foreground">nestla</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <span>© {new Date().getFullYear()} Nestla. All rights reserved.</span>
      </div>
    </footer>
  );
}
