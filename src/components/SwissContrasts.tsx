import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contrasts = [
  {
    left: { label: "Традиция", value: "1291", desc: "Старейшая демократия Европы" },
    right: { label: "Инновации", value: "№1", desc: "Глобальный лидер инноваций" },
    bg: "bg-black",
    textLeft: "text-white",
    textRight: "text-red-500",
  },
  {
    left: { label: "Нейтралитет", value: "207", desc: "Лет без войны" },
    right: { label: "Армия", value: "140k", desc: "Резервистов всегда готовы" },
    bg: "bg-red-600",
    textLeft: "text-white",
    textRight: "text-black",
  },
  {
    left: { label: "Горы", value: "4478м", desc: "Маттерхорн — символ страны" },
    right: { label: "Банки", value: "7500", desc: "Млрд $ активов под управлением" },
    bg: "bg-white",
    textLeft: "text-black",
    textRight: "text-red-600",
  },
];

function ContrastRow({ item }: { item: typeof contrasts[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`${item.bg} min-h-[50vh] flex items-center`}>
      <div className="w-full grid grid-cols-2 divide-x divide-white/10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-16 flex flex-col justify-center"
        >
          <div className={`text-xs uppercase tracking-widest mb-3 opacity-60 ${item.textLeft}`}>
            {item.left.label}
          </div>
          <div className={`text-6xl md:text-8xl font-black leading-none mb-3 ${item.textLeft}`}>
            {item.left.value}
          </div>
          <div className={`text-base opacity-70 ${item.textLeft}`}>{item.left.desc}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-16 flex flex-col justify-center items-end text-right"
        >
          <div className={`text-xs uppercase tracking-widest mb-3 opacity-60 ${item.textRight}`}>
            {item.right.label}
          </div>
          <div className={`text-6xl md:text-8xl font-black leading-none mb-3 ${item.textRight}`}>
            {item.right.value}
          </div>
          <div className={`text-base opacity-70 ${item.textRight}`}>{item.right.desc}</div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SwissContrasts() {
  return (
    <section>
      {contrasts.map((item, i) => (
        <ContrastRow key={i} item={item} />
      ))}
    </section>
  );
}