"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { WA_LINK, CTA_LABEL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-start sm:items-center bg-[#0A0A0A] overflow-hidden pt-0 pb-16 sm:py-36 lg:py-28"
    >
      {/* Textura de fundo */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(207,157,47,0.9) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow dourado */}
      <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#CF9D2F]/10 blur-[140px]" />

      <div className="relative z-10 container mx-auto px-6 md:px-24 lg:px-28">
        <div className="flex flex-col justify-between min-h-[68vh] lg:min-h-0 lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:items-center">
          {/* Coluna de texto */}
          <div className="order-2 lg:order-1 max-w-xs md:max-w-md lg:max-w-lg ml-4 md:ml-10 lg:ml-16 mt-12 sm:mt-0">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 md:mb-8"
            >
              <Image src="/logo.svg" alt="Active Cursos" width={76} height={70} className="invert opacity-90 w-12 h-auto md:w-[76px]" />
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-[3.4rem] leading-[1.12] mb-4 md:mb-6"
            >
              <span className="block whitespace-nowrap">A maior referência</span>
              <span className="block whitespace-nowrap">
                em <span className="italic text-[#CF9D2F]">Pilates Clássico</span>
              </span>
              <span className="block whitespace-nowrap">no Nordeste.</span>
            </motion.h1>

            {/* H2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/55 text-sm md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-10 max-w-lg"
            >
              Aprenda o método original com
              <br />
              quem tem 20 anos de história.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <CTAButton
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                label={CTA_LABEL}
                className="px-3.5 py-2 text-xs md:px-7 md:py-3 md:text-sm"
              />
            </motion.div>
          </div>

          {/* Coluna de imagem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="order-1 lg:order-2 relative w-auto -mx-6 sm:mx-0 sm:w-full sm:max-w-sm lg:w-auto lg:max-w-none lg:mx-0 lg:right-8"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[4/5] overflow-hidden md:rounded-[1.75rem] border-0 md:border md:border-[#CF9D2F]/15">
              <Image
                src="/hero-photo.webp"
                alt="Foto do estúdio Active Pilates"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Badge flutuante */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -bottom-4 left-0 right-0 mx-auto w-[65%] md:w-auto md:left-auto md:right-auto md:mx-0 md:-left-8 md:-bottom-8 bg-[#0A0A0A] border border-[#CF9D2F]/25 rounded-2xl px-3 py-2.5 md:px-6 md:py-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-5">
                <div className="text-center md:text-left">
                  <AnimatedNumber value={20} prefix="+" className="font-serif text-[#CF9D2F] text-base md:text-3xl leading-none" />
                  <p className="text-white/40 text-[8px] md:text-[11px] mt-1 md:mt-1.5 tracking-wide">anos de história</p>
                </div>
                <div className="w-px h-6 md:h-9 bg-white/10" />
                <div className="text-center md:text-left">
                  <AnimatedNumber value={3000} prefix="+" className="font-serif text-[#CF9D2F] text-base md:text-3xl leading-none" />
                  <p className="text-white/40 text-[8px] md:text-[11px] mt-1 md:mt-1.5 tracking-wide">profissionais formados</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
