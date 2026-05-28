import { Truck, Package, Map, Satellite } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { icon: Truck, value: 5, suffix: "", label: "Tractos activos" },
  { icon: Package, value: 6, suffix: "", label: "Cajas de 53\" (secas y refrigeradas)" },
  { icon: Map, value: 7, suffix: "+", label: "Estados con cobertura" },
  { icon: Satellite, value: 100, suffix: "%", label: "Unidades con GPS" },
];

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="container-section relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="inline-flex w-14 h-14 rounded-2xl bg-accent items-center justify-center mb-4 shadow-accent">
                <s.icon className="w-7 h-7" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold mb-1">
                {inView ? <CountUp end={s.value} duration={2} /> : 0}
                {s.suffix}
              </div>
              <div className="text-white/70 text-sm md:text-base font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
