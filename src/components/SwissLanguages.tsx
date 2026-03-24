import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const languages = [
  {
    id: "de",
    name: "Deutsch",
    nameRu: "Немецкий",
    percent: 63,
    color: "#DC2626",
    regions: ["Цюрих", "Берн", "Базель", "Люцерн", "Санкт-Галлен"],
    fact: "Самый распространённый язык. Швейцарцы говорят на местных диалектах (Schweizerdeutsch), которые сильно отличаются от немецкого.",
    greeting: "Grüezi!",
  },
  {
    id: "fr",
    name: "Français",
    nameRu: "Французский",
    percent: 23,
    color: "#1D4ED8",
    regions: ["Женева", "Лозанна", "Фрибур", "Невшатель", "Сьон"],
    fact: 'Западная часть страны — "Романдия". Французский здесь почти идентичен французскому во Франции.',
    greeting: "Bonjour!",
  },
  {
    id: "it",
    name: "Italiano",
    nameRu: "Итальянский",
    percent: 8,
    color: "#16A34A",
    regions: ["Лугано", "Беллинцона", "Локарно"],
    fact: 'Кантон Тичино и часть Граубюндена. Итальянская культура, средиземноморский климат — "маленькая Италия" в Альпах.',
    greeting: "Buongiorno!",
  },
  {
    id: "rm",
    name: "Rumantsch",
    nameRu: "Романшский",
    percent: 0.5,
    color: "#9333EA",
    regions: ["Граубюнден"],
    fact: "Язык-реликт, потомок латыни. Около 36 000 носителей в кантоне Граубюнден. Официальный язык с 1938 года.",
    greeting: "Allegra!",
  },
];

const swissRegions = [
  // DE
  { x: 52, y: 20, lang: "de", size: 18 },
  { x: 45, y: 38, lang: "de", size: 16 },
  { x: 70, y: 18, lang: "de", size: 14 },
  { x: 78, y: 32, lang: "de", size: 12 },
  { x: 35, y: 28, lang: "de", size: 14 },
  { x: 60, y: 42, lang: "de", size: 10 },
  // FR
  { x: 18, y: 40, lang: "fr", size: 16 },
  { x: 12, y: 58, lang: "fr", size: 14 },
  { x: 25, y: 52, lang: "fr", size: 12 },
  { x: 8, y: 45, lang: "fr", size: 10 },
  // IT
  { x: 55, y: 78, lang: "it", size: 14 },
  { x: 45, y: 84, lang: "it", size: 12 },
  { x: 65, y: 72, lang: "it", size: 10 },
  // RM
  { x: 72, y: 58, lang: "rm", size: 10 },
  { x: 80, y: 64, lang: "rm", size: 8 },
];

export default function SwissLanguages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<string | null>(null);

  const activeLang = languages.find((l) => l.id === active);

  return (
    <section className="bg-white py-20 px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">Языки</div>
        <h2 className="text-4xl md:text-6xl font-black text-black">Четыре голоса одной страны</h2>
        <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
          Нажмите на язык, чтобы узнать больше
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Map visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-neutral-100 rounded-2xl overflow-hidden aspect-square"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full p-4">
            {/* Simple stylized Switzerland outline */}
            <path
              d="M10,45 L15,35 L25,30 L35,25 L50,20 L65,18 L80,22 L88,30 L90,42 L85,55 L82,65 L75,72 L68,78 L58,85 L48,88 L38,82 L28,75 L20,65 L12,58 Z"
              fill="#e5e7eb"
              stroke="#d1d5db"
              strokeWidth="0.5"
            />
            {swissRegions.map((r, i) => {
              const lang = languages.find((l) => l.id === r.lang)!;
              const isActive = active === r.lang;
              return (
                <motion.circle
                  key={i}
                  cx={r.x}
                  cy={r.y}
                  r={r.size / 2}
                  fill={lang.color}
                  opacity={active ? (isActive ? 0.9 : 0.2) : 0.7}
                  animate={{ r: isActive ? r.size / 2 + 1 : r.size / 2 }}
                  transition={{ duration: 0.3 }}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActive(active === r.lang ? null : r.lang)}
                />
              );
            })}
          </svg>
          {/* Legend */}
          <div className="absolute bottom-4 left-4 flex flex-col gap-1">
            {languages.map((l) => (
              <div
                key={l.id}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setActive(active === l.id ? null : l.id)}
              >
                <div
                  className="w-3 h-3 rounded-full transition-transform duration-200"
                  style={{
                    backgroundColor: l.color,
                    transform: active === l.id ? "scale(1.4)" : "scale(1)",
                  }}
                />
                <span className="text-xs text-neutral-600 font-medium">{l.nameRu}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Language cards */}
        <div className="flex flex-col gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.id}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              onClick={() => setActive(active === lang.id ? null : lang.id)}
              className="border-2 rounded-xl p-5 cursor-pointer transition-all duration-300"
              style={{
                borderColor: active === lang.id ? lang.color : "#e5e7eb",
                backgroundColor: active === lang.id ? lang.color + "10" : "white",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span className="font-black text-lg text-black">{lang.name}</span>
                  <span className="text-neutral-400 text-sm">/ {lang.nameRu}</span>
                </div>
                <span className="font-bold text-xl" style={{ color: lang.color }}>
                  {lang.percent}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden mb-3">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: lang.color }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${lang.percent}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + 0.1 * i }}
                />
              </div>

              {active === lang.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold mb-2" style={{ color: lang.color }}>
                    {lang.greeting}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-3">{lang.fact}</p>
                  <div className="flex flex-wrap gap-2">
                    {lang.regions.map((r) => (
                      <span
                        key={r}
                        className="text-xs px-2 py-1 rounded-full font-medium text-white"
                        style={{ backgroundColor: lang.color }}
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
