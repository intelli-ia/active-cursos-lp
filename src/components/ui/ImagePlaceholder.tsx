interface ImagePlaceholderProps {
  className?: string;
  label?: string;
  ratio?: "portrait" | "square" | "wide" | "banner";
  theme?: "dark" | "light";
}

const ratios: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
  banner: "aspect-[21/9]",
};

export function ImagePlaceholder({
  className = "",
  label = "Imagem",
  ratio = "portrait",
  theme = "dark",
}: ImagePlaceholderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`group relative overflow-hidden rounded-[1.75rem] border ${
        isDark
          ? "border-[#CF9D2F]/15 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent"
          : "border-[#CF9D2F]/20 bg-gradient-to-br from-black/[0.03] via-black/[0.015] to-transparent"
      } ${ratios[ratio]} ${className}`}
    >
      {/* Textura pontilhada */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(207,157,47,0.9) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Vinheta suave */}
      <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-black/30" : "from-black/10"} via-transparent to-transparent`} />

      {/* Cantos decorativos */}
      <span className="absolute top-5 left-5 w-6 h-6 border-t border-l border-[#CF9D2F]/40 rounded-tl-sm" />
      <span className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-[#CF9D2F]/40 rounded-br-sm" />

      {/* Conteúdo central */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <svg className="w-7 h-7 text-[#CF9D2F]/45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-[#CF9D2F]/50 text-[11px] font-medium tracking-[0.15em] uppercase">{label}</span>
      </div>
    </div>
  );
}
