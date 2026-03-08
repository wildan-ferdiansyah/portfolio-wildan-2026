"use client";

import { useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────
export interface PendidikanData {
  logo: string;
  logoAlt?: string;
  title: string;
  graduate: string;
  major: string;
  ipk?: string;
  period: string;
  location: string;
}

// ─── ExperienceCard ───────────────────────────────────────────────
export function PendidikanCard({ data }: { data: PendidikanData }) {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-2xl border cursor-pointer border-zinc-200  dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900 p-5 sm:p-6 transition-colors duration-300"
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
              alt={data.logoAlt ?? data.graduate}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
              {data.title}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              {data.graduate}
              <span className="mx-2 opacity-40">•</span>
              {data.major}
              <span className="mx-2 opacity-40">•</span>
              {data.ipk}
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5 text-xs text-zinc-500 dark:text-zinc-500">
              <span>{data.period}</span>
              <span className="opacity-40">•</span>
              <span>{data.location}</span>
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
export function ListPendidikan({
  pendidikan,
}: {
  pendidikan: PendidikanData[];
}) {
  return (
    <div className="space-y-4">
      {pendidikan.map((pend, i) => (
        <PendidikanCard key={i} data={pend} />
      ))}
    </div>
  );
}
