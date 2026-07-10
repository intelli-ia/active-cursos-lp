"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK, CTA_LABEL } from "@/lib/constants";

const testimonials = [
  {
    name: "Taanni Andrade",
    quote:
      "Melhor escola de Pilates, sem sombra de dúvidas. Fiz minha certificação lá e recomendo MUITO!! Profissionais excelentes e extremamente capacitadas que, com certeza são referências para mim. Que Deus continue abençoando!",
  },
  {
    name: "Gilberto Jesus",
    quote:
      "Importante reconhecer que a minha paixão e jornada pelo pilates começou nessa escola. A melhor escola de formação!! Sempre que frequento me sinto em casa. Profissionais competentes, atentos, inteligentes, e com muito conhecimento a passar. Sou grato por ter sido aluno, e ter vivido a melhor experiência. Obrigado!!",
  },
  {
    name: "Janacy Santos",
    quote:
      "Amei o curso! Foi uma experiência incrível, com muito aprendizado e conteúdo de qualidade. Professores excelentes, didáticos e muito preparados. Com certeza fez diferença na minha formação!",
  },
  {
    name: "Jair Lazarini",
    quote:
      "Não sou um especialista em avaliações, entretanto, eu tenho certeza que a Active Pilates Brasil tem a melhor equipe de professores de Salvador!",
  },
  {
    name: "Marcela Amaral",
    quote:
      "Faço cursos na Active há muitos anos. Sempre com excelentes profissionais e cursos de altíssima qualidade.",
  },
  {
    name: "Andrea Burity",
    quote:
      "Excelente escola !! Quer praticar pilates? O lugar é aqui! O melhor Curso de Formação de professores de Pilates !!",
  },
  {
    name: "Ana Bartira",
    quote:
      "Já vou na minha segunda formação na Active Pilates e acho sensacional. Profissionalismo e comprometimento com o legado deixado por Joseph Pilates é o que me faz confiar no trabalho de olhos fechados. Foi um divisor de águas na minha profissão!",
  },
  {
    name: "Aline Sá",
    quote:
      "Melhor studio, acolhedor. Melhor escola de Formação em Pilates Clássico. Estrutura e equipe impecáveis.",
  },
  {
    name: "Alessandra Souza",
    quote:
      "Estúdio de pilates bem equipado, professores super competentes e ambiente humanizado. Super recomendo!",
  },
  {
    name: "Monique Idalan",
    quote:
      "Experiência sempre maravilhosa, profissionais incríveis, super dedicados e bem capacitados.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#CF9D2F]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex flex-col flex-shrink-0 w-72 sm:w-80 h-72 sm:h-80 bg-white rounded-3xl p-5 sm:p-7 border border-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.04)] mx-2 sm:mx-3">
      <Stars />
      <blockquote className="flex-1 text-black/60 text-sm leading-relaxed overflow-hidden">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 border-t border-black/[0.06] pt-4 mt-4">
        <div className="w-8 h-8 rounded-full bg-[#CF9D2F]/15 flex items-center justify-center flex-shrink-0">
          <span className="font-serif text-[#CF9D2F] text-xs">{t.name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-black font-semibold text-sm">{t.name}</p>
          <p className="text-[#CF9D2F] text-xs">Google Reviews ⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const doubled = [...testimonials, ...testimonials];
  const doubledReversed = [...testimonials].reverse().concat([...testimonials].reverse());

  return (
    <section id="depoimentos" className="relative w-full py-20 md:py-36 bg-[#FAFAF8] overflow-hidden">
      <div className="container mx-auto px-6 md:px-24 lg:px-28 mb-14 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-black leading-tight max-w-2xl mx-auto text-center">
            Veja o que dizem os instrutores que se formaram com a Active.
          </h2>
        </motion.div>
      </div>

      {/* Marquee — esquerda para direita */}
      <div className="relative flex overflow-hidden mb-4">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 34, ease: "linear", repeat: Infinity }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Marquee — direita para esquerda */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 34, ease: "linear", repeat: Infinity }}
        >
          {doubledReversed.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>

      <p className="text-black/40 text-xs tracking-wide text-center mt-6">São +100 avaliações no Google</p>

      <div className="container mx-auto px-6 md:px-24 lg:px-28 mt-6 flex justify-center">
        <CTAButton
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          label={CTA_LABEL}
        />
      </div>
    </section>
  );
}
