import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-chavez.png";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#flota", label: "Flota" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-section flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className={`rounded-lg flex items-center justify-center transition-all ${scrolled ? "bg-white p-1 shadow-sm" : "bg-white/95 p-1"}`}>
            <img src={logo} alt="Chávez Truck Logístic" className="w-10 h-10 object-contain" />
          </div>
          <div className="leading-tight">
            <div className={`font-extrabold text-base tracking-tight ${scrolled ? "text-primary" : "text-white"}`}>
              GRUPO CHAVEZ
            </div>
            <div className={`text-[10px] uppercase tracking-widest ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Chávez Truck Logístic
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-primary" : "text-white"}`}
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg">
          <div className="container-section py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground font-medium hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="accent" className="mt-2">
              <a href="#contacto" onClick={() => setOpen(false)}>Solicitar Cotización</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
