import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const facts = [
  {
    number: "8.7M",
    label: "Жителей",
    desc: "При этом 25% — иностранцы. Одна из самых интернациональных стран мира.",
    accent: "bg-red-600",
    bg: "bg-black",
    text: "text-white",
  },
  {
    number: "41 285",
    label: "км² площади",
    desc: "Меньше Московской области — но 7 официальных UNESCO-объектов природы.",
    accent: "bg-white",
    bg: "bg-red-600",
    text: "text-white",
  },
  {
    number: "26",
    label: "Кантонов",
    desc: "Каждый кантон имеет собственную конституцию, парламент и правительство.",
    accent: "bg-red-600",
    bg: "bg-white",
    text: "text-black",
  },
  {
    number: "#1",
    label: "Инноваций",
    desc: "Швейцария — лидер Глобального индекса инноваций 13 лет подряд.",
    accent: "bg-white",
    bg: "bg-black",
    text: "text-white",
  },
];

function FactCard({ fact, index }: { fact: typeof facts[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${fact.bg} ${fact.text} p-10 md:p-16 flex flex-col justify-between min-h-[320px] relative overflow-hidden`}
    >
      <div className={`absolute top-0 left-0 w-2 h-full ${fact.accent}`} />
      <div>
        <div className="text-6xl md:text-8xl font-black leading-none mb-2">{fact.number}</div>
        <div className="text-xl md:text-2xl font-bold uppercase tracking-widest opacity-60 mb-6">{fact.label}</div>
      </div>
      <p className="text-base md:text-lg opacity-80 max-w-md leading-relaxed">{fact.desc}</p>
    </motion.div>
  );
}

export default function SwissFacts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-black py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <div className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">Факты</div>
        <h2 className="text-4xl md:text-6xl font-black text-white">Страна в цифрах</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {facts.map((fact, i) => (
          <FactCard key={i} fact={fact} index={i} />
        ))}
      </div>
    </section>
  );
}
