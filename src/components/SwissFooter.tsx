import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function SwissFooter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      className="relative h-[400px] sm:h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)]">
          <div className="bg-red-600 py-6 md:py-10 px-6 h-full w-full flex flex-col justify-between" ref={ref}>
            <div className="flex gap-12 md:gap-20">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-red-200 text-xs tracking-wider">Разделы</h3>
                {["Контрасты", "Факты", "Языки", "История"].map((item) => (
                  <span key={item} className="text-white hover:text-red-200 transition-colors text-sm cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-red-200 text-xs tracking-wider">Источники</h3>
                {["Swiss Federal Statistics", "Wikipedia", "Britannica"].map((item) => (
                  <span key={item} className="text-white hover:text-red-200 transition-colors text-sm cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-[17vw] leading-[0.8] text-white font-black tracking-tight"
              >
                🇨🇭
              </motion.h1>
              <div className="text-right flex flex-col items-end gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white p-2 rounded-lg"
                >
                  <QRCodeSVG
                    value="https://moonlight-initiative-12--preview.poehali.dev/"
                    size={80}
                    bgColor="#ffffff"
                    fgColor="#000000"
                  />
                </motion.div>
                <p className="text-white/50 text-xs">Открыть сайт</p>
                <p className="text-white/70 text-sm">Швейцарская Конфедерация</p>
                <p className="text-white/50 text-xs">{new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}