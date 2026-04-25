import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
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
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const offset = window.innerHeight * 0.35;
      let current = "#inicio";
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (!el) continue;
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.top <= offset) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-section">
        <nav
          className={`flex items-center justify-between rounded-full transition-all duration-300 px-3 md:px-4 ${
            scrolled
              ? "bg-background/85 backdrop-blur-xl shadow-lg border border-border/60 py-2"
              : "bg-white/10 backdrop-blur-md border border-white/15 py-2.5"
          }`}
        >
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 pl-1 group">
            <div className="rounded-full bg-white p-1 shadow-sm ring-1 ring-black/5">
              <img
                src={logo}
                alt="Chávez Truck Logístic"
                className="w-9 h-9 object-contain"
              />
            </div>
            <div className="leading-tight hidden sm:block">
              <div
                className={`font-extrabold text-[13px] tracking-tight transition-colors ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                GRUPO CHAVEZ
              </div>
              <div
                className={`text-[9px] uppercase tracking-[0.18em] transition-colors ${
                  scrolled ? "text-muted-foreground" : "text-white/75"
                }`}
              >
                Truck Logístic
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative px-3.5 py-2 text-[13px] font-medium rounded-full transition-all duration-300
                      ${
                        scrolled
                          ? isActive
                            ? "text-primary bg-accent/10"
                            : "text-foreground/80 hover:text-primary hover:bg-muted"
                          : isActive
                            ? "text-white bg-white/15"
                            : "text-white/85 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {l.label}
                    <span
                      className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] rounded-full bg-accent transition-all duration-300 ${
                        isActive ? "w-5 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="accent"
              size="sm"
              className="hidden md:inline-flex rounded-full group"
            >
              <a href="#contacto">
                Cotizar
                <ArrowRight className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>

            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                scrolled
                  ? "text-primary hover:bg-muted"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Menú"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden container-section mt-2 animate-fade-in">
          <div className="bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-lg p-3">
            <div className="flex flex-col gap-1">
              {links.map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </a>
                );
              })}
              <Button
                asChild
                variant="accent"
                className="mt-2 rounded-full"
              >
                <a href="#contacto" onClick={() => setOpen(false)}>
                  Solicitar Cotización
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
