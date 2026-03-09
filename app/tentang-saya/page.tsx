"use client";
import KarierList from "@/components/ui/karier-list";
import PendidikanList from "@/components/ui/pendidikan-list";
import { Separator } from "@/components/ui/separator";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function TentangSaya() {
  return (
    <section>
      <div>
        <motion.h1
          className="text-3xl font-semibold"
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
        >
          Tentang Saya
        </motion.h1>

        <motion.ul
          className="flex items-center gap-6 mt-3 text-gray-600 dark:text-gray-400"
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
        >
          <li>Deskripsi tentang saya</li>
        </motion.ul>

        <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
          <Separator className="my-6" />
        </motion.div>

        <motion.h1
          className="mt-8 leading-7 text-gray-800 dark:text-gray-300"
          custom={3} initial="hidden" animate="visible" variants={fadeUp}
        >
          Saya Muhammad Wildan Ferdiansyah. Saya merupakan lulusan Institut
          Widya Pratama jurusan Sistem Informasi dengan IPK 3.80. Latar belakang
          akademis ini telah membentuk fondasi yang kuat dalam pemahaman
          algoritma, logika pemrograman, dan rekayasa perangkat lunak, yang kini
          saya terapkan untuk menyelesaikan tantangan teknis di dunia nyata.
        </motion.h1>

        <motion.h1
          className="mt-6 leading-7 text-gray-800 dark:text-gray-300"
          custom={4} initial="hidden" animate="visible" variants={fadeUp}
        >
          Secara profesional, saya adalah Web Developer yang mendalami
          pengembangan web modern dengan fokus mendalam pada Frontend
          Development menggunakan Next.js & TypeScript. Passion saya terletak
          pada membangun antarmuka yang responsif, interaktif, dan sistem yang
          skalabel melalui arsitektur kode yang terukur serta efisien.
        </motion.h1>

        <motion.h1
          className="mt-6 leading-7 text-gray-800 dark:text-gray-300"
          custom={5} initial="hidden" animate="visible" variants={fadeUp}
        >
          Setiap proyek yang saya kerjakan merupakan perpaduan antara
          kepemimpinan proaktif dan keunggulan teknis. Saya berkomitmen
          memastikan solusi yang saya bangun memiliki fondasi logis yang kuat,
          kode yang bersih (clean code), dan mudah dipelihara (maintainable),
          sehingga mampu memberikan dampak nyata dan skalabilitas jangka panjang
          bagi bisnis maupun pengguna akhir.
        </motion.h1>
      </div>

      <motion.div custom={6} initial="hidden" animate="visible" variants={fadeUp}>
        <Separator className="my-8" />
      </motion.div>

      <motion.div custom={7} initial="hidden" animate="visible" variants={fadeUp}>
        <div className="flex items-center gap-2">
          <BriefcaseBusiness size={20} />
          <span className="text-xl font-semibold">Karier</span>
        </div>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Karier profesional saya.
        </p>
        <KarierList />
      </motion.div>

      <motion.div custom={8} initial="hidden" animate="visible" variants={fadeUp}>
        <Separator className="my-8" />
        <div className="flex items-center gap-2">
          <GraduationCap size={20} />
          <span className="text-xl font-semibold">Pendidikan</span>
        </div>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Perjalanan pendidikan saya.
        </p>
        <PendidikanList />
      </motion.div>
    </section>
  );
}