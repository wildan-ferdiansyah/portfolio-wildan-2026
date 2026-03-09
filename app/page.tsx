import { TechIconGroup } from "@/components/icons/keahlian";
import { Separator } from "@/components/ui/separator";
import { CodeXml } from "lucide-react";

export default function Beranda() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-semibold">
          Hai, saya Muhammad Wildan Ferdiansyah
        </h1>
        <ul className="flex md:flex-row flex-col md:items-center items-start md:gap-6 gap-0 mt-3 text-gray-600 dark:text-gray-400">
          <li>Berdomisili di Pekalongan, Indonesia</li>
          <li>Onsite</li>
        </ul>
        <h1 className="mt-8 leading-7 text-gray-800 dark:text-gray-300">
          Saya adalah Web Developer yang berspesialisasi dalam pengembangan web
          modern dengan fokus mendalam pada Frontend Development menggunakan
          Next.js dan TypeScript, serta pengembangan styling dengan Tailwind.
        </h1>
        <h1 className="mt-6 leading-7 text-gray-800 dark:text-gray-300">
          Passion saya terletak pada membangun antarmuka yang responsif dan
          sistem yang skalabel melalui arsitektur yang terukur serta efisien.
          Setiap proyek yang saya kerjakan merupakan perpaduan antara
          kepemimpinan proaktif dan keunggulan teknis, memastikan setiap solusi
          yang saya bangun memiliki fondasi logis yang kuat dan performa yang
          optimal untuk jangka panjang.
        </h1>
      </div>
      <Separator className="my-8" />
      <Keahlian />
    </section>
  );
}

export function Keahlian() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <CodeXml size={20} />
        <span className="text-xl font-semibold">Keahlian</span>
      </div>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        Keahlian saya dalam teknologi.
      </p>
      <div className="flex items-center gap-2  flex-wrap mt-8">
        <TechIconGroup
          icons={[
            "html",
            "css",
            "javascript",
            "typescript",
            "react",
            "nextjs",
            "tailwind",
            "nodejs",
            "postgresql",
            "bootstrap",
            "laravel",
            "php",
            "mysql",
            "github",
            "axios",
            "shadcn",
            "prisma",
            'zod',
            'tanstack'
          ]}
          size="md"
          gap={40}
        />
      </div>
    </div>
  );
}
