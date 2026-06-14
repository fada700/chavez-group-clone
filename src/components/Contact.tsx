import { MapPin, Phone, Mail, FileText, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-section">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Contacto
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
              Estamos para servirte
            </h2>
            <p className="text-muted-foreground text-lg">
              Comunícate directamente con nosotros por teléfono, WhatsApp o correo.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-gradient-primary text-white rounded-2xl p-6 md:p-8 shadow-elegant h-full">
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60 mb-1">Dirección Fiscal</div>
                    <div className="text-sm leading-relaxed">
                      Calle Cruz del Campo Santo Mz3 Lt13, Col. Ciudad Satélite, Naucalpan de Juárez, México. C.P. 53100
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60 mb-1">Teléfono</div>
                    <a href="tel:5548415148" className="text-sm font-semibold hover:text-accent transition-colors">554 841 5148</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60 mb-1">Correo</div>
                    <a href="mailto:beni_3000@outlook.com" className="text-sm font-semibold hover:text-accent transition-colors break-all">beni_3000@outlook.com</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60 mb-1">RFC</div>
                    <div className="text-sm font-semibold">CAGR80203215D9</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60 mb-1">Gerente General</div>
                    <div className="text-sm font-semibold">Rubén Chávez García</div>
                  </div>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button asChild variant="accent" size="lg" className="flex-1">
                  <a href="https://wa.me/525548415148?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización%20de%20transporte" target="_blank" rel="noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1 bg-white/5 border-white/40 text-white hover:bg-white hover:text-primary">
                  <a href="tel:5548415148">
                    <Phone className="w-4 h-4" />
                    Llamar
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Patio de Maniobras</div>
                  <h3 className="text-lg font-bold text-primary">Oriente #06, Nuevo Parque Industrial</h3>
                  <p className="text-sm text-muted-foreground">San Juan del Río, Querétaro</p>
                </div>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden shadow-elegant border border-border min-h-[380px]">
                <iframe
                  title="Patio de Maniobras Transportes Grupo Chavez"
                  src="https://www.google.com/maps?q=Oriente+6,+Nuevo+Parque+Industrial,+San+Juan+del+Rio,+Quer%C3%A9taro&hl=es&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "380px" }}
                  loading="lazy"
                />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Oriente+6,+Nuevo+Parque+Industrial,+San+Juan+del+Rio,+Quer%C3%A9taro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-accent hover:underline"
              >
                <MapPin className="w-4 h-4" />
                Abrir en Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
