"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK, CTA_LABEL } from "@/lib/constants";

const team = [
  {
    name: "Aline Mendonça",
    title: "Fisioterapeuta & Fundadora",
    bio: "Professora da 3ª geração, certificada por Inelia Garcia e com pós-graduação em dor. Mais de 3.000 profissionais formados em duas décadas de carreira e intercâmbios de Pilates no Canadá desde 2010. Toda essa trajetória a serviço da sua formação.",
    image: "/aline.webp",
    objectPosition: "center top",
  },
  {
    name: "Maira Baqueiro",
    title: "Fisioterapeuta & Co-fundadora",
    bio: "Professora da 3ª geração e a primeira instrutora da Bahia e de Sergipe certificada por Inélia Garcia pelo Authentic Pilates — após 980 horas de formação presencial em São Paulo sob supervisão direta dela.",
    image: "/maira.webp",
    objectPosition: "center 70%",
  },
  {
    name: "Denise Moura",
    title: "Fisioterapeuta & Coordenadora do Studio",
    bio: "Fisioterapeuta há 18 anos e professora de Pilates há 15, coordena o Studio Active Pilates desde 2020 e é docente do curso de formação. Com formações em RPG e no Método Busquet, une a profundidade da fisioterapia à precisão do movimento.",
    image: "/denise.jpg",
    objectPosition: "center top",
  },
];

export default function TeamSection() {
  return (
    <section id="equipe" className="relative w-full py-20 md:py-36 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-24 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16 md:mb-20 mx-auto text-center"
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
            Conheça quem vai conduzir
            <br />
            <span className="italic text-[#CF9D2F]">a sua formação.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.12 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-square border-b border-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: member.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="p-7 text-center">
                <p className="text-[#CF9D2F] text-xs font-semibold uppercase tracking-widest mb-1">
                  {member.title}
                </p>
                <h3 className="font-serif text-xl text-white leading-tight mb-4">
                  {member.name}
                </h3>
                <div className="w-8 h-px bg-[#CF9D2F]/40 mb-4 mx-auto" />
                <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
