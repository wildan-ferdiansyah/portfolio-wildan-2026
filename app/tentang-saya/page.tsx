import KarierList from "@/components/ui/karier-list";
import PendidikanList from "@/components/ui/pendidikan-list";
import { Separator } from "@/components/ui/separator";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function TentangSaya() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-semibold">Tentang Saya</h1>
        <ul className="flex items-center gap-6 mt-3 text-gray-600 dark:text-gray-400">
          <li>Deskripsi tentang saya</li>
        </ul>
        <h1 className="mt-8 leading-7 text-gray-800 dark:text-gray-300">
          Saya Muhammad Wildan Ferdiansyah. Saya merupakan lulusan Institut
          Widya Pratama jurusan Sistem Informasi dengan IPK 3.80. Latar belakang
          akademis ini telah membentuk fondasi yang kuat dalam pemahaman
          algoritma, logika pemrograman, dan rekayasa perangkat lunak, yang kini
          saya terapkan untuk menyelesaikan tantangan teknis di dunia nyata.
        </h1>
        <h1 className="mt-6 leading-7 text-gray-800 dark:text-gray-300">
          Secara profesional, saya adalah Web Developer yang mendalami
          pengembangan web modern dengan fokus mendalam pada Frontend
          Development menggunakan Next.js & TypeScript. Passion saya terletak
          pada membangun antarmuka yang responsif, interaktif, dan sistem yang
          skalabel melalui arsitektur kode yang terukur serta efisien.
        </h1>
        <h1 className="mt-6 leading-7 text-gray-800 dark:text-gray-300">
          Setiap proyek yang saya kerjakan merupakan perpaduan antara
          kepemimpinan proaktif dan keunggulan teknis. Saya berkomitmen
          memastikan solusi yang saya bangun memiliki fondasi logis yang kuat,
          kode yang bersih (clean code), dan mudah dipelihara (maintainable),
          sehingga mampu memberikan dampak nyata dan skalabilitas jangka panjang
          bagi bisnis maupun pengguna akhir.
        </h1>
      </div>
      <Separator className="my-8" />
      <div>
        <div className="flex items-center gap-2">
          <BriefcaseBusiness size={20} />
          <span className="text-xl font-semibold">Karier</span>
        </div>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Karier profesional saya.
        </p>
        <KarierList />
        <Separator className="my-8" />
        <div className="flex items-center gap-2">
          <GraduationCap size={20} />
          <span className="text-xl font-semibold">Pendidikan</span>
        </div>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Perjalanan pendidikan saya.
        </p>
        <PendidikanList />
      </div>
    </section>
  );
}
