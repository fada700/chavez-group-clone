import Reveal from "./Reveal";
import { Building2, Sparkles, User } from "lucide-react";

import nestleLogo    from "@/assets/logos/nestle_logoitpo.png";
import argosLogo     from "@/assets/logos/ARGOS_BC_logotipo.webp";
import kellogsLogo   from "@/assets/logos/Kellogg-Logo-650x366.png";
import topoChicoLogo from "@/assets/logos/topo-chico-logo-png_seeklogo-218668.png";
import kenworthLogo  from "@/assets/logos/kenworth-logo-png_seeklogo-486527.png";

const brandLogos = [
  { name: "Nestlé",                      logo: nestleLogo },
  { name: "Argos",                        logo: argosLogo },
  { name: "Kellogg's",                    logo: kellogsLogo },
  { name: "Embotelladora Las Margaritas", logo: topoChicoLogo, subtitle: "Topo Chico" },
  { name: "Kenworth",                     logo: kenworthLogo,  subtitle: "Suc. San Juan del Río, Qro." },
];

const contactRefs = [
  { name: "ER Carriers SA de CV" },
  { name: "Alfredo Enríquez" },
  { name: "Disfruleg Comercializadora Castruida" },
  { name: "Erempa SA de CV" },
];

const Clients = () => {
  return (
    <section className="relative py-20 bg-surface overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative container-section">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Respaldo
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary">
              Referencias Comerciales
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Empresas y contactos que respaldan la calidad de nuestro servicio
            </p>
          </div>
        </Reveal>

        {/* Referencias Empresariales */}
        <Reveal>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Referencias Empresariales
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {brandLogos.map((b) => (
              <div
                key={b.name}
                className="group bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center aspect-[4/3] hover:border-accent hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={b.logo}
                  alt={b.name}
                  className="max-h-16 w-auto object-contain"
                  loading="lazy"
                />
                <div className="mt-3 text-sm font-bold text-primary leading-tight">
                  {b.name}
                </div>
                {b.subtitle && (
                  <div className="text-[11px] text-muted-foreground mt-0.5">{b.subtitle}</div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Referencias de Contacto */}
        <Reveal>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Referencias de Contacto
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactRefs.map((r) => (
              <div
                key={r.name}
                className="group relative bg-card border border-border rounded-xl p-5 hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-muted group-hover:bg-accent/15 flex items-center justify-center transition-colors duration-300">
                    {r.name.split(" ").length <= 2 ? (
                      <User className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                    ) : (
                      <Building2 className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-primary leading-snug">{r.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Clients;
