import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const events = [
  {
    year: "1291",
    title: "Рождение Конфедерации",
    desc: "Три кантона — Ури, Швиц и Унтервальден — подписали «Союзную грамоту». Начало Швейцарской Конфедерации.",
    side: "left",
    color: "#DC2626",
  },
  {
    year: "1315",
    title: "Битва при Моргартене",
    desc: "Швейцарские пешие воины разгромили рыцарскую конницу Габсбургов. Первая крупная победа Конфедерации.",
    side: "right",
    color: "#1D4ED8",
  },
  {
    year: "1499",
    title: "Фактическая независимость",
    desc: "Швабская война: победа над Священной Римской империей. Швейцария де-факто вышла из состава империи.",
    side: "left",
    color: "#16A34A",
  },
  {
    year: "1648",
    title: "Официальная независимость",
    desc: "Вестфальский мир закрепил независимость Швейцарии от Священной Римской империи де-юре.",
    side: "right",
    color: "#DC2626",
  },
  {
    year: "1848",
    title: "Федеральная конституция",
    desc: "Принятие первой федеральной конституции. Швейцария стала современным федеративным государством.",
    side: "left",
    color: "#1D4ED8",
  },
  {
    year: "1863",
    title: "Основание Красного Креста",
    desc: "Женевец Анри Дюнан основал Международный Красный Крест. Начало традиции нейтралитета в гуманизме.",
    side: "right",
    color: "#DC2626",
  },
  {
    year: "1971",
    title: "Женщины получили право голоса",
    desc: "Одна из последних стран Западной Европы, где женщинам дали избирательные права на федеральном уровне.",
    side: "left",
    color: "#9333EA",
  },
  {
    year: "2002",
    title: "Вступление в ООН",
    desc: "Спустя десятилетия нейтралитета Швейцария вступила в ООН — 190-й член организации.",
    side: "right",
    color: "#16A34A",
  },
];

function TimelineEvent({ event, index }: { event: typeof events[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = event.side === "left";

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center">
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`${isLeft ? "" : "invisible"} text-right`}
      >
        {isLeft && (
          <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl font-black mb-1" style={{ color: event.color }}>
              {event.year}
            </div>
            <div className="font-bold text-black mb-2">{event.title}</div>
            <p className="text-neutral-500 text-sm leading-relaxed">{event.desc}</p>
          </div>
        )}
      </motion.div>

      {/* Center dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-4 h-4 rounded-full border-4 border-white shadow-md z-10"
          style={{ backgroundColor: event.color }}
        />
      </div>

      {/* Right content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`${!isLeft ? "" : "invisible"}`}
      >
        {!isLeft && (
          <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl font-black mb-1" style={{ color: event.color }}>
              {event.year}
            </div>
            <div className="font-bold text-black mb-2">{event.title}</div>
            <p className="text-neutral-500 text-sm leading-relaxed">{event.desc}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function SwissTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-neutral-50 py-20 px-6" ref={containerRef}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">История</div>
        <h2 className="text-4xl md:text-6xl font-black text-black">730 лет за 8 событий</h2>
        <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
          От союзной грамоты 1291 года до вступления в ООН
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2">
          <motion.div
            className="w-full bg-red-500 origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="flex flex-col gap-8">
          {events.map((event, i) => (
            <TimelineEvent key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
