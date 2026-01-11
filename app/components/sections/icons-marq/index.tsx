"use client";

type MarqueeIconsProps = {
  className?: string;
};

export function MarqueeIcons({ className = "" }: MarqueeIconsProps) {
  return (
    <div
      className={`relative z-10 h-14 flex items-center overflow-hidden ${className}`}
    >
      <div className="marquee-ltr text-lg sm:text-xl text-gray-800 dark:text-slate-200 opacity-80">
        <span className="marquee-track whitespace-nowrap">
          {icons.repeat(3)}
        </span>
      </div>
    </div>
  );
}

/* ---------- Helpers ---------- */

const icons = `
📚📚   ⚖️⚖️   🕌🕌   📖📖   ⚖️⚖️   
📚📚   🕌🕌   📖📖   📚📚   ⚖️⚖️   
🕌🕌   📖📖   ⚖️⚖️   📚📚   🕌🕌   
`;
