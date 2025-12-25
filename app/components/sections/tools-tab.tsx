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
  const [activeTab, setActiveTab] = useState("sampah");

  // Tab data
  const tabs: Tab[] = [
    {
      id: "sampah",
      label: "Materi 1",
      icon: <TextGeneratorIcon className="w-8 h-8" />,
      title: "Materi 1: Pengertian Hukum Islam",
      description: "Materi 1 membahas tentang Pengertian Hukum Islam.",
      contents: [
        {
          title: "Pengertian Hukum Islam",
          description: `
          Hukum Islam adalah seperangkat aturan dan prinsip yang berasal dari ajaran agama Islam yang mengatur berbagai aspek kehidupan umat Muslim, termasuk ibadah, muamalah (interaksi sosial dan ekonomi), serta tata cara berperilaku dalam masyarakat. 
          Hukum ini bersumber dari Al-Qur'an, Hadis (perkataan dan tindakan Nabi Muhammad SAW), Ijma' (kesepakatan ulama), dan Qiyas (analogi). 
          Tujuan utama hukum Islam adalah untuk mencapai keadilan, kesejahteraan, dan kebaikan bagi individu dan masyarakat secara keseluruhan.<br><br>

          <b>1. Aspek Ibadah:</b><br>
          Aspek ini mencakup segala hal yang berhubungan dengan ibadah kepada Allah, seperti shalat, zakat, puasa, dan haji.<br><br>

          <b>2. Aspek Muamalah:</b><br>
          Ini meliputi interaksi sosial dan ekonomi, termasuk jual beli, pinjaman, sewa menyewa, dan lainnya.<br><br>

          <b>3. Aspek Akhlak:</b><br>
          Hukum Islam juga mengatur tentang tata cara berperilaku dalam masyarakat, seperti adab dalam berinteraksi, berbicara, dan bergaul.<br><br>

          Hukum Islam bertujuan untuk menciptakan kesejahteraan sosial dengan memelihara hak-hak individu dan masyarakat.
        `,
        },
        {
          title: "Pengertian Hukum Islam (Lanjutan)",
          description:
            "Hukum Islam adalah seperangkat aturan dan prinsip yang berasal dari ajaran agama Islam yang mengatur berbagai aspek kehidupan umat Muslim, termasuk ibadah, muamalah (interaksi sosial dan ekonomi), serta tata cara berperilaku dalam masyarakat. Hukum ini bersumber dari Al-Qur'an, Hadis (perkataan dan tindakan Nabi Muhammad SAW), Ijma' (kesepakatan ulama), dan Qiyas (analogi). Tujuan utama hukum Islam adalah untuk mencapai keadilan, kesejahteraan, dan kebaikan bagi individu dan masyarakat secara keseluruhan.",
        },
      ],
    },
    {
      id: "reduce",
      label: "Materi 2",
      icon: <ImageGeneratorIcon className="w-8 h-8" />,
      title: "Create stunning images with AI",
      description:
        "Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.",
      contents: [
        {
          title: "Image Generation Overview",
          description:
            "Image generation using AI involves the use of advanced algorithms and neural networks to create visual content from textual descriptions or other input data. This technology leverages deep learning techniques, particularly Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs), to produce high-quality images that can range from realistic photographs to imaginative artwork.",
        },
      ],
    },
    {
      id: "reuse",
      label: "Materi 3",
      icon: <CodeGeneratorIcon className="w-8 h-8" />,
      title: "Generate code in any language",
      description:
        "Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.",
    },
    {
      id: "recycle",
      label: "Materi 4",
      icon: <VideoGeneratorIcon className="w-8 h-8" />,
      title: "Create engaging videos with AI",
      description:
        "Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.",
    },
    {
      id: "dampak_lingkungan",
      label: "Materi 5",
      icon: <EmailGeneratorIcon className="w-8 h-8" />,
      title: "Write professional emails instantly",
      description:
        "Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.",
    },
    {
      id: "peran_masyarakat",
      label: "Materi 6",
      icon: <EmailGeneratorIcon className="w-8 h-8" />,
      title: "Write professional emails instantly",
      description:
        "Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.",
    },
  ];

  // Get current tab
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    // <section className="py-14 md:py-28 dark:bg-dark-primary">
    <section className="pb-14 pt-0 md:pb-28 dark:bg-gray-900">
      <div className="relative w-screen overflow-hidden">
        {/* GLASS BACKGROUND */}
        <div className="absolute inset-0 backdrop-blur-xl bg-white/70 dark:bg-[#0f172a]/60" />

        {/* SOFT DEPTH */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-transparent dark:from-white/5 dark:via-transparent" />

        {/* BORDER */}
        <div className="absolute inset-x-0 top-0 h-px bg-black/10 dark:bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/5 dark:bg-white/5" />

        {/* MARQUEE */}
        <div className="relative z-10 h-14 flex items-center overflow-hidden">
          <div className="marquee-ltr text-lg sm:text-xl text-gray-800 dark:text-slate-200 opacity-80">
            <span className="marquee-track">
              📚📚 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              ⚖️⚖️ &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              🕌🕌 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              📖📖 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              ⚖️⚖️ &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  
              📚📚 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              🕌🕌 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              📖📖 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              📚📚 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  
              ⚖️⚖️&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              🕌🕌 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  
              📖📖 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              ⚖️⚖️ &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              📚📚 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              🕌🕌 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
              📖📖 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
            </span>
          </div>
        </div>
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
                      title:
                        "text-gray-800 font-semibold text-base flex items-center gap-2",
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
    </section>
  );
}
