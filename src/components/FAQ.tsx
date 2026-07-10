"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

const faqs = [
  {
    q: "Preciso ter formação na área da saúde para me inscrever?",
    a: "A formação da Active Cursos é aberta para profissionais da saúde e do movimento, fisioterapeutas, profs de educação física e dança, enfermeiros e estudantes destas áreas. É um curso consolidado, para quem quer iniciar uma carreira no Pilates Clássico. O que importa é a vontade de aprender o método original com profundidade.",
  },
  {
    q: "As aulas acontecem apenas somente para quem mora em Salvador?",
    a: "A Active Cursos oferece a formação presencial em Salvador e híbrida em mais de 30 cidades no Brasil e em 7 países. Independente de onde você está, existe uma forma de se formar com a Active Pilates. Entre em contato com a nossa equipe e descubra a opção mais próxima de você.",
  },
  {
    q: "Será que a formação da Active Pilates vale o investimento?",
    a: "Com certeza. São 24 anos de experiência, professoras da 3ª geração certificadas por Inelia Garcia, linhagem direta de Joseph Pilates e mais de 3.000 profissionais formados. Você está investindo em uma formação que realmente muda o nível da sua carreira.",
  },
  {
    q: "Como faço para saber os valores?",
    a: 'Basta clicar em qualquer botão de "Quero me formar na Active Pilates" nesta página. Você vai falar direto com a nossa equipe no WhatsApp, onde passaremos todas as informações sobre planos, horários disponíveis e como agendar sua primeira aula.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full py-20 md:py-36 bg-[#FAFAF8]">
      <div className="container mx-auto px-6 md:px-24 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
            Perguntas <span className="italic text-[#CF9D2F]">frequentes</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-10 items-start">
          {/* Lista de perguntas */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 md:px-7 py-5 md:py-6 text-left group hover:bg-black/[0.015] transition-colors duration-200"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-serif text-[#CF9D2F]/60 text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sora font-semibold text-[15px] md:text-[17px] text-black group-hover:text-[#CF9D2F] transition-colors duration-200 leading-snug">
                      {faq.q}
                    </span>
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      open === i
                        ? "bg-[#CF9D2F] rotate-45"
                        : "bg-black/5 group-hover:bg-[#CF9D2F]/10"
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-colors duration-300 ${
                        open === i ? "text-black" : "text-black/50"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-7 pb-5 md:pb-7 pl-12 md:pl-16">
                        <div className="w-full h-px bg-black/[0.06] mb-4" />
                        <p className="text-black/55 leading-relaxed text-[14px] md:text-[16px]">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Painel lateral de suporte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#CF9D2F]/10 to-white border border-[#CF9D2F]/20 rounded-2xl p-7 lg:sticky lg:top-28"
          >
            <p className="text-black text-base leading-relaxed mb-6">
              Se ainda estiver com dúvidas, nossa equipe está à disposição.
            </p>
            <CTAButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              label="Falar com suporte"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
