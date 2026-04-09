import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Giải pháp", href: "#features" },
    { label: "Cách hoạt động", href: "#how-it-works" },
    { label: "Khách hàng", href: "#testimonials" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">N</span>
          </div>
          <span className="text-xl font-bold text-foreground">Nextify</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Đăng nhập</Button>
          <Button size="sm" className="gradient-bg border-0 text-primary-foreground shadow-brand hover:opacity-90 transition-opacity">
            Dùng thử miễn phí
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full gradient-bg border-0 text-primary-foreground">Dùng thử miễn phí</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
