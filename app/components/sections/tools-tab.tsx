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
    <section className="py-14 md:py-28 dark:bg-gray-900">
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

          <div className="p-3 tab-img-bg overflow-hidden rounded-4xl mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
