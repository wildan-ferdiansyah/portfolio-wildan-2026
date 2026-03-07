import type { PendidikanData } from "@/components/ui/card-pendidikan";

const pendidikan: PendidikanData[] = [
  {
    logo: "/institut-logo.png",
    logoAlt: "Institut Widya Pratama Logo",
    title: "Institut Widya Pratama",
    graduate: "S1 Sarjana",
    major: "Sistem Informasi, (S.Kom)",
    ipk: "IPK: 3.80/4.00",
    period: "2022 - 2026",
    location: "Pekalongan, Indonesia",
  },
  {
    logo: "/smk-logo.png",
    logoAlt: "SMK Muhammadiyah Logo",
    title: "SMK Muhammadiyah Pekalongan",
    graduate: "Sekolah Menengah Kejuruan",
    major: "Light Vehicle Engineering",
    period: "2019 - 2022",
    location: "Pekalongan, Indonesia",
  },
];

export { pendidikan };
