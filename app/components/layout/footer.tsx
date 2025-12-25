export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg- dark:bg-gray-900">
      {/* Footer bottom section */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container relative z-10 px-5 mx-auto sm:px-7">
          <div className="py-5 flex justify-between text-center">
            {/* Left section */}
            <p className="text-sm text-gray-700 dark:text-gray-300 text-left">
              KKN Turi Berdikari <br />
              Universitas Gadjah Mada <br />
              2025 – 2026
            </p>

            {/* Right section */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 
                px-3 py-1 sm:px-5 sm:py-2 backdrop-blur-sm"
            >
              <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-300">
                Pengembangan Masyarakat di Wilayah Geopark Jogja
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
