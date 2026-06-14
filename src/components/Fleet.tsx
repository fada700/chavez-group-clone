import { Truck, Snowflake, Package, Satellite, ShieldCheck, ArrowRight, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import fleetData from "@/data/fleet-data.json";

// Import all images
import f01 from "@/assets/fleet/69ddd77b-4747-44fd-98c2-83bae0129650.jfif";
import f02 from "@/assets/fleet/796ed8cc-866a-4d77-bba5-daaee913fa19.jfif";
import f03 from "@/assets/truck-red.jpg";
import f04 from "@/assets/tracto_blanco1.png";
import f05 from "@/assets/tracto_azul.png";
import f06 from "@/assets/truck-black.jpg";
import f07 from "@/assets/tracto_blanco2.png";
import f08 from "@/assets/tracto_blanco3.png";
import f09 from "@/assets/truck-hero.jpg";
import cajaSeca from "@/assets/fleet/caja_seca.png";
import cajaRefri from "@/assets/fleet/caja_refrigerada.png";

// Map image keys to imports
const imageMap: Record<string, string> = {
  "fleet/69ddd77b-4747-44fd-98c2-83bae0129650.jfif": f01,
  "fleet/796ed8cc-866a-4d77-bba5-daaee913fa19.jfif": f02,
  "truck-red.jpg": f03,
  "tracto_blanco1.png": f04,
  "tracto_azul.png": f05,
  "truck-black.jpg": f06,
  "tracto_blanco2.png": f07,
  "tracto_blanco3.png": f08,
  "truck-hero.jpg": f09,
  "fleet/caja_seca.png": cajaSeca,
  "fleet/caja_refrigerada.png": cajaRefri,
};

const Fleet = () => {
  return (
    <section id="flota" className="section-padding bg-background">
      <div className="container-section">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Equipo
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
              Nuestra Flota
            </h2>
            <p className="text-muted-foreground text-lg">
              9 tractos, 9 cajas secas y 2 refrigeradas — 100% monitoreadas con GPS satelital
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {fleetData.units.map((u, i) => (
            <Reveal key={`${u.num}-${i}`} delay={i * 50}>
              <article className="group h-full flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={imageMap[u.img]}
                    alt={`${u.name || u.type} ${u.num}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {u.type}
                  </div>
                  {u.highlight && (
                    <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {u.highlight}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-primary leading-tight">
                        {u.type === "Tracto" 
                          ? `Tracto ${u.num}` 
                          : u.name}
                      </h3>
                      {u.color && u.type === "Tracto" && (
                        <span className="text-xs text-muted-foreground font-medium mt-1">
                          {u.color}
                        </span>
                      )}
                    </div>
                    {u.type === "Tracto" ? (
                      <Truck className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : u.type === "Caja Refrigerada" ? (
                      <Snowflake className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                      <Package className="w-5 h-5 text-accent flex-shrink-0" />
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-foreground font-semibold mb-4">
                    <Gauge className="w-4 h-4 text-accent" />
                    {u.capacity}
                  </div>

                  <ul className="space-y-1.5 text-sm text-muted-foreground mb-5 flex-1">
                    {u.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="accent" size="sm" className="w-full group/btn">
                    <a href="#contacto">
                      Cotizar esta unidad
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground bg-surface rounded-xl p-5">
            <div className="flex items-center gap-2">
              <Satellite className="w-4 h-4 text-accent" /> Rastreo satelital GPS
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" /> Seguro vial vigente
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Fleet;
