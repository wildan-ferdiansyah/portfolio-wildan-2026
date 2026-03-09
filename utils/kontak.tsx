import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

export type Kontak = {
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  colorClass: string;
  cardHoverClass: string;
  btnHoverClass: string;
};

export const kontaks: Kontak[] = [
  {
    name: "Instagram",
    description: "Lihat detail tentang saya di Instagram",
    href: "https://instagram.com/wildanferddd_",
    icon: <SiInstagram className="w-8 h-8" />,
    colorClass: "group-hover:text-pink-500 group-hover:bg-pink-50 dark:group-hover:bg-pink-500/10 group-hover:border-pink-200 dark:group-hover:border-pink-500/20",
    cardHoverClass: "hover:border-pink-300 dark:hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-100 dark:hover:shadow-pink-500/5",
    btnHoverClass: "hover:bg-pink-50 hover:text-pink-500 hover:border-pink-200 dark:hover:bg-pink-500/10 dark:hover:text-pink-400 dark:hover:border-pink-500/20",
  },
  {
    name: "GitHub",
    description: "Jelajahi repositori kumpulan project saya di GitHub",
    href: "https://github.com/wildan-ferdiansyah",
    icon: <SiGithub className="w-8 h-8" />,
    colorClass: "group-hover:text-zinc-900 group-hover:bg-zinc-200 dark:group-hover:text-white dark:group-hover:bg-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600",
    cardHoverClass: "hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-100 dark:hover:shadow-zinc-800/50",
    btnHoverClass: "hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white dark:hover:border-zinc-600",
  },
  {
    name: "LinkedIn",
    description: "Mari bangun koneksi profesional di LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-wildan-ferdiansyah-b267a0274/",
    icon: <SlSocialLinkedin className="w-8 h-8" />,
    colorClass: "group-hover:text-blue-600 group-hover:bg-blue-50 dark:group-hover:bg-blue-600/10 group-hover:border-blue-200 dark:group-hover:border-blue-600/20",
    cardHoverClass: "hover:border-blue-300 dark:hover:border-blue-600/30 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-blue-500/5",
    btnHoverClass: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-blue-600/10 dark:hover:text-blue-400 dark:hover:border-blue-600/20",
  },
  {
    name: "Gmail",
    description: "Hubungi saya melalui gmail untuk pertanyaan lebih lanjut",
    href: "mailto:wildanferdiansyah640@gmail.com",
    icon: <SiGmail className="w-8 h-8" />,
    colorClass: "group-hover:text-red-500 group-hover:bg-red-50 dark:group-hover:bg-red-500/10 group-hover:border-red-200 dark:group-hover:border-red-500/20",
    cardHoverClass: "hover:border-red-300 dark:hover:border-red-500/30 hover:shadow-lg hover:shadow-red-100 dark:hover:shadow-red-500/5",
    btnHoverClass: "hover:bg-red-50 hover:text-red-500 hover:border-red-200 dark:hover:bg-red-500/10 dark:hover:text-red-400 dark:hover:border-red-500/20",
  },
];