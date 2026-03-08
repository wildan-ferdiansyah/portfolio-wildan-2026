export type Sertifikat = {
  id: number | string;
  image: string;
  title: string;
  href: string;
  company: string;
  category: string;
  credential?: string;
  date: string;
}

export const sertifikats: Sertifikat[] = [
  {
    id: 1,
    image: "/sertif-1.png",
    title: "Belajar Dasar Pemrograman Web",
    href: "https://www.dicoding.com/certificates/6RPNY1MR9Z2M",
    company: "Dicoding Indonesia",
    category: "Submission",
    credential: "6RPNY1MR9Z2M",
    date: "2027",
  },
  {
    id: 2,
    image: "/sertif-2.png",
    title: "Belajar Dasar Pemrograman JavaScript",
    href: "hhttps://www.dicoding.com/certificates/1OP842D28ZQK",
    company: "Dicoding Indonesia",
    category: "Submission",
    credential: "10OP842D28ZQK",
    date: "2027",
  },
  {
    id: 3,
    image: "/sertif-3.png",
    title: "Workshop React JS",
    href: "",
    company: "Wahidev Academy",
    category: "Workshop",
    credential: "Tidak Ada Credential",
    date: "2024",
  },
  {
    id: 4,
    image: "/sertif-4.png",
    title: "Belajar JavaScript Asynchronous",
    href: "https://www.codepolitan.com/c/IHCJ3SE/",
    company: "Codepolitan",
    category: "Course",
    credential: "IHCJ3SE",
    date: "2028",
  },
  {
    id: 5,
    image: "/sertif-5.png",
    title: "Belajar GIT Dasar",
    href: "https://www.codepolitan.com/c/VEFGZ8W/",
    company: "Codepolitan",
    category: "Course",
    credential: "VEFGZ8W",
    date: "2028",
  },
  {
    id: 6,
    image: "/sertif-6.png",
    title: "Belajar JavaScript DOM",
    href: "https://www.codepolitan.com/c/GZXKPZY/",
    company: "Codepolitan",
    category: "Course",
    credential: "GZXKPZY",
    date: "2028",
  },
  {
    id: 7,
    image: "/sertif-7.png",
    title: "Belajar AJAX dan Web API",
    href: "https://www.codepolitan.com/c/DRSFWVG/",
    company: "Codepolitan",
    category: "Course",
    credential: "DRSFWVG",
    date: "2028",
  },
  {
    id: 8,
    image: "/sertif-8.png",
    title: "React Hooks Crash Course",
    href: "",
    company: "GreatStack",
    category: "Course",
    credential: "Tidak Ada Credential",
    date: "2025",
  },
]