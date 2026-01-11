"use client";

import { BookOpen, Scale, Landmark, Coins } from "lucide-react";

export default function KataPengantarSection() {
  return (
    <section className="relative py-28 px-6 bg-slate-50 dark:bg-[#0f172a] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary-500/10 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Content Card */}
        <div
          className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] 
                        p-10 sm:p-14 space-y-7 text-slate-700 dark:text-slate-300 leading-relaxed
                        border border-slate-200 dark:border-slate-700"
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-1.5 text-sm rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400">
              Kata Pengantar
            </span>
          </div>
          <p>
            Puji syukur kami panjatkan ke hadirat Allah SWT atas rahmat dan
            karunia-Nya sehingga materi panduan hukum Islam ini dapat tersusun.
            Panduan ini disusun sebagai upaya untuk memberikan pemahaman yang
            komprehensif mengenai penerapan hukum Islam dalam kerangka hukum
            positif di Indonesia.
          </p>

          <p>
            Penyusunan materi ini mencakup berbagai instrumen hukum penting,
            dimulai dari pengelolaan{" "}
            <span className="pt-2 font-medium text-slate-800 dark:text-slate-200">
              Zakat
            </span>{" "}
            berdasarkan Undang-Undang Nomor 23 Tahun 2011 beserta regulasi
            turunannya, sebagai sarana penyucian jiwa dan harta serta
            pemberdayaan umat.
          </p>

          <p>
            Selain itu, dibahas pula hukum{" "}
            <span className="pt-2 font-medium text-slate-800 dark:text-slate-200">
              Wakaf
            </span>{" "}
            sesuai Undang-Undang Nomor 41 Tahun 2004 yang menekankan pada
            pelepasan hak milik demi kemaslahatan umat secara berkelanjutan dan
            produktif.
          </p>

          <p>
            Dalam ranah ekonomi, panduan ini menyajikan prinsip-prinsip dasar{" "}
            <span className="pt-2 font-medium text-slate-800 dark:text-slate-200">
              Ekonomi Syariah
            </span>{" "}
            yang berlandaskan fatwa Dewan Syariah Nasional (DSN), dengan tujuan
            menghindari praktik riba, maysir, dan gharar. Aspek hukum keluarga
            dikaji melalui{" "}
            <span className="pt-2 font-medium text-slate-800 dark:text-slate-200">
              Hukum Perkawinan
            </span>{" "}
            dan{" "}
            <span className="pt-2 font-medium text-slate-800 dark:text-slate-200">
              Hukum Kewarisan Islam
            </span>{" "}
            sebagaimana diatur dalam Kompilasi Hukum Islam (KHI), termasuk
            konsep khas Indonesia seperti ahli waris pengganti.
          </p>

          <p className="pt-2 font-medium text-slate-800 dark:text-slate-200">
            Kami berharap panduan ini dapat menjadi rujukan yang bermanfaat,
            praktis, dan relevan bagi pembaca dalam memahami dinamika hukum
            Islam di Indonesia secara normatif maupun aplikatif.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <Highlight
            icon={<Coins size={22} />}
            title="Zakat"
            desc="UU No. 23 Tahun 2011"
          />
          <Highlight
            icon={<Landmark size={22} />}
            title="Wakaf"
            desc="UU No. 41 Tahun 2004"
          />
          <Highlight
            icon={<Scale size={22} />}
            title="Ekonomi Syariah"
            desc="Fatwa DSN-MUI"
          />
          <Highlight
            icon={<BookOpen size={22} />}
            title="Hukum Keluarga"
            desc="Kompilasi Hukum Islam"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub Component ---------- */

function Highlight({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        group flex items-start gap-4 p-6 rounded-2xl 
        bg-white dark:bg-slate-900
        border border-slate-200 dark:border-slate-700
        transition hover:shadow-lg
      "
    >
      <div className="p-3 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 group-hover:scale-105 transition">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-800 dark:text-white">
          {title}
        </h4>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {desc}
        </p>
      </div>
    </div>
  );
}
