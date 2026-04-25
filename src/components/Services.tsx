import { Package, Snowflake, Satellite, ShieldCheck, MapPinned, Settings2 } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  { icon: Package, title: "Carga Seca", desc: "4 cajas secas de 53\" disponibles para todo tipo de mercancía." },
  { icon: Snowflake, title: "Carga Refrigerada", desc: "2 cajas refrigeradas de 53\" para productos que requieren temperatura controlada." },
  { icon: Satellite, title: "Rastreo GPS", desc: "Todas las unidades cuentan con monitoreo online mediante rastreo satelital GPS." },
  { icon: ShieldCheck, title: "Seguro Vial", desc: "Cada unidad cuenta con seguro vial vigente para garantizar la seguridad de tu carga." },
  { icon: MapPinned, title: "Distribución Nacional", desc: "Rutas activas hacia múltiples estados de la República Mexicana." },
  { icon: Settings2, title: "Logística a Medida", desc: "Soluciones de transporte adaptadas a las necesidades específicas de cada cliente." },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-surface">
      <div className="container-section">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Servicios
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
              Soluciones integrales de transporte
            </h2>
            <p className="text-muted-foreground text-lg">
              Carga pesada y liviana con la seguridad y puntualidad que tu empresa necesita.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group relative bg-card border border-border rounded-2xl p-7 h-full hover:border-accent hover:shadow-elegant transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="absolute bottom-0 left-7 right-7 h-1 bg-gradient-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
