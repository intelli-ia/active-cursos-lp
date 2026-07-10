"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK, CTA_LABEL } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-40 bg-[#0A0A0A] border-t border-white/5">
      {/* Espaço para imagem de fundo */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(207,157,47,0.9) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/60" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#CF9D2F]/10 blur-[160px]" />

      {/* Detalhe decorativo dourado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#CF9D2F]/40 z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#CF9D2F]/60 z-10" />

      <div className="relative z-10 container mx-auto px-6 md:px-24 lg:px-28">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-center"
          >
            <Image src="/logo.svg" alt="Active Cursos" width={44} height={41} className="invert opacity-80" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-10"
          >
            A maior referência em{" "}
            <span className="italic text-[#CF9D2F]">Pilates Clássico</span> no Nordeste.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <CTAButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              label={CTA_LABEL}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
