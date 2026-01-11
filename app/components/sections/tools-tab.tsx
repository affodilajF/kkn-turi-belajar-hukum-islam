"use client";

import type React from "react";
import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";

import {
  CodeGeneratorIcon,
  EmailGeneratorIcon,
  ImageGeneratorIcon,
  TextGeneratorIcon,
  VideoGeneratorIcon,
} from "../icons/icons";

// Define the tab type
interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  contents?: Content[]; // optional
}

interface Content {
  title: string;
  description: string;
}

export default function AIToolsTabs() {
  const [activeTab, setActiveTab] = useState("hukumzakat");

  // Tab data
  const tabs: Tab[] = [
    {
      id: "hukumzakat",
      label: "Hukum Zakat",
      icon: <TextGeneratorIcon className="w-8 h-8" />,
      title: "Materi 1: Hukum Zakat",
      description: "Materi 1 membahas tentang Pengertian Hukum Islam.",
      contents: [
        {
          title: "Sumber",
          description: `
            Berikut adalah sumber rujukan yang digunakan dalam pembahasan zakat dan pengelolaannya dalam kerangka hukum Islam dan hukum positif di Indonesia:<br><br>

            <b>Sumber Al-Qur'an:</b><br>
            ● QS. At-Taubah Ayat 103<br><br>

            <b>Sumber Peraturan Perundang-undangan:</b><br>
            ● Undang-Undang Nomor 23 Tahun 2011 tentang Pengelolaan Zakat<br>
            ● Peraturan Pemerintah Nomor 14 Tahun 2014 tentang Pelaksanaan Undang-Undang Nomor 23 Tahun 2011 tentang Pengelolaan Zakat<br>
            ● Peraturan Menteri Agama Nomor 52 Tahun 2014 tentang Syarat dan Tata Cara Perhitungan Zakat Mal dan Zakat Fitrah serta Pendayagunaan Zakat untuk Usaha Produktif<br>
            ● Peraturan Menteri Agama Nomor 69 Tahun 2015 tentang Perubahan atas Peraturan Menteri Agama Nomor 52 Tahun 2014 tentang Syarat dan Tata Cara Penghitungan Zakat Mal dan Zakat Fitrah serta Pendayagunaan Zakat untuk Usaha Produktif<br>
            ● Peraturan Menteri Agama Nomor 31 Tahun 2019 tentang Perubahan Kedua atas Peraturan Menteri Agama Nomor 52 Tahun 2014<br><br>

            <b>Sumber Online:</b><br>
            ● <a href="https://baznas.go.id/zakat" target="_blank" rel="noopener noreferrer">
                Badan Amil Zakat Nasional (BAZNAS)
              </a>
            `,
        },
        {
          title: "Dasar Hukum Zakat",
          description: `
          Dasar hukum zakat berasal dari Al-Qur’an (QS Al-Baqarah 43), Hadis Riwayat Muslim mengenai lima pilar Islam, di mana salah satu pilarnya mewajibkan pembayaran zakat. Terakhir, hukum zakat juga berasal dari Ijtihad (ijma) yang menetapkan zakat sebagai kewajiban bagi setiap Muslim.
          `,
        },

        {
          title: "Jenis-Jenis Zakat",
          description: `
            <div>
              <span class="font-semibold">1. Zakat Fitrah </span><br />
              Zakat yang diwajibkan atas setiap jiwa Muslim (laki-laki maupun perempuan) pada bulan Ramadan untuk mensucikan jiwa. Zakat ini dibayarkan dalam bentuk makanan pokok atau uang yang setara sebelum shalat Idul Fitri.
            </div>
            <div class="mt-4">
              <span class="font-semibold">2. Zakat Mal  </span><br />
              Zakat yang dikenakan atas harta (seperti emas, uang, hasil perniagaan, hewan ternak, dll) dengan tujuan untuk menyucikan harta tersebut.
            </div>

          <table class="w-full text-left border-collapse border border-gray-400 dark:border-gray-600 mb-6">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-900">
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal">Zakat Fitrah</th>
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal">Zakat Mal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Menyucikan Jiwa</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Menyucikan Harta</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Berupa makanan pokok</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Bisa berupa uang atau aset lain</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Waktu khusus Ramadan</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Waktu fleksibel</td>
              </tr>
            </tbody>
          </table>
  `,
        },
        {
          title: "Syarat-Syarat Harta Zakat Fitrah",
          description: `
          ● Beragama Islam  
          <br>
          ● Menjalani hidup pada bulan Ramadhan  
          <br>
          ● Memiliki kebutuhan pokok yang mencukupi untuk malam hari dan Hari Raya Idul Fitri
          `,
        },
        {
          title: "Syarat-Syarat Harta Zakat Mal",
          description: `
          Berdasarkan PMA No. 52/2014, harta yang wajib dizakatkan harus memenuhi kriteria berikut: 
          <br>
          ● Barang halal dan diperoleh dengan cara yang halal
          <br>
          ● Milik penuh
          <br>
          ●	Harta yang dapat berkembang atau memiliki potensi dikembangkan 
          <br>
          ● Mencapai <b>Nisab</b> (batas minimum nilai harta)  
          <br>
          ● Mencapai <b>Haul</b> (batas waktu yang ditentukan di hukum)
          `,
        },
        {
          title: "Jenis Aset yang Dikenakan Zakat (UU No. 23 Tahun 2011)",
          description: `
          1) Emas, perak, dan bahan berharga lainnya<br />
          2) Uang dan Surat berharga (seperti sekuritas, saham, dll.)<br />
          3) Pendapatan Perdagangan<br />
          4) Pendapatan Pertanian, Perkebunan dan Kehutanan<br />
          5) Peternakan dan perikanan (hewan yang dipakai: sapi, kerbau, kuda, domba, kambing, unta)<br />
          6) Penambangan<br />
          7) Industri<br />
          8) Pendapatan dan jasa lainnya (zakat yang dikeluarkan dari penghasilan yang diperoleh dari hasil profesi pada saat menerima pembayaran)<br />
          9) Rikaz/harta (barang temuan seperti emas yang tertanam di dalam tanah, undian, hadiah, dll.)<br />
          `,
        },
        {
          title: "Cara Hitung Haul dan Nisab",
          description: `
          Setiap harta benda memiliki ambang batas yang berbeda; hal ini akan diperjelas dalam legislasi hukum.<br /><br />

          Berikut beberapa contoh haul dan nisab yang terkait dengan jenis zakat tertentu:<br />
          <div class="flex flex-col items-center my-4 text-center">
            <img src="/images/hero/image.png" alt="Contoh Haul dan Nisab" class="w-full max-w-md mb-2" />
            <span class="text-sm">
              Sumber: <a href="https://baznas.jogjakota.go.id/detail/index/18446" target="_blank" class="text-blue-600 dark:text-blue-400 underline">https://baznas.jogjakota.go.id/detail/index/18446</a>
            </span>
          </div>

          Contoh: memiliki 85 gram emas (nisab) selama 1 tahun berturut-turut tanpa terputus (haul) berarti seseorang wajib membayar zakat. Karena haul dihitung selama 1 tahun, maka zakat atas emas tersebut harus dibayarkan di akhir tahun.<br /><br />

          <b>Catatan penting:</b> Setiap jenis harta memiliki haul yang berbeda.
          `,
        },
        {
          title: "Muzakki: Pembayar Zakat",
          description: `
          Muzakki dapat berupa <b>individu</b> yang memenuhi syarat: <br />
          1) Muslim<br />
          2) Dewasa (Minimal 18 tahun atau sudah menikah)<br />
          3) Sehat mental (Orang dengan gangguan jiwa tidak memiliki kewajiban membayar zakat)<br />
          4) Mandiri dan punya kebebasan (bukan budak)<br />
          5) Memiliki harta yang mencapai nisab dan haul<br /><br />

          Muzakki juga dapat berupa <b>organisasi bisnis</b> yang berorientasi pada keuntungan dan dimiliki pribadi. Pihak yang membayar adalah “pemilik” alias “pemegang saham mayoritas”.
          `,
        },
        {
          title: "Mustahik: Penerima Zakat",
          description: `
          Zakat harus didistribusikan kepada 8 golongan (Asnaf), yaitu:<br />
          1. <b>Faqir</b>: Orang yang hampir tidak memiliki apa-apa dan tidak mampu memenuhi kebutuhan pokok<br />
          2. <b>Miskin</b>: Orang yang memiliki harta atau penghasilan namun tidak cukup untuk memenuhi kebutuhan dasar<br />
          3. <b>Amil</b>: Pihak yang mengumpulkan dan mendistribusikan zakat<br />
          4. <b>Muallaf</b>: Orang yang baru masuk Islam dan membutuhkan bantuan penguatan iman<br />
          5. <b>Riqab</b>: Budak atau hamba sahaya yang ingin memerdekakan diri (termasuk korban perdagangan manusia dalam konteks kontemporer)<br />
          6. <b>Gharim</b>: Orang yang berhutang untuk memenuhi kebutuhan hidup yang mendasar<br />
          7. <b>Fisabilillah</b>: Orang yang berjuang di jalan Allah melalui kegiatan dakwah atau pendidikan<br />
          8. <b>Ibnu Sabil</b>: Musafir yang kehabisan biaya di perjalanan dalam ketaatan kepada Allah<br /><br />

          Catatan: Faqir dan Miskin akan diprioritaskan karena mereka yang paling membutuhkan bantuan ekonomi.
          `,
        },
        {
          title: "Pengelolaan dan Lembaga Zakat",
          description: `
          Pengelolaan zakat dilakukan oleh lembaga resmi negara yaitu 
          <a href="https://baznas.go.id/zakat" target="_blank" rel="noopener noreferrer">
            Badan Amil Zakat Nasional (BAZNAS)
          </a> 
          dan lembaga swasta yaitu <b>Lembaga Amil Zakat (LAZ)</b> yang terdaftar. Penyalahgunaan zakat, seperti tidak mendistribusikan kepada mustahik atau mengalihkan harta zakat, dapat dikenakan sanksi penjara maksimal 5 tahun dan/atau denda hingga Rp.500.000.000.<br /><br />

          Sumber: <a href="https://peraturan.bpk.go.id/Home/Details/52048/uu-no-23-tahun-2011" target="_blank" rel="noopener noreferrer">
            Undang-Undang Nomor 23 Tahun 2011 tentang Pengelolaan Zakat
          </a><br /><br />

          Informasi lanjut untuk cara membayar zakat di BAZNAS bisa ditemukan di sini: 
          <a href="https://baznas.go.id/zakat" target="_blank" rel="noopener noreferrer">https://baznas.go.id/zakat</a>  
          atau video panduan: 
          <a href="https://youtu.be/EiUEMCxfGrM?si=9vBiMXsrdTT-ysYZ" target="_blank" rel="noopener noreferrer">https://youtu.be/EiUEMCxfGrM?si=9vBiMXsrdTT-ysYZ</a>
          `,
        },
        {
          title: "Beda Zakat dengan Pajak",
          description: `
          <table class="w-full text-left border-collapse border border-gray-400 dark:border-gray-600 mb-6">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-900">
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b> Zakat </b> </th>
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b> Pajak </b> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">
                  <b> Zakat </b> adalah kewajiban bagi setiap muslim untuk mengeluarkan sebagian dari hartanya apabila telah mencapai batas yang ditetapkan, dan diberikan kepada pihak-pihak yang berhak menerimanya.
                </td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">
                  <b> Pajak </b> merupakan kewajiban setiap warga negara yang dipungut oleh negara. Warga negara yang memiliki penghasilan dan telah melewati batas tertentu wajib membayar pajak penghasilan.
                </td>
              </tr>
            </tbody>
          </table>
          `,
        },
        {
          title: "Zakat sebagai Pengurang Pajak",
          description: `
        <p>
          Zakat penghasilan yang dibayarkan melalui <a href="https://baznas.go.id/zakat" target="_blank" rel="noopener noreferrer">Badan Amil Zakat Nasional (BAZNAS)</a> atau Lembaga Amil Zakat (LAZ) yang terdaftar dapat digunakan sebagai pengurang penghasilan kena pajak dalam laporan SPT Tahunan. Hal ini harus didukung dengan bukti pembayaran yang sah (kuitansi, transfer bank, atau ATM) yang mencantumkan nama, Nomor Pokok Wajib Pajak (NPWP), jumlah, dan tanggal pembayaran.
        </p>
        <p>
          <strong>Catatan penting:</strong> Apabila zakat digunakan sebagai investasi, maka tidak dapat dianggap sebagai pengurang pajak.
        </p>
        <p>
          Informasi lanjut bisa di temukan di sini: 
          <a href="https://pajak.go.id/id/artikel/agar-zakat-bisa-kurangi-beban-pajakmu" target="_blank" rel="noopener noreferrer">
            https://pajak.go.id/id/artikel/agar-zakat-bisa-kurangi-beban-pajakmu
          </a>
        </p>
        `,
        },
      ],
    },
    {
      id: "hukumwakaf",
      label: "Hukum Wakaf",
      icon: <ImageGeneratorIcon className="w-8 h-8" />,
      title: "Materi 2: Hukum Wakaf",
      description: "",
      contents: [
        {
          title: "Pengertian Wakaf",
          description: `
          <p>
            Kata <em>wakaf</em> berasal dari bahasa Arab <em>al-waqf</em> yang berarti berhenti, menahan, atau tetap di tempat. Maknanya, pemilik harta menghentikan haknya untuk menggunakan atau mengambil manfaat dari harta tersebut, lalu manfaatnya diberikan kepada pihak lain. Dengan demikian, harta wakaf tidak lagi menjadi objek perbuatan hukum pribadi, seperti dijual atau diwariskan.
          </p>
          <p>
            Wakaf merupakan perbuatan hukum yang menyebabkan suatu harta ditahan status kepemilikannya, sementara manfaatnya dialokasikan untuk tujuan tertentu sesuai dengan ketentuan syariah.
          </p>
          `,
        },
        {
          title: "Dasar Hukum Wakaf",
          description: `
          <h3 class="font-semibold mb-2">Sistem Hukum Indonesia</h3>
          <p>
            Menurut <strong>UU No. 41 Tahun 2004</strong>, wakaf didefinisikan sebagai:  
            <em>Perbuatan hukum oleh wakif untuk memisahkan dan/atau menyerahkan sebagian harta miliknya agar dimanfaatkan untuk selamanya atau dalam jangka waktu tertentu, bagi kepentingan ibadah dan/atau kesejahteraan umum berdasarkan syariah.</em>
          </p>
          <p>
            <strong>PP No. 42 Tahun 2006</strong> tentang Pelaksanaan UU Wakaf  
            <br>
            <strong>PP No. 25 Tahun 2018</strong> sebagai perubahan atas PP No. 42 Tahun 2006
          </p>

          <h4 class="font-semibold mt-4 mb-2">Catatan:</h4>
          <ul class="list-disc list-inside mb-4">
            <li>Wakaf menimbulkan akibat hukum apabila rukun dan syaratnya terpenuhi. Jika salah satu unsur tidak ada, maka akibat hukum tidak timbul dan tujuan wakaf dapat gagal tercapai.</li>
            <li>Wakaf dapat bersifat abadi atau dibatasi waktu, tergantung pada bentuk dan jenis harta wakaf.</li>
            <li>Untuk benda bergerak, wakaf dapat bersifat sementara. Namun untuk benda tidak bergerak seperti tanah, wakaf harus dilakukan untuk selamanya.</li>
            <li>Seseorang tidak diperbolehkan mewakafkan seluruh hartanya, karena masih terdapat kewajiban hukum dan sosial lain yang harus dipenuhi.</li>
            <li>Wakaf dapat digunakan untuk kegiatan produktif demi kepentingan umum, misalnya pembangunan fasilitas komersial yang hasilnya dimanfaatkan untuk masyarakat.</li>
          </ul>

          <h4 class="font-semibold mt-4 mb-2">PENTING!</h4>
          <ul class="list-disc list-inside mb-4">
            <li>Wakaf bukan pemindahan hak milik, melainkan pelepasan hak milik.</li>
            <li>Setelah diwakafkan, harta tidak dapat dimiliki siapa pun, tidak diwariskan, dan tidak dikenakan pajak.</li>
            <li>Pemanfaatan harta wakaf harus mengikuti niat wakif. Jika niat hanya disebutkan secara umum, pengelola wakaf (<em>Nazhir</em> atau <em>PPAIW</em>) berwenang menentukan penggunaannya.</li>
          </ul>

          <h3 class="font-semibold mb-2">Al-Qur’an</h3>
          <p>
            Dasar wakaf dapat ditemukan dalam <strong>QS. Ali Imran ayat 92</strong>, yang menegaskan bahwa seseorang tidak akan mencapai kebaikan yang sempurna sebelum menginfakkan harta yang ia cintai. Setiap harta yang dikeluarkan tersebut diketahui oleh Allah. Ayat ini menjadi landasan moral dan spiritual bagi praktik wakaf sebagai bentuk pengorbanan harta demi kebaikan.
          </p>

          <h3 class="font-semibold mb-2">Hadis</h3>
          <p>
            Landasan wakaf juga berasal dari hadis yang diriwayatkan oleh <b> Muslim, At-Tirmidzi, An-Nasa’i, dan Abu Dawud dari Abu Hurairah r.a. </b>Hadis tersebut menjelaskan bahwa setelah seseorang meninggal dunia, seluruh amalnya terputus kecuali tiga hal:
          </p>
          <ul class="list-disc list-inside mb-4">
            <li><strong>Amal jariyah</strong> (yang di dalamnya termasuk wakaf)</li>
            <li><strong>Ilmu yang bermanfaat</strong> dan diamalkan</li>
            <li><strong>Anak saleh</strong> yang mendoakan orang tuanya</li>
          </ul>
          <p>
            Hadis ini menegaskan bahwa wakaf memiliki sifat berkelanjutan karena pahalanya terus mengalir selama manfaatnya masih dirasakan.
          </p>
          `,
        },
        {
          title: "Ikrar Wakaf",
          description: `
          <p>Ikrar wakaf adalah pernyataan kehendak wakif untuk mewakafkan harta miliknya yang disampaikan secara lisan dan/atau tertulis kepada nazhir. Ikrar yang dilakukan semasa wakif hidup dituangkan dalam Akta Ikrar Wakaf (AIW). Apabila wakaf dilakukan melalui wasiat, ikrar diucapkan oleh pihak yang diberi kuasa oleh wakif sebelum meninggal dunia.</p>
          
          <h3>Pihak-Pihak dalam Wakaf</h3>
          <hr />

        
            <b>Wakif</b> adalah pihak yang mewakafkan harta bendanya
              <ul>
                <li>Syarat untuk perseorangan
                  <ul>
                    <li>Sudah dewasa</li>
                    <li>Berakal sehat</li>
                    <li>Tidak berada di bawah pengampuan dan mampu melakukan perbuatan hukum</li>
                    <li>Merupakan pemilik sah atas harta yang diwakafkan</li>
                  </ul>
                </li>
                <li>Syarat untuk organisasi
                  <ul>
                    <li>Wakaf dilakukan sesuai dengan ketentuan dalam Anggaran Dasar organisasi</li>
                    <li>Harta yang diwakafkan benar-benar merupakan milik organisasi</li>
                  </ul>
                </li>
                <li>Syarat untuk Badan Hukum (koperasi, yayasan, atau perseroan terbatas (PT))
                  <ul>
                    <li>Sesuai dengan Anggaran Dasar badan hukum tersebut</li>
                    <li>Harta yang diwakafkan merupakan aset sah badan hukum</li>
                  </ul>
                </li>
                <li>Catatan: Wakif tidak wajib beragama Islam. Orang atau badan hukum non-Muslim tetap dapat melakukan wakaf selama memenuhi syarat hukum yang berlaku.</li>
              </ul>

              <hr />

            <b>Nazhir</b> adalah pihak yang menerima harta wakaf dari wakif untuk mengelola, mengembangkan, dan mengawasi harta tersebut sesuai peruntukannya.
              <ul>
                <li>Bentuk Nazhir
                  <ul>
                    <li>Perseorangan
                      <ul>
                        <li>Berjumlah minimal 3 orang</li>
                        <li>Salah satu ditunjuk sebagai ketua</li>
                        <li>Minimal satu orang berdomisili di wilayah tempat benda wakaf berada</li>
                        <li>Jika salah satu meninggal atau tidak mampu menjalankan tugas, nazhir lainnya wajib melapor kepada Menteri dan mengajukan pengganti</li>
                      </ul>
                    </li>
                    <li>Organisasi, atau Badan Hukum
                      <ul>
                        <li>Pengurus memenuhi syarat nazhir perseorangan</li>
                        <li>Salah satu pengurus berdomisili di kabupaten/kota lokasi benda wakaf</li>
                        <li>Bergerak di bidang sosial, pendidikan, kemasyarakatan, dan/atau keagamaan Islam</li>
                        <li>Untuk badan hukum, harus merupakan badan hukum Islam yang sah menurut peraturan perundang-undangan</li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>Tugas Nazhir
                  <ul>
                    <li>Melakukan administrasi harta wakaf</li>
                    <li>Mengelola dan mengembangkan harta wakaf sesuai tujuan, fungsi, dan peruntukannya</li>
                    <li>Melindungi dan mengawasi harta wakaf</li>
                    <li>Melaporkan pelaksanaan tugas kepada Badan Wakaf Indonesia (BWI)</li>
                  </ul>
                </li>

                <li>Hak Nazhir
                  <ul>
                    <li>Berhak menerima imbalan maksimal 10% dari hasil bersih pengelolaan dan pengembangan wakaf</li>
                    <li>Jika wakaf masih berupa tanah dan belum menghasilkan, imbalan belum dapat diambil</li>
                  </ul>
                </li>

                <li>Penunjukan Nazhir
                  <ul>
                    <li>Nazhir dapat ditunjuk melalui: 
                      <ul>
                        <li>Kementrian Agama</li>
                        <li>Pejabat Pembuat Akta Ikrar Wakaf (PPAIW), yaitu Kepala KUA</li>
                      </ul>
                    </li>
                    <li>Catatan tambahan:
                      <ul>
                        <li>Daftar nazhir dapat dilihat melalui PPAIW</li>
                        <li>Nazhir dapat mengundurkan diri apabila tidak sanggup melaksanakan tanggung jawab sepanjang waktu atas harta wakaf</li>
                        <li>Jika terjadi kerusakan atau objek wakaf tidak dapat lagi dimanfaatkan, nazhir wajib mencari solusi dengan biaya sendiri</li>
                        <li>Contoh: Tanah wakaf untuk kebun salak yang hasilnya digunakan membiayai sekolah rusak akibat bencana alam. Nazhir wajib menyediakan tanah pengganti dan menetapkannya sebagai wakaf pengganti, serta mencantumkannya dalam RUTR (Rencana Umum Tata Ruang)</li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>Catatan Penting:
                  <ul>
                    <li>Pada saat ikrar wakaf diucapkan, nazhir wajib hadir</li>
                    <li>Wakif perseorangan tidak harus menunjuk nazhir perseorangan (dan sebaliknya)</li>
                    <li>Nazhir harus beragama Islam, karena bertanggung jawab memastikan pengelolaan wakaf sesuai prinsip syariah</li>
                    <li>Untuk organisasi atau badan hukum, pengurus yang menjalankan pengelolaan wajib memenuhi syarat nazhir perseorangan</li>
                    <li>Pekerja non-Muslim dapat berada di bawah organisasi/badan hukum wakaf, tetapi tidak boleh menjadi pengurus inti</li>
                  </ul>
                </li>
              </ul>

              <hr />

            <b>Mauquf ‘Alaih</b>: Merupakan pihak atau kelompok yang menerima manfaat dari harta wakaf sesuai dengan tujuan yang ditetapkan wakif
            <hr />

            <b>Syarat Harta Benda Wakaf</b>
              <ul>
                <li>Memiliki ketahanan dan manfaat jangka panjang, baik untuk dipisahkan maupun diserahkan sepenuhnya (misalnya kendaraan)</li>
                <li>Memiliki nilai ekonomi yang dibenarkan menurut syariah</li>
                <li>Dimiliki dan berada dalam penguasaan wakif secara sah</li>
              </ul>
            

            <b>Ketentuan Tambahan</b>
              <ul>
                <li>Harta wakaf didaftarkan atas nama nazhir untuk kepentingan mauquf ‘alaih sebagaimana tercantum dalam Akta Ikrar Wakaf</li>
                <li>Pendaftaran tersebut tidak menimbulkan hak kepemilikan bagi nazhir</li>
                <li>Penggantian nazhir tidak menyebabkan berpindahnya harta wakaf</li>
                <li>Jika wakaf tanah dikelola oleh nazhir perseorangan, sertifikat diterbitkan sebagai sertifikat wakaf atas nama para nazhir</li>
                <li>Apabila salah satu nazhir meninggal, tidak diperlukan pendaftaran ulang; mekanisme penunjukan nazhir pengganti diatur dalam peraturan pemerintah</li>
              </ul>
          

            <b>Tata Cara Pelaksanaan</b>
              <ul>
                <li>Ikrar disampaikan dalam Majelis Ikrar Wakaf (MIW)</li>
                <li>Dihadiri oleh:
                  <ul>
                    <li>Wakif</li>
                    <li>Nazhir</li>
                    <li>Mauquf ‘alaih</li>
                    <li>Minimal dua orang saksi</li>
                  </ul>
                </li>
                <li>Majelis Ikrar Wakaf dilaksanakan dihadapan PPAIW</li>
                <li>Ikrar dituangkan secara tertulis dalam AIW</li>
                <li>Harta wakaf diterima oleh nazhir untuk dikelola bagi kepentingan mauquf ‘alaih</li>
                <li>Ketentuan Lain:
                  <ul>
                    <li>Ikrar wakaf bersifat final dan tidak dapat ditarik kembali</li>
                    <li>Ikrar wajib disertai bukti kepemilikan sah atas harta wakaf</li>
                  </ul>
                </li>
              </ul>

            <b>Prosedur</b>
              <ul>
                <li>Wakif menyampaikan niat wakaf dan rincian harta yang diwakafkan</li>
                <li>Wakif menjelaskan tujuan penggunaan harta wakaf</li>
                <li>Nazhir menyatakan penerimaan ikrar</li>
                <li>Seluruh proses diawasi oleh saksi dan PPAIW</li>
                <li>PPAIW menerbitkan Akta Ikrar Wakaf dan menyerahkannya kepada Nazhir</li>
              </ul>
          

            <b>Tahap Setelah Ikrar</b>
              <ul>
                <li>Nazhir wajib mendaftarkan harta wakaf kepada instansi pemerintah terkait</li>
                <li>Nazhir berkewajiban mewujudkan tujuan wakaf sesuai kehendak wakif</li>
                <li>Apabila tujuan wakaf tidak direalisasikan dalam jangka waktu yang wajar, wakif berhak mengajukan gugatan terhadap nazhir</li>
              </ul>
          

          `,
        },
        {
          title: "Perubahan atau Penggantian Harta Wakaf",
          description: `
          Harta wakaf dapat diganti dalam keadaan tertentu, antara lain: <br>
          ● Terjadi force majeure seperti bencana alam <br>
          ● Berdasarkan keputusan pemerintah (misalnya pembangunan jalan tol) <br>
          ● Harta wakaf rusak berat dan tidak dapat dimanfaatkan kembali
          `,
        },
        {
          title: "Sengketa Wakaf",
          description: `
          Sengketa wakaf dapat timbul apabila: <br>
          ● Wakaf dilakukan sebelum adanya MIW dan tidak memiliki AIW <br>
          ● Ahli waris atau keluarga menggugat harta wakaf dan menuntut pengembaliannya <br><br>
          Dalam kondisi tersebut: <br>
          ● Nazhir wajib menghadirkan saksi atau pihak yang mengetahui adanya wakaf <br>
          ● PPAIW menerbitkan Akta Pengganti Akta Ikrar Wakaf (APAIW) sebagai bukti resmi
          `,
        },
        {
          title: "Status Pajak dan Larangan",
          description: `
          <b>Status Pajak </b> <br>
          Harta wakaf dibebaskan dari pajak, karena hanya dapat digunakan sesuai kehendak wakif. <br><br>
          <b> Larangan Terhadap Harta Wakaf </b> <br>
          Harta wakaf tidak boleh: <br>
          ● Dijadikan jaminan <br>
          ● Disita <br>
          ● Dihibahkan <br>
          ● Dijual <br>
          ● Diwariskan <br>
          ● Ditukar <br>
          ● Dialih dengan cara apa pun di luar ketentuan hukum
          `,
        },
        {
          title: "Jangka Waktu Wakaf",
          description: `
          Wakaf berjangka Waktu Tertentu (Mu’aqqat) <br>
          ● Berlaku untuk harta bergerak selain uang <br>
          ● Untuk wakaf uang, setelah jangka waktu berakhir, nazhir wajib mengembalikan pokok uang kepada wakif melalui LKS-PWU <br><br>

          Wakaf Selamanya (Muabbad) <br>
          ● Wakaf benda tidak bergerak berupa tanah hanya dapat dilakukan untuk jangka waktu selamanya
          `,
        },
      ],
    },
    {
      id: "hukumelonomiislam",
      label: "Hukum Ekonomi Islam",
      icon: <CodeGeneratorIcon className="w-8 h-8" />,
      title: "Materi 3: Hukum Ekonomi Islam",
      description: "",
      contents: [
        {
          title: "Prinsip Syariah dalam Hukum Ekonomi Islam",
          description: `
          <b> Prinsip syariah </b> adalah prinsip dalam hukum ekonomi syariah yang didasarkan pada fatwa yang dikeluarkan oleh <b> Dewan Syariah Nasional (DSN). </b> Penetapan fatwa di bidang ekonomi syariah menjadi kewenangan DSN, yang secara struktural berada di bawah <b> Majelis Ulama Indonesia (MUI). </b> <br><br>

          <b> MUI </b> mengeluarkan <b>fatwa</b> untuk masalah keagamaan umum, seperti rokok dan shalat Jumat, sedangkan <b>DSN-MUI </b> khusus berwenang mengeluarkan fatwa terkait kegiatan ekonomi syariah, termasuk produk perbankan, lembaga keuangan, dan pasar modal syariah. <br><br>

          <b> Fatwa </b> menjadi dasar penerapan prinsip syariah, namun baru bersifat mengikat secara hukum apabila telah diakomodasi ke dalam peraturan perundang-undangan, seperti POJK atau peraturan Bank Indonesia. Setiap produk keuangan syariah wajib memiliki fatwa sebagai dasar penerapannya. <br><br>

          <b> Sumber: </b> Pasal 1 UU No. 21 Tahun 2008 Tentang Perbankan Syariah <br>
          “Kegiatan usaha yang berasaskan Prinsip Syariah adalah kegiatan usaha yang tidak mengandung unsur Riba, Maysir, Gharar, Haram, Zalim”
          `,
        },
        {
          title: "Transaksi yang Dilarang",
          description: `
          <ol>
            <li>
              <strong>Riba</strong> adalah penambahan harta atau keuntungan yang tidak sah (batil).
              <p>
                Riba dapat terjadi dalam transaksi pertukaran barang sejenis yang tidak setara dari segi kualitas, kuantitas, atau waktu penyerahan, serta dalam transaksi pinjam-meminjam yang mensyaratkan pengembalian melebihi pokok pinjaman karena faktor waktu.
              </p>
              <ul>
                <li>
                  <strong>Riba Fadhl</strong>: riba dalam pertukaran barang sejenis yang termasuk barang ribawi
                  (emas, perak, gandum, kurma, garam, dll) apabila tidak sama kualitas, kuantitas, atau waktu penyerahannya.
                  <br>
                  Contoh: menukar gandum kualitas tinggi dengan gandum kualitas rendah meskipun jumlahnya lebih banyak tetap tidak diperbolehkan.
                </li>
                <li>
                  <strong>Riba Nasi’ah</strong>: terjadi karena penundaan pembayaran yang disertai tambahan.
                  <br>
                  Contoh: dalam pinjam-meminjam uang, pemberi pinjaman mensyaratkan tambahan apabila pengembalian terlambat.
                </li>
              </ul>
              <p>
                Dalam prinsip syariah, <b> bunga pada bank konvensional termasuk riba </b> karena transaksi kreditnya didasarkan pada akad pinjam-meminjam dengan tambahan.
                Sebaliknya, dalam bank syariah pinjam-meminjam dilakukan melalui akad <b><em>qardh al-hasan</em></b>, yaitu pinjaman tanpa imbalan.
              </p>
              <p>
                Apabila bank syariah memperoleh keuntungan, akad yang digunakan bukan akad pinjam-meminjam,
                melainkan akad jual beli atau pembiayaan (misalnya <em>murabahah</em> atau <em>ijarah</em>).
                Oleh karena itu, tambahan harga dalam <b> pembiayaan cicilan tidak termasuk riba. </b>
              </p>
            </li>

            <li>
              <strong>Maysir</strong> adalah transaksi yang mengandung unsur spekulasi atau untung-untungan,
              sehingga berpotensi merugikan salah satu pihak dan tidak didasarkan pada usaha yang jelas.
            </li>

            <li>
              <strong>Gharar</strong> adalah transaksi yang mengandung ketidakjelasan.
              <p>
                Dalam UU Perbankan Syariah, gharar terutama berkaitan dengan objek transaksi yang tidak jelas keberadaannya,
                tidak dimiliki, tidak dapat diserahkan, atau tidak jelas kualitas dan kuantitasnya.
              </p>
              <ul>
                <li>Ketidakjelasan tujuan akad</li>
                <li>Ketidakjelasan pihak-pihak yang terlibat</li>
                <li>Ketidakjelasan hak dan kewajiban</li>
              </ul>
              <p>
                Contoh klasik gharar adalah <em>“membeli kucing dalam karung”</em>.
              </p>
            </li>

            <li>
              <strong>Haram</strong> adalah transaksi yang dilarang menurut syariah.
              <ul>
                <li>Pembiayaan barang atau aktivitas haram (misalnya babi dan turunannya)</li>
                <li>Pembiayaan rokok menurut pandangan tertentu dalam syariah</li>
              </ul>
              <p>Bank syariah tidak boleh membiayai transaksi semacam ini.</p>
            </li>

            <li>
              <strong>Zalim</strong> adalah transaksi yang menimbulkan ketidakadilan bagi salah satu pihak.
              <ul>
                <li>Tidak semua ketidakseimbangan otomatis bersifat zalim</li>
                <li>
                  Contoh: klausula eksonerasi, yaitu klausula yang membebaskan satu pihak dari tanggung jawab
                  dan merugikan pihak lainnya
                </li>
              </ul>
            </li>
          </ol>
          `,
        },
      ],
    },
    {
      id: "marriagelaw",
      label: "Hukum Pernikahan",
      icon: <VideoGeneratorIcon className="w-8 h-8" />,
      title: "Materi 4: Hukum Pernikahan",
      description: "",
      contents: [
        {
          title: "Pencegahan Perkawinan",
          description: `
        <p>
          <strong>Pencegahan perkawinan</strong> merupakan mekanisme hukum untuk menghentikan rencana pernikahan
          sebelum akad nikah dilakukan, apabila ditemukan bahwa salah satu atau kedua calon mempelai
          tidak memenuhi syarat sah perkawinan.
        </p>

        <h4>Dasar Hukum</h4>
        <ul>
          <li>Pasal 13–16 Undang-Undang No. 1 Tahun 1974</li>
          <li>Pasal 60–64 Kompilasi Hukum Islam (KHI)</li>
        </ul>

        <h4>Alasan Pencegahan</h4>
        <p>
          Permohonan pencegahan dapat diajukan apabila terdapat larangan atau halangan perkawinan, antara lain:
        </p>
        <ul>
          <li>Salah satu calon masih terikat perkawinan yang sah</li>
          <li>Poligami dilakukan tanpa izin Pengadilan Agama</li>
          <li>
            Tidak terpenuhinya syarat atau rukun perkawinan menurut hukum Islam
            dan peraturan perundang-undangan
          </li>
        </ul>

        <h4>Pihak yang Berhak Mengajukan</h4>
        <ul>
          <li>Keluarga sedarah dalam garis lurus ke atas atau ke bawah</li>
          <li>Saudara kandung</li>
          <li>Wali nikah atau wali pengampu</li>
          <li>Pejabat yang berwenang mengawasi perkawinan</li>
          <li>Suami atau istri yang masih sah dari salah satu calon mempelai</li>
        </ul>

        <h4>Prosedur</h4>
        <ol>
          <li>
            Permohonan diajukan ke Pengadilan Agama sesuai domisili tempat perkawinan direncanakan
          </li>
          <li>Pemeriksaan dan pembuktian dilakukan di persidangan</li>
          <li>Pengadilan mengeluarkan putusan pencegahan</li>
          <li>Putusan disampaikan kepada Kantor Urusan Agama (KUA)</li>
        </ol>

        <h4>Akibat Hukum</h4>
        <ul>
          <li>
            Perkawinan tidak dapat dilangsungkan selama pencegahan masih berlaku
          </li>
          <li>
            Pencegahan dapat dicabut apabila alasan pencegahan bersifat sementara
            dan telah hilang secara hukum
          </li>
        </ul>
        `,
        },
        {
          title: "Pembatalan Perkawinan",
          description: `
          <p>
            <strong>Pembatalan perkawinan</strong> adalah upaya hukum untuk menyatakan perkawinan
            yang telah terjadi menjadi tidak sah karena syarat sah perkawinan tidak terpenuhi.
          </p>

          <h4>Dasar Hukum</h4>
          <ul>
            <li>Pasal 22–28 Undang-Undang No. 1 Tahun 1974</li>
            <li>Pasal 70–76 Kompilasi Hukum Islam (KHI)</li>
          </ul>

          <h4>Pihak yang Berhak Mengajukan</h4>
          <ul>
            <li>Suami atau istri</li>
            <li>Keluarga sedarah dalam garis lurus</li>
            <li>Pejabat yang berwenang</li>
            <li>Pihak lain yang memiliki kepentingan hukum</li>
          </ul>

          <h4>Jenis Pembatalan</h4>

          <p>
            <strong>1. Perkawinan yang Dapat Dibatalkan</strong> — memerlukan putusan pengadilan,
            antara lain apabila terjadi:
          </p>
          <ul>
            <li>Poligami tanpa izin pengadilan</li>
            <li>Perempuan masih terikat perkawinan atau dalam masa iddah</li>
            <li>Perkawinan tanpa wali yang sah</li>
            <li>Perkawinan akibat paksaan, penipuan, atau salah identitas</li>
            <li>Pelanggaran batas usia perkawinan</li>
          </ul>

          <p>
            <strong>2. Perkawinan Batal demi Hukum</strong> — batal secara otomatis tanpa putusan pengadilan,
            antara lain:
          </p>
          <ul>
            <li>Poligami lebih dari empat istri</li>
            <li>
              Perkawinan dengan mahram karena hubungan darah, semenda,
              atau persusuan
            </li>
            <li>
              Perkawinan kembali setelah talak tiga tanpa muhallil
            </li>
          </ul>

          <h4>Akibat Hukum Pembatalan</h4>
          <p>
            Perkawinan dianggap <strong>tidak pernah ada sejak awal</strong>.
          </p>

          <h4>Pengecualian</h4>
          <ul>
            <li>
              <strong>Anak</strong>: tetap berstatus anak sah serta berhak atas nafkah,
              perwalian, dan warisan
            </li>
            <li>
              <strong>Pihak ketiga beritikad baik</strong>: hak atas harta bersama
              tetap dilindungi
            </li>
          </ul>
          `,
        },
        {
          title: "Poligami dalam Hukum Perkawinan Islam",
          description: `
          <ul>
            <li>
              Diperbolehkan memiliki <strong>maksimal empat istri</strong>
            </li>
            <li>
              <strong>Wajib memperoleh izin Pengadilan Agama</strong>
            </li>
            <li>
              Harus memenuhi ketentuan berikut:
              <ul>
                <li>
                  <strong>Alasan hukum</strong>, antara lain:
                  <ul>
                    <li>Istri tidak menjalankan kewajiban</li>
                    <li>Istri menderita sakit permanen</li>
                    <li>Istri tidak dapat melahirkan keturunan</li>
                  </ul>
                </li>
                <li>
                  <strong>Syarat kumulatif</strong>:
                  <ul>
                    <li>Keadilan terhadap para istri</li>
                    <li>Kemampuan ekonomi</li>
                    <li>Persetujuan istri sebelumnya</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Poligami tanpa izin pengadilan</strong> dapat menjadi dasar
              <strong>pembatalan perkawinan</strong>.
            </li>
          </ul>
          `,
        },
        {
          title: "Perkawinan dalam Keadaan Hamil dan Status Anak",
          description: `
          <h4>Perkawinan dalam Keadaan Hamil (Pasal 53 KHI)</h4>
          <ul>
            <li>
              Perempuan hamil di luar perkawinan dapat dinikahi oleh
              <strong>laki-laki yang menghamilinya</strong>
            </li>
            <li>
              Perkawinan dapat langsung dilangsungkan
              <strong>tanpa menunggu kelahiran anak</strong>
            </li>
            <li>
              <strong>Tidak diperlukan akad nikah ulang</strong> setelah anak lahir
            </li>
            <li>
              Pembuktian sebelum kelahiran bersifat terbatas
              (misalnya belum tersedia tes DNA), sehingga praktiknya
              bergantung pada <strong>itikad baik para pihak</strong>
            </li>
          </ul>

          <hr>
          <h4>Status Anak Menurut Hukum Islam</h4>

          <p><strong>1. Anak dari Perkawinan Sah</strong></p>
          <ul>
            <li>
              <strong>Kategori</strong>:
              <ul>
                <li>Dikandung dan lahir dalam perkawinan sah</li>
                <li>Dikandung dalam perkawinan sah, lahir setelah perkawinan berakhir</li>
                <li>Dikandung sebelum perkawinan, lahir setelah perkawinan sah</li>
              </ul>
            </li>
            <li>
              <strong>Akibat Hukum</strong>:
              <ul>
                <li>Memiliki hubungan nasab dengan ayah dan ibu</li>
                <li>Berhak atas nafkah penuh</li>
                <li>Berhak atas warisan</li>
                <li>
                  Tanggung jawab orang tua tetap ada meskipun terjadi perceraian
                </li>
              </ul>
            </li>
            <li>
              <strong>Penolakan Anak</strong>:
              <ul>
                <li>
                  Suami dapat mengajukan penolakan ke pengadilan dalam jangka waktu:
                  <ul>
                    <li>180 hari sejak kelahiran</li>
                    <li>360 hari sejak perkawinan putus</li>
                    <li>Sejak suami mengetahui kelahiran</li>
                  </ul>
                </li>
                <li>
                  Melewati batas waktu tersebut →
                  <strong>permohonan tidak diterima</strong>
                </li>
              </ul>
            </li>
          </ul>

          <p><strong>2. Anak dari Perkawinan Tidak Tercatat (Nikah Sirri) (Pasal 6 KHI)</strong></p>
          <ul>
            <li>
              <strong>Ketentuan</strong>:
              <ul>
                <li>Perkawinan wajib dicatat di hadapan pejabat pencatat nikah</li>
                <li>Perkawinan tidak tercatat tidak diakui oleh negara</li>
              </ul>
            </li>
            <li>
              <strong>Akibat Hukum</strong>:
              <ul>
                <li>Tidak memperoleh perlindungan hukum secara penuh</li>
                <li>
                  Kewajiban orang tua terbatas pada:
                  <ul>
                    <li>Nafkah secukupnya</li>
                    <li>Wasiat wajibah</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Perlindungan Anak</strong>:
              <ul>
                <li>
                  Dapat diajukan <em>Penetapan Asal-Usul Anak</em> ke Pengadilan Agama
                </li>
                <li>Alat bukti berupa tes DNA dan/atau saksi</li>
                <li>
                  Jika dikabulkan, anak diperlakukan
                  <strong>sama dengan anak sah</strong>
                </li>
              </ul>
            </li>
          </ul>

          <p><strong>3. Anak Lahir di Luar Perkawinan</strong></p>
          <ul>
            <li>
              <strong>Akibat Hukum</strong>:
              <ul>
                <li>Tidak memiliki hubungan perdata dengan ayah</li>
                <li>
                  Hubungan hukum hanya dengan ibu dan keluarga ibu
                </li>
              </ul>
            </li>
            <li>
              <strong>Upaya Perlindungan</strong>:
              <ul>
                <li>Pengajuan Penetapan Asal-Usul Anak</li>
                <li>
                  Jika dikabulkan:
                  <ul>
                    <li>Hak nafkah secukupnya</li>
                    <li>Wasiat wajibah</li>
                  </ul>
                </li>
                <li>
                  Jika ditolak:
                  <strong>tidak ada status hukum</strong>
                  dengan ayah biologis
                </li>
              </ul>
            </li>
          </ul>
          `,
        },
        {
          title: "Harta Kekayaan dan Perjanjian Perkawinan",
          description: `
          <h4>Prinsip Dasar</h4>
          <p>
            Tanggal <strong>pencatatan perkawinan</strong> menjadi acuan utama
            dalam penentuan status harta kekayaan.
          </p>

          <hr>

        <h4>Jenis Harta</h4>

        <table class="w-full text-left border-collapse border border-gray-400 dark:border-gray-600 mb-6">
          <thead>
            <tr class="bg-gray-200 dark:bg-gray-900">
              <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b>Jenis Harta</b></th>
              <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b>Keterangan</b></th>
              <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b>Akibat Hukum</b></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-400 dark:border-gray-600 px-4 py-2"><b> Harta Pribadi (Harta Bawaan) </b></td>
              <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                <ul class="list-disc ml-5">
                  <li>Dimiliki sebelum perkawinan</li>
                  <li>Diperoleh dari warisan, hibah, atau wasiat</li>
                </ul>
              </td>
              <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                <ul class="list-disc ml-5">
                  <li>Dikuasai penuh oleh pemiliknya</li>
                  <li>Tidak memerlukan persetujuan pasangan</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-400 dark:border-gray-600 px-4 py-2"><b> Harta Bersama (Gono-Gini) </b></td>
              <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                <ul class="list-disc ml-5">
                  <li>Diperoleh selama perkawinan</li>
                  <li>Tidak bergantung pada nama atau besarnya kontribusi</li>
                </ul>
              </td>
              <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                <ul class="list-disc ml-5">
                  <li>Dimiliki bersama oleh suami dan istri</li>
                  <li>Setiap tindakan hukum atas harta bersama <strong>memerlukan persetujuan kedua pihak</strong></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

          <p>
            <em>
              Catatan Penting: Pada prinsipnya, semua perkawinan
              otomatis tunduk pada sistem harta bersama,
              kecuali ditentukan lain dalam perjanjian perkawinan.
            </em>
          </p>

          <hr>
          <h4>Perjanjian Perkawinan</h4>
          <p>
            Perjanjian perkawinan adalah kesepakatan suami dan istri
            mengenai pengaturan harta kekayaan yang dapat dibuat
            <strong>sebelum atau setelah perkawinan</strong>.
          </p>
          <ul>
            <li>
              Berlaku sepanjang tidak bertentangan dengan hukum,
              agama, dan kesusilaan
            </li>
            <li>
              Mengikat para pihak dan
              <strong>pihak ketiga yang mengetahuinya</strong>
            </li>
          </ul>

          <p><strong>Jenis-jenis Perjanjian Perkawinan</strong></p>
          <ul>
            <li>Pencampuran seluruh harta</li>
            <li>Pencampuran harta bawaan</li>
            <li>Pencampuran harta pribadi selama perkawinan</li>
            <li>Pemisahan harta sepenuhnya</li>
          </ul>

          <h4>Akibat Berakhirnya Perkawinan</h4>
          <ul>
            <li>
              Harta bersama dibagi rata,
              kecuali diperjanjikan lain dalam perjanjian perkawinan
            </li>
            <li>Harta pribadi tetap menjadi milik masing-masing</li>
            <li>
              Perjanjian perkawinan menjadi
              <strong>dasar utama pembagian harta</strong>
            </li>
          </ul>
          `,
        },
        {
          title: "Perceraian dalam Hukum Islam",
          description: `
          <h4>Bentuk Perceraian</h4>
          <ul>
            <li><strong>Permohonan talak</strong> (oleh suami)</li>
            <li><strong>Gugatan cerai</strong> (oleh istri)</li>
          </ul>
          <p>
            Kedua bentuk perceraian harus didasarkan pada
            <strong>alasan hukum yang sah dan terbukti</strong>.
          </p>

          <h4>Alasan Perceraian dan Pembuktian</h4>
          <table class="w-full text-left border-collapse border border-gray-400 dark:border-gray-600 mb-6">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-900">
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal">
                  <b> Alasan Perceraian </b>
                </th>
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal">
                  <b> Alat Bukti </b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Perzinahan, mabuk, narkotika, perjudian
                </td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  <ul>
                    <li>Perzinahan: putusan pengadilan pidana</li>
                    <li>Pemabuk / pecandu narkoba: laporan medis</li>
                    <li>Penjudi: laporan atau keterangan psikiater</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Penelantaran selama 2 tahun tanpa alasan sah
                </td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  <p>
                    Dibuktikan bahwa pasangan meninggalkan rumah tangga
                    tanpa alasan sah.
                  </p>
                  <p class="italic">
                    Contoh alasan sah: pemisahan tempat tinggal karena
                    kebutuhan kerja dan tetap memberi nafkah.
                  </p>
                  <p>Dapat menghadirkan saksi non-keluarga.</p>
                </td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Dijatuhi pidana penjara 5 tahun atau lebih
                </td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Putusan pidana terjadi selama atau setelah perkawinan
                  dengan masa hukuman minimal 5 tahun.
                </td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Kekerasan dalam rumah tangga (KDRT)
                </td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Putusan pengadilan pidana terkait tindak KDRT.
                </td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Penyakit atau cacat berat
                </td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Laporan medis yang membuktikan tidak mampu menjalankan
                  kewajiban sebagai suami atau istri.
                </td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Pertengkaran terus-menerus
                </td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  <ul>
                    <li>Kesaksian keluarga atau orang lain</li>
                    <li>Saksi dapat berasal dari orang serumah (ART, sopir)</li>
                    <li>Tidak memerlukan putusan pidana atau bukti medis</li>
                    <li>Untuk alasan ini, keluarga boleh menjadi saksi</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Perpindahan agama
                </td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Dapat dibuktikan dengan saksi non-keluarga.
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            Pengadilan Agama akan menilai seluruh keadaan dan alat bukti
            untuk menentukan apakah alasan perceraian dapat diterima.
          </p>

          <h4>Akibat Hukum Perceraian</h4>
          <ul>
            <li>Talak raj’i → dapat rujuk</li>
            <li>Talak ba’in sughra → harus akad baru</li>
            <li>Talak ba’in kubra → tidak dapat rujuk atau menikah kembali</li>
          </ul>

          <h4>Hak dan Kewajiban Pasca Perceraian</h4>

          <table class="w-full text-left border-collapse border border-gray-400 dark:border-gray-600 mb-6">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-900">
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal">
                  <b> Pihak </b>
                </th>
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal">
                  <b> Hak dan Kewajiban </b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2"> <b> Suami </b> </td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  <ul class="list-disc ml-5">
                    <li>Mut’ah</li>
                    <li>Nafkah iddah</li>
                    <li>Pelunasan mahar dan utang nafkah</li>
                    <li>Biaya anak</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2"> <b> Istri </b> </td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  <ul class="list-disc ml-5">
                    <li>Pelunasan mahar dan nafkah</li>
                    <li>Biaya anak</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>


          <h4>Masa Iddah</h4>
          <ul>
            <li>
              <strong>Kematian suami</strong>:
              <ul>
                <li>4 bulan 10 hari (tidak hamil)</li>
                <li>Sampai melahirkan (hamil)</li>
              </ul>
            </li>
            <li>
              <strong>Perceraian</strong>:
              <ul>
                <li>Hamil: sampai melahirkan</li>
                <li>Haid: 3 kali suci</li>
                <li>Tidak haid: 90 hari</li>
                <li>Qabla ad-dukhul: tanpa iddah</li>
              </ul>
            </li>
          </ul>

          <h4>Hak Asuh Anak (Hadhanah)</h4>
          <ul>
            <li>Anak di bawah 12 tahun: hak asuh pada ibu</li>
            <li>Anak 12 tahun ke atas: pilihan anak</li>
            <li>Ayah tetap wajib menanggung nafkah anak</li>
          </ul>
          `,
        },
      ],
    },
    {
      id: "hukumpewarisan",
      label: "Hukum Pewarisan",
      icon: <EmailGeneratorIcon className="w-8 h-8" />,
      title: "Materi 5: Hukum Pewarisan",
      description: "",
      contents: [
        {
          title: "Prinsip Hukum Waris Islam",
          description: `
          Prinsip hukum waris Islam bersumber dari <b> Al-Qur’an, Al-Hadits, Fiqih, Kompilasi Hukum Islam (KHI), SEMA, PERMA, yurisprudensi, dan sumber hukum lainnya. </b> Dari berbagai sumber tersebut, dirumuskan beberapa prinsip pokok sebagai berikut:<br><br>
          
                <table class="w-full text-left border-collapse border border-gray-400 dark:border-gray-600 mb-6">
          <tbody>
            <tr class="bg-gray-200 dark:bg-gray-900">
              <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b> Prinsip Pokok </b></th>
              <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b>Isi </b></th>
            </tr>
            <tr>
              <td class="border border-gray-400 px-4 py-2 font-semibold">Bilateral / Parental</td>
              <td class="border border-gray-400 px-4 py-2">
                Prinsip ini tidak membedakan garis keturunan laki-laki dan perempuan dalam menentukan status ahli waris.<br>
                <b>Dasar Hukum:</b> Pasal 174 KHI (kelompok ahli waris) dan Pasal 185 KHI (ahli waris pengganti).<br>
                Dalam praktik Al-Sunnah, anak perempuan tunggal masih memungkinkan paman (saudara laki-laki ayah) mendapat warisan.<br>
                Dalam yurisprudensi, anak perempuan tunggal dianggap menutup hak waris saudara.
              </td>
            </tr>
            <tr>
              <td class="border border-gray-400 px-4 py-2 font-semibold">Ahli Waris Langsung dan Ahli Waris Pengganti</td>
              <td class="border border-gray-400 px-4 py-2">
                Ahli waris langsung adalah pihak yang mewaris karena hubungan darah atau perkawinan, seperti ayah, ibu, anak, dan janda atau duda (Pasal 174 KHI).<br>
                - Golongan laki-laki: ayah, anak laki-laki, saudara laki-laki, paman, kakek.<br>
                - Golongan perempuan: ibu, anak perempuan, saudara perempuan, nenek.<br>
                Jika seluruh ahli waris ada, yang berhak mewaris hanya anak, ayah, ibu, serta janda atau duda.<br>
                <b>Ahli waris pengganti:</b> keturunan dari ahli waris yang meninggal lebih dahulu dari pewaris (Pasal 185 KHI), bagian ahli waris pengganti tidak melebihi bagian ahli waris yang digantikannya.
              </td>
            </tr>
            <tr>
              <td class="border border-gray-400 px-4 py-2 font-semibold">Ijbari</td>
              <td class="border border-gray-400 px-4 py-2">
                Asas ijbari menyatakan bahwa hak waris timbul secara otomatis saat pewaris meninggal dunia, tanpa memerlukan tindakan hukum dari pewaris maupun ahli waris. Peralihan harta terjadi berdasarkan ketetapan Allah SWT.<br>
                <b>Catatan perbandingan:</b> Dalam KUHPerdata, seseorang boleh menolak warisan (Pasal 1045 KUHPerdata). Dalam KHI, tidak dikenal hak menolak warisan kecuali ada penghalang waris. <br>
                Dalam praktik, seseorang dapat mengundurkan diri dari pembagian warisan setelah mengetahui bagiannya, selama sukarela dan beritikad baik.
              </td>
            </tr>
            <tr>
              <td class="border border-gray-400 px-4 py-2 font-semibold">Individual</td>
              <td class="border border-gray-400 px-4 py-2">
                Harta warisan dibagikan kepada masing-masing ahli waris secara perorangan. Para ahli waris dapat sepakat tidak membagi harta, melainkan mengelolanya bersama sesuai porsi warisan masing-masing.<br>
                Catatan: Beberapa hukum adat mengenal pewarisan kolektif, seperti tanah pusaka di Minangkabau.
              </td>
            </tr>
            <tr>
              <td class="border border-gray-400 px-4 py-2 font-semibold">Keadilan Berimbang</td>
              <td class="border border-gray-400 px-4 py-2">
                Bagian laki-laki dan perempuan adalah 2:1, bukan diskriminasi gender. Laki-laki menanggung nafkah, perempuan tidak. Dapat disimpangi jika semua ahli waris sepakat membagi rata.
              </td>
            </tr>
            <tr>
              <td class="border border-gray-400 px-4 py-2 font-semibold">Waris Karena Kematian</td>
              <td class="border border-gray-400 px-4 py-2">
                Hak waris baru timbul setelah pewaris meninggal. Hibah semasa hidup dapat diperhitungkan.
              </td>
            </tr>
            <tr>
              <td class="border border-gray-400 px-4 py-2 font-semibold">Hubungan Nasab atau Perkawinan</td>
              <td class="border border-gray-400 px-4 py-2">
                Pewarisan terjadi karena hubungan darah/perkawinan sah. Anak tetap memiliki hubungan nasab meski perkawinan dibatalkan. Anak yang ditemukan dan diakui (istilhaq) juga menimbulkan hubungan nasab. Pengangkatan anak tidak menimbulkan nasab.
              </td>
            </tr>
            <tr>
              <td class="border border-gray-400 px-4 py-2 font-semibold">Wasiat Wajibah</td>
              <td class="border border-gray-400 px-4 py-2">
                Wasiat wajibah adalah pemberian harta yang diwajibkan negara melalui hakim, maksimal ⅓ harta warisan. Jika tidak ada, Pengadilan Agama dapat memberikan secara ex officio. Sisa harta diserahkan ke baitul maal.
              </td>
            </tr>
            <tr>
              <td class="border border-gray-400 px-4 py-2 font-semibold">Egaliter</td>
              <td class="border border-gray-400 px-4 py-2">
                Berlaku bagi ahli waris berbeda agama. Mereka dapat memperoleh bagian melalui hibah atau wasiat wajibah, maksimal ⅓ bagian, tidak melebihi bagian ahli waris sederajat.
              </td>
            </tr>
            <tr>
              <td class="border border-gray-400 px-4 py-2 font-semibold">Retroaktif Terbatas</td>
              <td class="border border-gray-400 px-4 py-2">
                Jika harta sudah dibagi sebelum KHI berlaku, ahli waris pengganti tidak dapat menggugat. Jika pewaris meninggal sebelum KHI berlaku dan harta belum dibagi, KHI berlaku surut.
              </td>
            </tr>
          </tbody>
        </table>
          `,
        },
        {
          title: "Syarat Hukum Waris",
          description: `
        <p>
          Hukum kewarisan hanya dapat dilaksanakan jika memenuhi elemen-elemen legal tertentu. Berikut adalah rinciannya:
        </p>
        <ol>
          <li>
            <strong>Pewaris:</strong> Orang yang telah meninggal dunia.
          </li>
          <li>
            <strong>Ahli waris yang sah:</strong>
            <ul>
              <li>
                <em>Ada hubungan darah atau perkawinan:</em>
                <ul>
                  <li>Anak kandung</li>
                  <li>Orang tua</li>
                  <li>Pasangan (termasuk yang telah bercerai, asalkan masih dalam masa iddah)</li>
                  <li>Saudara kandung (bukan ahli waris utama)</li>
                </ul>
              </li>
              <li>Beragama Islam</li>
              <li>
                Tidak terhalang hukum, misalnya:
                <ul>
                  <li>Membunuh atau menyiksa berat pewaris</li>
                  <li>Menuduh pewaris melakukan kejahatan berat secara palsu</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Ada harta peninggalan</strong>
          </li>
        </ol>
        <p><strong>Catatan Penting:</strong></p>
        <ul>
          <li>Anak angkat bukan ahli waris, karena tidak ada hubungan darah.</li>
          <li>Anak yang keluar dari Islam tidak berhak mewaris.</li>
          <li>Saudara kandung tidak mendapat warisan jika masih ada orang tua atau anak pewaris.</li>
        </ul>
        `,
        },
        {
          title: "Kewajiban Sebelum Pembagian",
          description: `
        <p>
          Harta waris tidak boleh langsung dibagi. Keluarga harus menyelesaikan urutan kewajiban berikut:
        </p>
        <ol>
          <li><strong>Biaya Pemakaman:</strong> Pengurusan jenazah.</li>
          <li><strong>Hutang:</strong> Melunasi hutang kepada pihak ketiga atau tagihan rumah sakit.</li>
          <li><strong>Wasiat:</strong> Menjalankan pesan terakhir pewaris. <em>(Syarat Mutlak: Wasiat hanya boleh maksimal ⅓ dari total harta bersih, kecuali seluruh ahli waris setuju untuk memberikan lebih)</em></li>
        </ol>
        <p>
          Jika hutang lebih besar dari harta, keluarga tidak wajib menanggung sisa utang.
        </p>

        <h4>Rumus Menghitung Harta Waris Bersih:</h4>
        <p>
          Harta waris bersih = [harta pribadi + ½ harta bersama] - [Biaya pemakaman + Biaya Rumah Sakit + Hutang]
        </p>

        <h4>Contoh Menghitung Harta Waris Bersih:</h4>
        <ul>
          <li>Harta pribadi: Rp. 150.000.000</li>
          <li>Harta bersama: Rp. 1.000.000.000</li>
          <li>Beban (Biaya Jenazah + RS + Hutang): 10.000.000 + 35.000.000 + 5.000.000 = 50.000.000</li>
          <li>Wasiat: Rp. 200.000.000</li>
        </ul>

        <h4>Langkah Perhitungan:</h4>
        <ol>
          <li>
            <strong>Hitung harta waris bersih:</strong><br>
            (150.000.000 + 1.000.000.000 ÷ 2) - 50.000.000 = 600.000.000
          </li>
          <li>
            <strong>Cek Batas Wasiat:</strong><br>
            Maksimal wasiat = ⅓ × 600.000.000 = 200.000.000.<br>
            Karena wasiat pas 200.000.000 dan tidak melebihi ⅓ harta waris bersih, maka wasiat sah untuk dilaksanakan.
          </li>
          <li>
            <strong>Sisa harta untuk dibagi ke ahli waris:</strong><br>
            600.000.000 - 200.000.000 (wasiat) = 400.000.000
          </li>
        </ol>
        `,
        },
        {
          title: "Distribusi Warisan",
          description: `
          <p>
            Pembagian warisan ditentukan oleh porsi yang sudah ditetapkan dalam hukum Islam. Perlu diingat, pembagian selalu dilihat dari sudut pandang orang yang telah meninggal (pewaris), bukan ahli waris.
          </p>

          <table class="w-full text-left border-collapse border border-gray-400 dark:border-gray-600 mb-6">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-900">
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b>Ahli Waris</b></th>
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b>Kondisi</b></th>
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b>Porsi </b></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900" rowspan="3">Anak Perempuan</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1 orang saja</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1/2</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">2 orang atau lebih (tanpa anak laki-laki)</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">2/3</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Sama anak laki-laki</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Ashabah 2:1 dengan anak laki-laki</td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Anak Laki-laki</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Sendiri atau bersama saudara perempuan</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Ashabah (sisa) — jika bersama saudara perempuan → 2:1 (anak laki-laki 2, anak perempuan 1)</td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900" rowspan="2">Istri (Janda)</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Jika tidak ada anak</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1/4</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Jika ada anak</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1/8</td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900" rowspan="2">Suami (Duda)</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Jika tidak ada anak</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1/2</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Jika ada anak</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1/4</td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900" rowspan="3">Ibu</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Tidak ada anak atau 1 saudara</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1/3</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Kalau ada anak atau 2 saudara atau lebih</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1/6</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Tidak ada anak atau saudara (yang waris adalah ayah dan pasangan)</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Sisa 1/3</td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900" rowspan="2">Ayah</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Jika tidak punya anak</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Ashabah</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Jika punya 1 atau lebih anak</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1/6</td>
              </tr>
            </tbody>
          </table>

          Dalam hukum Islam, pembagian warisan selalu dilihat dari sudut pandang orang yang meninggal (pewaris), bukan dari ahli waris. 

          <hr style="border: none; border-top: 1px solid gray;">
          <h4> Konsep Matematika: Asal Masalah, Aul, dan Rad </h4>
            <p>
            Untuk menghitung nilai uang dalam pembagian warisan, kita harus menggunakan <strong>Asal Masalah (AM)</strong>, yaitu angka penyebut terkecil (KPK) dari porsi-porsi yang ada.
          </p>

          <p><strong>Contoh AM:</strong><br>
          Eg. ½ + ⅓ = 3/6 + 2/6 = 5/6<br>
          AM = 6
          </p>

          <h4>1) Ashabah</h4>
          <p>
            Ahli waris yang menerima sisa harta setelah semua ahli waris lain mengambil porsinya.<br>
            <strong>Rumus:</strong> Ashabah = AM - total porsi ahli waris lain
          </p>

          <p><strong>Contoh Distribusi Warisan dengan Ashabah & Rasio 2:1:</strong><br>
          Jika ada anak laki-laki dan perempuan, mereka berbagi sisa harta (Ashabah) dengan rasio: laki-laki mendapat dua kali lipat dari perempuan.<br>
          1 anak laki-laki = 2 anak perempuan (1L = 2P)
          </p>

          <p>Misalnya terdapat sisa harta (Ashabah) sebesar Rp. 630.000.000 untuk 1 anak laki-laki (L) dan 3 anak perempuan (P):</p>
          <ol>
            <li>Cari total rasio: 1L + 3P = 2P + 3P = 5P</li>
            <li>Hitung nilai 1 bagian: 5P = 630.000.000 → 1P = 126.000.000</li>
            <li>Distribusi:
              <ul>
                <li>Anak laki-laki = 2 × 126.000.000 = 252.000.000</li>
                <li>Setiap anak perempuan = 126.000.000</li>
              </ul>
            </li>
          </ol>

          <h4>2) Aul</h4>
          <p>
            Terjadi jika total porsi ahli waris lebih besar dari harta yang tersedia (Penyebut < Pembilang).<br>
            <strong>Solusi:</strong> Menaikkan angka AM agar sesuai dengan total pembilang
          </p>

          <p><strong>Contoh Aul:</strong></p>
          <ul>
            <li>Istri: ⅛ → 3/24</li>
            <li>Ayah: ⅙ → 4/24</li>
            <li>Ibu: ⅙ → 4/24</li>
            <li>2 anak perempuan: ⅔ → 16/24</li>
          </ul>
          <p>AM = 24<br>
          Total = 3 + 4 + 4 + 16 = 27 &gt; AM 24<br>
          → Jadi AM diganti ke yang baru, yaitu 27
          </p>

          <h4>3) Raad</h4>
          <p>
            Terjadi jika total porsi ahli waris lebih kecil dari harta dan tidak ada Ashabah.<br>
            <strong>Solusi:</strong> Membagikan kembali sisa harta kepada ahli waris secara proporsional
          </p>

          <p><strong>Contoh Raad:</strong></p>
          <ul>
            <li>Istri: ⅛ → 3/24</li>
            <li>Ibu: ⅙ → 4/24</li>
            <li>1 anak perempuan: ½ → 12/24</li>
          </ul>
          <p>AM = 24<br>
          Total = 3 + 4 + 12 = 19 &lt; AM 24<br>
          → Jadi AM diganti ke yang baru, yaitu 19
          </p>

            `,
        },
        {
          title: "Bagian Ibu dan Saudara",
          description: `
          <p>
            Dalam hukum waris Islam, tidak semua anggota keluarga selalu mendapat warisan. Bagian ibu dan saudara sangat tergantung pada siapa saja keluarga yang ditinggalkan oleh pewaris.
          </p>

          <h4>Porsi Ibu</h4>
          <p>Ibu selalu termasuk ahli waris, tetapi besar bagiannya berbeda-beda tergantung kondisi keluarga:</p>
          <ul>
            <li>⅓ Jika pewaris tidak memiliki anak dan hanya memiliki maksimal 1 saudara</li>
            <li>⅙ Jika pewaris memiliki anak atau memiliki 2 saudara atau lebih</li>
            <li>⅓ dari sisa jika ibu berbagi warisan hanya dengan ayah dan salah satu pasangan (suami/istri)</li>
          </ul>

          <h4>Porsi Saudara</h4>
          <p>Saudara <strong>BUKAN ahli waris prioritas</strong> dan <strong>TIDAK mendapat warisan</strong> jika pewaris masih memiliki:</p>
          <ul>
            <li>Anak</li>
            <li>Ayah</li>
          </ul>
          <p>Saudara baru bisa mendapat warisan jika tidak ada anak dan tidak ada ayah.</p>

          <table class="w-full text-left border-collapse border border-gray-400 dark:border-gray-600 mb-6">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-900">
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal">Jenis Saudara</th>
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal">Kondisi</th>
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal">Porsi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900" rowspan="3">Saudara Perempuan</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1 orang</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1/2</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">2 orang atau lebih</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">2/3</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Bersama saudara laki-laki</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Rasio 2:1</td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Saudara Laki-Laki</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Tanpa anak/ayah</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">Ashabah</td>
              </tr>

              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900" rowspan="2">Saudara kalau ada ibu</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1 orang</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">1/6</td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">2 orang atau lebih</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-900">⅓ (dibagi rata)</td>
              </tr>
            </tbody>
          </table>

          <p><strong>Catatan penting:</strong> Jika pewaris tidak memiliki anak, saudara laki-laki dan perempuan akan mendapatkan bagian ⅓ yang dibagi rata tanpa membedakan gender jika mereka adalah saudara seibu. Namun, dalam skenario umum tanpa orang tua, mereka berbagi dengan rasio 2:1.</p>



          <table class="w-full text-left border-collapse border border-gray-400 dark:border-gray-600 mb-6">
            <thead>
              <tr class="bg-gray-200 dark:bg-gray-900">
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b> Contoh </b></th>
                <th class="border border-gray-400 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-200 font-normal"><b>Perhitungan </b></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 font-semibold">Contoh 1</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Seorang perempuan (A) meninggal dunia dan meninggalkan:<br>
                  - Suami<br>
                  - Ayah<br>
                  - Ibu<br>
                  <strong>Catatan:</strong> Saudara tidak ada dalam daftar ahli waris<br>
                  <strong>Langkah:</strong><br>
                  1. Bayar utang & biaya pemakaman<br>
                  2. Suami mendapat bagian tetap<br>
                  3. Ibu mendapat bagian sesuai ketentuan<br>
                  4. Ayah mendapat sisa
                </td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 font-semibold">Contoh 2</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Seorang perempuan meninggal dan meninggalkan:<br>
                  - Suami<br>
                  - Ibu<br>
                  - 1 saudara laki-laki<br>
                  - 1 saudara perempuan<br>
                  <strong>Catatan:</strong> Saudara TIDAK mendapat warisan karena masih ada ibu<br>
                  <strong>Ahli waris yang berhak:</strong><br>
                  - Suami<br>
                  - Ibu
                </td>
              </tr>
              <tr>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2 font-semibold">Contoh 3</td>
                <td class="border border-gray-400 dark:border-gray-600 px-4 py-2">
                  Seorang laki-laki meninggal dan meninggalkan:<br>
                  - Istri<br>
                  - 2 saudara perempuan<br>
                  - 1 saudara laki-laki<br>
                  - Tidak punya anak<br>
                  - Tidak punya orang tua<br>
                  <strong>Catatan:</strong> Saudara berhak menerima warisan karena:<br>
                  - Tidak ada anak<br>
                  - Tidak ada ayah<br>
                  <strong>Distribusi:</strong><br>
                  - Istri mendapat bagian tetap<br>
                  - Sisanya dibagi kepada saudara:<br>
                  &nbsp;&nbsp;• Saudara laki-laki = 2 bagian<br>
                  &nbsp;&nbsp;• Saudara perempuan = 1 bagian per orang
                </td>
              </tr>
            </tbody>
          </table>

          `,
        },
        {
          title: "Ahli Waris Pengganti Dalam Hukum Waris Islam",
          description: `
        <p>
          Ahli waris pengganti adalah orang yang menggantikan posisi ahli waris yang seharusnya menerima warisan, tetapi sudah meninggal lebih dulu sebelum pewaris.
        </p>

        <p>
          Konsep ini khas Indonesia dan diatur dalam Pasal 185 Kompilasi Hukum Islam (KHI). Tidak semua negara yang menerapkan hukum Islam mengenal aturan ini.
        </p>

        <p>
          <b> Pasal 185 KHI: </b> Jika seorang ahli waris meninggal lebih dahulu dari pewaris, maka bagian warisnya tidak hilang, tetapi dialihkan kepada anak-anaknya.
        </p>

        <h4>Syarat Ahli Waris Asli (yang Digantikan)</h4>
        <ul>
          <li>Memiliki hubungan darah atau perkawinan</li>
          <li>Beragama Islam</li>
          <li>Tidak terhalang hukum (misalnya tidak membunuh pewaris)</li>
        </ul>

        <h4>Syarat Ahli Waris Pengganti</h4>
        <ul>
          <li>Orang yang digantikan meninggal lebih dulu dari pewaris</li>
          <li>Ahli waris pengganti tidak boleh lebih besar dari bagian ahli waris yang digantikan</li>
        </ul>

        <p>
        <img src="/images/hero/image3.png" alt="Contoh Haul dan Nisab" class="w-full max-w-md mb-2" />
          Perhatikan bahwa segitiga mewakili laki-laki sedangkan lingkaran mewakili perempuan.
        </p>

        <p>
          Dalam skenario ini, baik C maupun D telah meninggal dunia sebelum orang yang bersangkutan (P). Hal ini berarti anak-anak C dan D berhak menjadi ahli waris pengganti. Dalam hal ini, F akan menerima apa yang seharusnya diterima oleh C jika dia masih hidup. Hal yang sama berlaku untuk D.
        </p>

        <p>
          Jika total bagian untuk anak-anak (C + D + E) adalah 600 juta. Pembagiannya akan dilakukan sebagai berikut.
        </p>

        <ul>
          <li>1 anak laki-laki (L) + 1 anak perempuan (P) + 1 anak perempuan (p) = 600 juta</li>
          <li>L + 2P = 600 juta</li>
          <li>(ingat rasio ashabah di mana 2 anak perempuan = 1 anak laki-laki!)</li>
          <li>2P + 2P = 600 juta</li>
          <li>4P = 600 juta</li>
          <li>1P = 150 juta</li>
          <li>1L = 2x150 = 300 juta</li>
        </ul>

        <p>
          Sesuai dengan aturan yang disebutkan, F akan mendapatkan bagian C, yang berarti bagian senilai 1L = 300 juta. G akan mendapatkan bagian D, yang senilai 1P = 150 juta. Dan E sebagai anak perempuan akan mendapatkan 150 juta.
        </p>

        <p>
          Namun, aturan menyatakan bahwa ahli waris pengganti TIDAK BOLEH menerima saham yang melebihi hak ahli waris yang setara, dalam hal ini E (karena dia tidak digantikan). Jika hal ini terjadi, saham ahli waris yang berhak dan ahli waris pengganti akan dijumlahkan dan dibagi rata.
        </p>

        <ul>
          <li>F = 300 juta</li>
          <li>E = 150 juta</li>
          <li>F > E (TIDAK diperbolehkan) → (300 + 150)/2 = 225 juta</li>
          <li>(Catatan: Alasan bagian G tidak terpengaruh adalah karena tidak melebihi apa yang diterima E)</li>
        </ul>

        <p>
          Jadi, kesimpulannya, <br>
          F akan menerima 225 jt<br>
          G akan menerima 150 jt<br>
          E akan menerima 225 jt
        </p>

        <h4>Siapa yang Bisa Menjadi Ahli Waris Pengganti</h4>
        <ol>
          <li>Anak-anak dari ahli waris yang meninggal lebih dulu ⇒ misalnya cucu menggantikan ayahnya</li>
          <li>Jika tidak ada anak ⇒ Saudara</li>
          <li>Jika tidak ada saudara ⇒ istri atau suami</li>
          <li>Jika semua tidak ada ⇒ baitul mal (lembaga pengelola harta umat)</li>
        </ol>

        <h4>Cara Menentukan Bagian Ahli Waris Pengganti</h4>
        <ul>
          <li>Ahli waris pengganti mendapat bagian sesuai posisi orang yang digantikan</li>
          <li>Contoh: Jika menggantikan anak laki-laki, maka posisinya seperti anak laki-laki (ashabah)</li>
          <li>Jika yang menggantikan lebih dari satu orang, maka:
            <ul>
              <li>Bagiannya dibagi rata di antara mereka</li>
              <li>Pembagiannya menyesuaikan jumlah orang yang menggantikan</li>
            </ul>
          </li>
        </ul>

        <p>
          Prinsip penting: Total bagian ahli waris pengganti tidak boleh melebihi bagian ahli waris asli
        </p>

        <h4>Kewenangan Ahli Waris Pengganti</h4>
        <ul>
          <li>Memiliki kedudukan hukum yang sama dengan ahli waris asli</li>
          <li>Berhak menerima atau menolak wasiat, baik wasiat kepada ahli waris maupun bukan ahli waris</li>
        </ul>

        <h4>Contoh Sederhana</h4>
        <p>
          Seorang kakek meninggal dunia.<br>
          Anaknya sudah meninggal lebih dulu, tetapi anak tersebut memiliki 2 orang anak.<br>
          👉 <b> Maka: </b> <br>
          Kedua cucu tersebut menggantikan posisi ayahnya<br>
          Mereka membagi bagian ayahnya, bukan mendapat bagian baru
        </p>
        `,
        },
      ],
    },
    // {
    //   id: "peran_masyarakat",
    //   label: "Materi 6",
    //   icon: <EmailGeneratorIcon className="w-8 h-8" />,
    //   title: "Write professional emails instantly",
    //   description:
    //     "Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.",
    // },
  ];

  // Get current tab
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    // <section className="py-14 md:py-28 dark:bg-dark-primary">
    <section className="pb-14 pt-0 md:pb-28 dark:bg-gray-900">
      <div className="relative z-10 h-14 flex items-center overflow-hidden">
        <div className="marquee-ltr text-lg sm:text-xl text-gray-800 dark:text-slate-200 opacity-80">
          <span className="marquee-track whitespace-nowrap">
            {icons.repeat(3)}
          </span>
        </div>
      </div>
      <div className="relative w-screen overflow-hidden">
        {/* GLASS BACKGROUND */}
        <div className="absolute inset-0 backdrop-blur-xl bg-white/70 dark:bg-[#0f172a]/60" />

        {/* SOFT DEPTH */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-transparent dark:from-white/5 dark:via-transparent" />

        {/* BORDER */}
        <div className="absolute inset-x-0 top-0 h-px bg-black/10 dark:bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/5 dark:bg-white/5" />
      </div>

      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h4 className="mb-3 font-bold text-gray-800 dark:text-white/90 text-2xl md:text-title-lg">
            {/* Yuk check dan baca materinya! */}
          </h4>
        </div>

        <div className="max-w-[1008px] mx-auto">
          <div className="overflow-x-auto custom-scrollbar mx-auto max-w-fit relative mb-6">
            <div className="flex gap-2 min-w-max rounded-full bg-gray-100 dark:bg-white/5 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center h-12 gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-white dark:text-white/90 dark:bg-white/10 text-gray-800"
                      : "text-gray-500 dark:text-gray-400 bg-transparent"
                  }`}
                >
                  {tab.icon}
                  <span className="truncate">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90">
              {currentTab.title}
            </h2>
            <p className="max-w-xl mx-auto mb-6 text-sm text-gray-500 dark:text-gray-400">
              {currentTab.description}
            </p>
          </div>

          {/* <div className="p-3 tab-img-bg overflow-hidden rounded-4xl mt-8">
            <div className="p-3 tab-img-overlay">
              {currentTab.contents && currentTab.contents.length > 0 ? (
                <Accordion variant="shadow">
                  {currentTab.contents.map((content, index) => (
                    <AccordionItem
                      key={index}
                      aria-label={`Accordion ${index + 1}`}
                      title={<span className="font-bold">{content.title}</span>}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content.description,
                        }} // Renders HTML
                      />
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p className="text-gray-500">{currentTab.description}</p>
              )}
            </div>
          </div> */}
          <div className="mt-8 rounded-4xl p-[2px] bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200 shadow-lg">
            <div className="tab-img-bg overflow-hidden rounded-4xl bg-white/80 backdrop-blur">
              <div className="tab-img-overlay p-2">
                {currentTab.contents && currentTab.contents.length > 0 ? (
                  <Accordion
                    variant="splitted"
                    selectionMode="multiple"
                    className="gap-3"
                    itemClasses={{
                      base: "rounded-2xl border border-orange-200 bg-orange-50/85 backdrop-blur-sm shadow-sm",
                      // title:
                      //   "text-gray-800 font-semibold text-base flex items-center gap-2",
                      title:
                        "text-center text-gray-800 font-semibold text-base flex items-center gap-2 border-b border-gray-300 dark:border-gray-600 pb-1",

                      trigger:
                        "px-4 py-3 rounded-2xl hover:bg-orange-50 transition-colors",
                      content:
                        "px-4 pb-4 pt-1 text-gray-600 text-sm leading-relaxed",
                      indicator: "text-orange-500 data-[open=true]:rotate-180",
                    }}
                  >
                    {currentTab.contents.map((content, index) => (
                      <AccordionItem
                        key={index}
                        aria-label={`Accordion ${index + 1}`}
                        title={content.title}
                      >
                        <div
                          className="prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{
                            __html: content.description,
                          }}
                        />
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {currentTab.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="relative py-20 px-6 bg-slate-50 dark:bg-[#0f172a] overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Card */}
          <div
            className="
            relative bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]
            p-10 sm:p-14 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed
            border border-slate-200 dark:border-slate-700
          "
          >
            {/* Heading */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-5 py-1.5 text-sm rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400">
                Sumber
              </span>
            </div>

            {/* Content */}
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Destri Budi Nugraheni, et. al, 2024,{" "}
                <i>Pengantar Hukum Islam dan Pelembagaannya di Indonesia</i>,
                RajaGrafindo
              </li>
              <li>
                Mohammad Daud Ali,{" "}
                <i>
                  Islamic Law: Introduction to Islamic Jurisprudence and the
                  Legal System in Indonesia
                </i>
                , PT RajaGrafindo Persada, Jakarta 2016
              </li>
              <li>
                Khotibul Umam,{" "}
                <i>
                  Perbankan Syariah Dasar-dasar dan Dinamika Perkembangannya di
                  Indonesia
                </i>
                , PT RajaGrafindo Persada, 2019 (3rd Edition)
              </li>
              <li>
                Yahya Harahap,{" "}
                <i>Kedudukan, Kewenangan dan Acara Peradilan Agama</i>,
                SinarGrafika, Jakarta
              </li>
              <li>
                Syarifuddin, Amir, 2009,{" "}
                <i>
                  Hukum Perkawinan Islam di Indonesia Antara Fiqh Munakahat dan
                  Undang-undang Perkawinan
                </i>
                , Kencana, Jakarta
              </li>
              <li>
                Ilhami, Destri Budi Nugraheni dan Haniah, 2014,{" "}
                <i>Pembaruan Hukum Kewarisan Islam di Indonesia</i>, Gadjah Mada
                University Press, Yogyakarta
              </li>
              <li>
                Indonesian Supreme Court, 2009,{" "}
                <i>
                  Book II, Guidelines for the Implementation of Task and
                  Administrative in Religious Court
                </i>
                , Indonesian Supreme Court, Jakarta
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

const icons = `
📚📚   ⚖️⚖️   🕌🕌   📖📖   ⚖️⚖️
📚📚   🕌🕌   📖📖   📚📚   ⚖️⚖️
🕌🕌   📖📖   ⚖️⚖️   📚📚   🕌🕌
`;

// const icons = `
// 📚📚 &nbsp;&nbsp; ⚖️⚖️&nbsp;&nbsp;🕌🕌&nbsp;&nbsp;📖📖&nbsp;&nbsp;⚖️⚖️
// 📚📚&nbsp;&nbsp;🕌🕌&nbsp;&nbsp;📖📖&nbsp;&nbsp;📚📚&nbsp;&nbsp;⚖️⚖️
// 🕌🕌&nbsp;&nbsp;📖📖&nbsp;&nbsp;⚖️⚖️&nbsp;&nbsp;📚📚&nbsp;&nbsp;🕌🕌
// `;
