export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark:bg-gray-900">
      {/* Footer bottom section */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container relative z-10 px-5 mx-auto sm:px-7">
          <div className="py-5 grid grid-cols-1 md:grid-cols-2 text-center sm:text-left">
            {/* Left section (KKN Turi Berdikari and 2025 - 2026) */}
            <div className="text-xs text-gray-700 dark:text-gray-300 text-left">
              <p>KKN PPM UGM</p>
              <p> Turi Berdikari</p>
            </div>

            {/* Right section (Universitas Gadjah Mada) */}
            <div className="text-xs text-gray-700 dark:text-gray-300 text-left md:text-right">
              <p>Universitas Gadjah Mada</p>
              <p>2025 – 2026</p>
            </div>
          </div>

          {/* Bottom section (Pengembangan Masyarakat di Wilayah Geopark Jogja) */}
          <div className="pb-5 text-left">
            {" "}
            {/* Mengurangi jarak dengan py-3 */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,140,0,0.2)] bg-white/10 
    px-3 py-1 sm:px-5 sm:py-2 backdrop-blur-sm"
            >
              <p className="text-xs sm:text-xs font-medium text-gray-500 dark:text-gray-300">
                Pengembangan Masyarakat di Wilayah Geopark Jogja
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
