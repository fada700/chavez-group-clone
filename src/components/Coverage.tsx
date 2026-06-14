import { MapPin } from "lucide-react";
import Reveal from "./Reveal";

const states = [
  "CDMX", "Estado de México", "Querétaro", "Tijuana (BC)", "Mexicali (BC)",
  "Ensenada (BC)", "Sinaloa", "Chihuahua", "Nuevo León", "Chiapas",
];

// Approximate positions on the SVG viewBox 0 0 800 500
const points: Record<string, { x: number; y: number; label: string; origin?: boolean }> = {
  cdmx: { x: 470, y: 330, label: "CDMX / Edo. Mex / Qro.", origin: true },
  tijuana: { x: 80, y: 90, label: "Tijuana" },
  mexicali: { x: 130, y: 95, label: "Mexicali" },
  ensenada: { x: 95, y: 130, label: "Ensenada" },
  sinaloa: { x: 280, y: 230, label: "Sinaloa" },
  chihuahua: { x: 290, y: 140, label: "Chihuahua" },
  nuevoleon: { x: 430, y: 200, label: "Nuevo León" },
  chiapas: { x: 640, y: 430, label: "Chiapas" },
};

const Coverage = () => {
  const origin = points.cdmx;
  const destinations = ["tijuana", "mexicali", "ensenada", "sinaloa", "chihuahua", "nuevoleon", "chiapas"];

  return (
    <section id="cobertura" className="section-padding bg-surface-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="container-section relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Rutas
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Nuestra Cobertura</h2>
            <p className="text-white/75 text-lg">
              Desde CDMX, Estado de México y Querétaro hacia todo el noroeste y más
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-sm">
            <svg viewBox="0 0 800 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Stylized Mexico silhouette */}
              <path
                d="M50,100 Q90,70 150,80 L220,100 L300,130 L380,170 L450,180 L520,200 L580,220 L640,260 L700,310 L720,380 L680,440 L600,470 L520,460 L460,430 L400,420 L340,400 L280,370 L240,330 L190,300 L150,260 L120,210 L90,170 L60,140 Z"
                fill="hsl(220 60% 22%)"
                stroke="hsl(220 50% 35%)"
                strokeWidth="2"
              />

              {/* Routes */}
              {destinations.map((d) => {
                const dest = points[d];
                return (
                  <g key={d}>
                    <line
                      x1={origin.x}
                      y1={origin.y}
                      x2={dest.x}
                      y2={dest.y}
                      stroke="hsl(28 92% 51%)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      opacity="0.85"
                    >
                      <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
                    </line>
                  </g>
                );
              })}

              {/* Destination dots */}
              {destinations.map((d) => {
                const dest = points[d];
                return (
                  <g key={`dot-${d}`}>
                    <circle cx={dest.x} cy={dest.y} r="14" fill="hsl(28 92% 51%)" opacity="0.25">
                      <animate attributeName="r" values="10;18;10" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={dest.x} cy={dest.y} r="6" fill="hsl(28 92% 51%)" />
                    <text x={dest.x} y={dest.y - 16} fill="white" fontSize="13" fontWeight="600" textAnchor="middle">
                      {dest.label}
                    </text>
                  </g>
                );
              })}

              {/* Origin */}
              <circle cx={origin.x} cy={origin.y} r="20" fill="white" opacity="0.2" />
              <circle cx={origin.x} cy={origin.y} r="10" fill="white" />
              <text x={origin.x} y={origin.y + 32} fill="white" fontSize="14" fontWeight="700" textAnchor="middle">
                {origin.label}
              </text>
            </svg>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { v: "9", l: "Tractos Activos" },
              { v: "9", l: "Cajas Secas 53\"" },
              { v: "2", l: "Cajas Refrigeradas 53\"" },
              { v: "7+", l: "Estados de Cobertura" },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 border border-white/15 rounded-2xl p-5 text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-3xl md:text-4xl font-extrabold text-accent">{s.v}</div>
                <div className="text-xs md:text-sm text-white/75 font-medium mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {states.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-accent hover:border-accent transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Coverage;
