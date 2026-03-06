import { Code, Home, LucideIcon, Share2, Star, User } from "lucide-react";

type Menu = {
  title: string;
  href: string;
  icon: LucideIcon;
};
export const Menus: Menu[] = [
  {
    title: "Beranda",
    href: "/",
    icon: Home,
  },
  {
    title: "Tentang",
    href: "/tentang",
    icon: User,
  },
  {
    title: "Pencapaian",
    href: "/pencapaian",
    icon: Star,
  },
  {
    title: "Proyek",
    href: "/proyek",
    icon: Code,
  },
  {
    title: "Kontak",
    href: "/kontak",
    icon: Share2,
  },
];
