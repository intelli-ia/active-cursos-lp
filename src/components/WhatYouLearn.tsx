"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK, CTA_LABEL } from "@/lib/constants";

const items = [
  {
    number: "01",
    title: "Acesso à Fonte",
    description:
      "Sua trajetória começa direto na raiz do método, absorvendo a linhagem direta e autêntica de Joseph Pilates que a Active preserva.",
  },
  {
    number: "02",
    title: "Domínio Técnico",
    description:
      "Você substitui qualquer insegurança por clareza absoluta, dominando a execução e os princípios práticos do método.",
  },
  {
    number: "03",
    title: "Aplicação Clínica",
    description:
      "Com a técnica consolidada, você ganha capacidade para atender qualquer corpo no estúdio, guiando com segurança desde alunos saudáveis até casos de reabilitação e dores crônicas.",
  },
  {
    number: "04",
    title: "Chancela Internacional",
    description:
      "Seu esforço é validado por um diploma de peso global, reconhecido em mais de 30 cidades e 7 países, eliminando as fronteiras da sua carreira.",
  },
  {
    number: "05",
    title: "Posicionamento de Mercado",
    description:
      "Essa bagagem histórica e técnica descola o seu nome da concorrência, construindo uma autoridade que poucos profissionais no Brasil possuem.",
  },
  {
    number: "06",
    title: "Crescimento Orgânico",
    description:
      "Na rotina do estúdio, a excelência vira resultado financeiro. Você constrói turmas sólidas através de alunos que evoluem rápido, permanecem por anos e multiplicam suas indicações.",
  },
];

export default function WhatYouLearnSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="formacao" className="relative w-full py-20 md:py-36 bg-[#FAFAF8]">
      <div className="container mx-auto px-6 md:px-24 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
            O que você aprende na <span className="italic text-[#CF9D2F]">Active.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-[1.75rem] border border-black/10">
            <Image
              src="/whatyoulearn-photo.webp"
              alt="Aula na Active"
              fill
              sizes="(min-width: 1024px) 60vw, 90vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Linha de fundo */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/10 md:-translate-x-1/2" />
          {/* Linha de progresso */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-px bg-[#CF9D2F] md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {items.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: (i % 3) * 0.08 }}
                className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-14 items-center"
              >
                {/* Marcador */}
                <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-11 h-11 rounded-full bg-[#FAFAF8] border border-[#CF9D2F]/50 flex items-center justify-center shrink-0 z-10">
                  <span className="font-serif text-[#CF9D2F] text-sm">{item.number}</span>
                </div>

                <div className={i % 2 === 0 ? "md:text-right md:pr-2" : "md:col-start-2 md:text-left md:pl-2"}>
                  <h3 className="font-serif text-lg md:text-xl text-black leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black/55 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <CTAButton
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            label={CTA_LABEL}
          />
        </motion.div>
      </div>
    </section>
  );
}
