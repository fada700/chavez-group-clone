import { Target, Eye, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import truckImg from "@/assets/truck-red.jpg";

const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              La Empresa
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
              Transportando México con compromiso y seguridad
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Transportes Grupo Chavez presta servicios de transporte de calidad, puntualidad y seguridad a empresas que requieren trasladar sus productos dentro del territorio nacional. Nuestro objetivo es satisfacer oportunamente las necesidades y expectativas de nuestros clientes, ofreciendo una amplia variedad de servicios de transporte de carga pesada y liviana.
            </p>
            <ul className="space-y-3">
              {[
                "Personal altamente capacitado y certificado",
                "Flota monitoreada 100% con GPS satelital",
                "Seguro vial vigente en todas las unidades",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-lg -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
              <img
                src={truckImg}
                alt="Tracto Grupo Chavez en operación"
                className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/3]"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <Reveal>
            <div className="group relative bg-card border border-border rounded-2xl p-8 shadow-md hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser una de las empresas líderes en cubrir todo el territorio nacional en transporte de carga, reconocidos por cumplir las necesidades de nuestros clientes buscando siempre su bienestar, y procurando la motivación de nuestros colaboradores para aumentar la productividad.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="group relative bg-primary text-primary-foreground rounded-2xl p-8 shadow-md hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-5">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Misión</h3>
                <p className="text-white/85 leading-relaxed">
                  Prestar servicio de carga pesada y liviana con personal altamente capacitado y calificado, en constante actualización, para colocarnos siempre como la primera opción de nuestros clientes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
