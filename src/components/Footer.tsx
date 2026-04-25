import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-chavez.png";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#flota", label: "Flota" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#contacto", label: "Contacto" },
];

const Footer = () => {
  return (
    <footer className="bg-surface-dark text-white pt-16 pb-6">
      <div className="container-section">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-lg p-1.5">
                <img src={logo} alt="Chávez Truck Logístic" className="w-12 h-12 object-contain" />
              </div>
              <div className="leading-tight">
                <div className="font-extrabold tracking-tight">GRUPO CHAVEZ</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">Chávez Truck Logístic</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Transportando México con seguridad y compromiso. Carga seca y refrigerada con cobertura nacional.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-4 text-accent">Navegación</h4>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/75 hover:text-accent text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-4 text-accent">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" /> Ciudad Satélite, Naucalpan, Edo. Mex.</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" /> 554 841 5148</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" /> beni_3000@outlook.com</li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="https://wa.me/525548415148" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:beni_3000@outlook.com" aria-label="Correo" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/55">
          <div>RFC CAGR80203215D9 · Rubén Chávez García</div>
          <div>© {new Date().getFullYear()} Transportes Grupo Chavez. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
