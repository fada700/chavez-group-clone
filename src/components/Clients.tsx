import Reveal from "./Reveal";
import { Phone } from "lucide-react";

const clients = [
  { name: "Jumex", sub: "Envases Universales" },
  { name: "Scribe", sub: "Papelera" },
  { name: "Kimberly Clark", sub: "Consumo" },
];

const references = [
  { name: "Eduardo Miranda Colín"},
  { name: "Disfruleg Comercializadora Castruida"},
  { name: "Erempa SA de CV"},
  { name: "Kenworth SA de CV", sub: "Suc. San Juan del Río, Qro."},
];

const Clients = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container-section">
        <Reveal>
          <div className="text-center mb-10">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Clientes
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary">
              Empresas que confían en nosotros
            </h2>
            <p className="text-muted-foreground mt-2">Hemos trabajado con marcas líderes a nivel nacional</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-elegant"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                  {c.name}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">
                  {c.sub}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="text-center mt-16 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary">
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
                className="bg-card border border-border rounded-xl p-5 hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-elegant"
              >
                <div className="text-base font-bold text-primary leading-snug">
                  {r.name}
                </div>
                {r.sub && (
                  <div className="text-xs text-muted-foreground mt-1">{r.sub}</div>
                )}
                <a
                  href={`tel:${r.tel}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {r.phone}
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Clients;
