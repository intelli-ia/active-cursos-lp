export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-24 lg:px-28">
        <div className="py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs md:text-sm">
            © 2026 Active Cursos. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs md:text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#CF9D2F] rounded-full" />
            Formação em Pilates Clássico — Salvador, BA e todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
