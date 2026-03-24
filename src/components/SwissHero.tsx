import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function SwissHero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div ref={container} className="relative flex items-center justify-center h-screen overflow-hidden bg-black">
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-full">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Swiss Alps"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400 font-medium"
        >
          Конфедерация контрастов
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs md:text-sm text-white/50 uppercase tracking-widest mb-3"
        >
          Феномен Швейцарии: как устроена страна контрастов
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-[11rem] font-black tracking-tight leading-none mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          ШВЕЙЦАРИЯ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl text-white/80 max-w-xl mx-auto"
        >
          4 языка. 26 кантонов. 1 нация.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <img
            src="https://cdn.poehali.dev/projects/34743a27-c339-456c-b3b1-8e32cfa43817/bucket/08de0ba3-ae03-4017-a0f2-445a0ad9523b.jpg"
            alt="Горелик Леонид Денисович"
            className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
          />
          <div className="text-left">
            <div className="text-white text-sm font-semibold leading-tight">Горелик Леонид Денисович</div>
            <div className="text-white/50 text-xs tracking-wide">10Б</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Листайте вниз</span>
          <div className="w-px h-12 bg-white/30 animate-pulse" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
}