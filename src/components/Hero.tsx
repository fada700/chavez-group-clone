import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/truck-hero.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src={heroImg} alt="Tracto camión Transportes Grupo Chavez" className="w-full h-full object-cover object-center" />
        {/* Layered overlay for a cleaner, less flat look */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="relative container-section text-center text-white pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 backdrop-blur-sm mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium tracking-wide">Cobertura nacional · GPS satelital</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] max-w-5xl mx-auto animate-fade-in">
          Transporte de carga <span className="text-gradient-accent">seguro, puntual</span> y confiable
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Conectamos México desde CDMX y Querétaro hasta Tijuana, Sinaloa, Chihuahua, Nuevo León, Chiapas y más.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button asChild variant="accent" size="lg" className="group">
            <a href="#servicios">
              Conoce nuestros servicios
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white/5 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-primary">
            <a href="#contacto">
              <Phone className="mr-1 w-4 h-4" />
              Contáctanos
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
