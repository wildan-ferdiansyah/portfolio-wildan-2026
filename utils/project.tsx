import React from "react";
import { SiLaravel, SiLivewire, SiMysql, SiNextdotjs, SiReact, SiShadcnui, SiTailwindcss } from "react-icons/si";

export type Project = {
  id: number | string;
  image: string;
  title: string;
  href: string;
  description: string;
  tech: {
    name: string;
    icon: React.ReactNode;
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    image: "/project-1.png",
    title: "Sistem Informasi Pengelolaan Magang",
    href: "https://github.com/wildan-ferdiansyah/project-skripsi-sistem-magang",
    description: "Sistem berbasis website yang membantu instansi untuk mengelola kegiatan magang",
    tech: [
      { name: "Laravel", icon: <SiLaravel className="w-8 h-8 text-red-600" /> },
      { name: "Livewire", icon: <SiLivewire className="w-8 h-8 text-violet-600" /> },
      { name: "MySQL", icon: <SiMysql className="w-8 h-8 text-sky-600" /> },
    ]
  },
  {
    id: 2,
    image: "/project-2.png",
    title: "Personal Portfolio 2026",
    href: "https://github.com/wildan-ferdiansyah/portfolio-wildan-2026",
    description: "Personal website portfolio menggunakan teknologi Next.js dan Shadcn UI",
    tech: [
      { name: "Next JS", icon: <SiNextdotjs className="w-8 h-8 text-slate-200" /> },
      { name: "React JS", icon: <SiReact className="w-8 h-8 text-sky-300" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-blue-500" /> },
      { name: "Shadcn UI", icon: <SiShadcnui className="w-8 h-8 text-zinc-500" /> },
    ]
  },
]