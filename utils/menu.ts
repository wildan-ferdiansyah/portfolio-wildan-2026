import {  CodeXml, Contact, Home, LucideIcon, Share2, Star, User } from "lucide-react";

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
    title: "Tentang Saya",
    href: "/tentang-saya",
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
    icon: CodeXml,
  },
  {
    title: "Kontak",
    href: "/kontak",
    icon: Contact,
  },
];
