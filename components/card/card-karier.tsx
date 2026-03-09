"use client";

import { useEffect, useRef, useState } from "react";
import {
  Rocket,
  Lightbulb,
  ListChecks,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────
export interface ExperienceData {
  logo: string;
  logoAlt?: string;
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  workMode: string;
  tasks: string[];
  learnings: string[];
  impacts: string[];
}

// ─── ExperienceCard ───────────────────────────────────────────────
export function ExperienceCard({ data }: { data: ExperienceData }) {
  const [expanded, setExpanded] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    if (!contentRef.current) return;
    if (expanded) {
      // Reset dulu ke auto biar scrollHeight terhitung benar
      contentRef.current.style.height = "auto";
      const fullHeight = contentRef.current.scrollHeight;
      contentRef.current.style.height = "0px";
      // Force reflow
      contentRef.current.getBoundingClientRect();
      setHeight(fullHeight);
    } else {
      setHeight(0);
    }
  }, [expanded]);
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-2xl cursor-pointer border border-zinc-200  dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900 p-5 sm:p-6 transition-colors duration-300"
      style={{ isolation: "isolate" }}
    >
      {/* Glow (dark mode only) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: isHovered
            ? `radial-gradient(320px circle at ${glowPos.x}px ${glowPos.y}px, rgba(255,255,255,0.06), transparent 70%)`
            : "none",
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-white flex items-center justify-center">
            <img
              src={data.logo}
              alt={data.logoAlt ?? data.company}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
              {data.title}
            </h3>
            <p className="md:text-sm text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {data.company}
              <span className="mx-2 opacity-40">•</span>
              {data.location}
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5 text-xs text-zinc-500 dark:text-zinc-500">
              <span>{data.period}</span>
              <span className="opacity-40">•</span>
              <span>{data.duration}</span>
              <span className="opacity-40">•</span>
              <span>{data.type}</span>
              <span className="opacity-40">•</span>
              <span>{data.workMode}</span>
            </div>
          </div>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center cursor-pointer gap-1.5 mt-4 text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? "Sembunyikan detail" : "Tampilkan detail"}
        </button>

        <div
          ref={contentRef}
          style={{
            height: expanded ? height : 0,
            overflow: "hidden",
            transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transformOrigin: "top",
            opacity: expanded ? 1 : 0,
          }}
        >
          <div className="mt-4 space-y-5">
            <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

            <Section
              icon={<ListChecks size={15} className="text-teal-500" />}
              title="TUGAS"
              items={data.tasks}
            />

            <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Section
                icon={<Lightbulb size={15} className="text-teal-500" />}
                title="APA YANG SAYA PELAJARI"
                items={data.learnings}
              />
              <Section
                icon={<Rocket size={15} className="text-teal-500" />}
                title="DAMPAK"
                items={data.impacts}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────
function Section({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-xs font-bold tracking-widest text-teal-500 uppercase">
          {title}
        </span>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
          >
            <span className="mt-0.5 text-teal-500 shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── ExperienceList ───────────────────────────────────────────────
export function ExperienceList({
  experiences,
}: {
  experiences: ExperienceData[];
}) {
  return (
    <div className="space-y-4">
      {experiences.map((exp, i) => (
        <ExperienceCard key={i} data={exp} />
      ))}
    </div>
  );
}
