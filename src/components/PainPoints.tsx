"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const points = [
  "Tenta construir autoridade sem linhagem reconhecida para apresentar",
  "Aceitar qualquer aluno sem saber adaptar o método",
  "Atende alunos com dores ou limitações sem especialidade",
  "Abre um estúdio sem entender o lado empresarial",
  "Subestima o quanto a confiança técnica impacta na permanência dos alunos",
];

export default function PainPointsSection() {
  return (
    <section className="relative w-full py-12 md:py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-24 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-12 items-start mb-8 md:mb-10">
          {/* Coluna de imagem + headline */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="hidden lg:block mb-6"
            >
              <div className="relative w-full aspect-[21/9] overflow-hidden rounded-[1.75rem] border border-[#CF9D2F]/15">
                <Image
                  src="/painpoints-photo.webp"
                  alt="Prática do método Pilates"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-2xl md:text-3xl lg:text-[2.4rem] text-white leading-tight mb-6"
            >
              <span className="italic text-[#CF9D2F]">O Pilates cresceu no Brasil</span> e com ele grandes oportunidades
            </motion.h2>
          </div>

          {/* Coluna de pontos */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white text-base md:text-lg leading-relaxed mb-8"
            >
              Mas, nada adianta a oportunidade se você:
            </motion.p>

            <div className="flex flex-col gap-3">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-[#CF9D2F]/50 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-[#CF9D2F]" strokeWidth={2.5} />
                  </span>
                  <p className="text-white text-sm md:text-base leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="font-serif italic text-xl md:text-2xl lg:text-3xl text-white leading-snug">
            É por isso que sua formação precisa estar à altura da carreira que você quer construir.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
