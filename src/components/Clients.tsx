import Reveal from "./Reveal";
import { BadgeCheck, Building2, Sparkles } from "lucide-react";

const clients = [
  { name: "Jumex", sub: "Envases Universales", initial: "J" },
  { name: "Scribe", sub: "Papelera", initial: "S" },
  { name: "Kimberly Clark", sub: "Consumo", initial: "K" },
];

const references = [
  { name: "Eduardo Miranda Colín" },
  { name: "Disfruleg Comercializadora Castruida" },
  { name: "Erempa SA de CV" },
  { name: "Kenworth SA de CV", sub: "Suc. San Juan del Río, Qro." },
];

const Clients = () => {
  return (
    <section className="relative py-20 bg-surface overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative container-section">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Clientes
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary">
              Empresas que confían en nosotros
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Hemos trabajado con marcas líderes a nivel nacional
            </p>
          </div>
        </Reveal>

        {/* Featured client cards */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clients.map((c, i) => (
              <div
                key={c.name}
                className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-border to-border hover:from-accent hover:to-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.35)]"
              >
                <div className="relative h-full bg-card rounded-2xl p-7 overflow-hidden">
                  {/* Hover gradient wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Number */}
                  <div className="absolute top-4 right-5 text-6xl font-black text-muted/40 group-hover:text-accent/20 transition-colors duration-500 leading-none select-none">
                    0{i + 1}
                  </div>

                  <div className="relative">
                    {/* Initial badge */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center text-2xl font-black mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500">
                      {c.initial}
                    </div>

                    <div className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight group-hover:text-accent transition-colors duration-300">
                      {c.name}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-2">
                      {c.sub}
                    </div>

                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                      <BadgeCheck className="w-4 h-4" />
                      Cliente verificado
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* References */}
        <Reveal>
          <div className="text-center mt-20 mb-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-10 bg-border" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Respaldo
              </span>
              <span className="h-px w-10 bg-border" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Referencias comerciales
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Otros clientes y proveedores que respaldan nuestro trabajo
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {references.map((r) => (
              <div
                key={r.name}
                className="group relative bg-card border border-border rounded-xl p-5 hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-muted group-hover:bg-accent/15 flex items-center justify-center transition-colors duration-300">
                    <Building2 className="w-4.5 h-4.5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-primary leading-snug">
                      {r.name}
                    </div>
                    {r.sub && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {r.sub}
                      </div>
                    )}
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
