export default function Footer() {
  return (
    <footer
      className="
        bg-gradient-to-b
        from-[#FFE9CC] to-[#FFDDB3]
        dark:from-[#D18A3C] dark:to-[#B96E28]
        text-[#7A3E00] dark:text-[#2A1A0C]
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          {/* LEFT */}
          <div className="leading-relaxed">
            <p className="font-semibold">KKN Turi Berdikari UGM</p>
            <p className="text-[#7A3E00]/80 dark:text-[#2A1A0C]/75">
              Platform informasi, edukasi, dan pendampingan masyarakat.
            </p>
          </div>

          {/* RIGHT */}
          <div className="md:text-right">
            <p className="font-semibold">Universitas Gadjah Mada</p>
            <p className="text-[#7A3E00]/70 dark:text-[#2A1A0C]/70">
              2025 – 2026
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-2 border-t border-[#7A3E00]/20 dark:border-black/25" />

        {/* BOTTOM */}
        <div className="text-xs text-center text-[#7A3E00]/70 dark:text-[#2A1A0C]/65">
          Pengembangan Masyarakat di Wilayah Geopark Jogja
        </div>
      </div>
    </footer>
  );
}
