"use client";
import { TechIconGroup } from "@/components/icons/keahlian";
import { Separator } from "@/components/ui/separator";
import { CodeXml } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

export default function Beranda() {
  return (
    <section>
      <div>
        <motion.h1
          className="text-3xl font-semibold"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Hai, saya Muhammad Wildan Ferdiansyah
        </motion.h1>

        <motion.ul
          className="flex md:flex-row flex-col md:items-center items-start md:gap-6 gap-0 mt-3 text-gray-600 dark:text-gray-400"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <li>Berdomisili di Pekalongan, Indonesia</li>
          <li>Onsite</li>
        </motion.ul>

        <motion.h1
          className="mt-8 leading-7 text-gray-800 dark:text-gray-300"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Saya adalah Web Developer yang berspesialisasi dalam pengembangan web
          modern dengan fokus mendalam pada Frontend Development menggunakan
          Next.js dan TypeScript, serta pengembangan styling dengan Tailwind.
        </motion.h1>

        <motion.h1
          className="mt-6 leading-7 text-gray-800 dark:text-gray-300"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Passion saya terletak pada membangun antarmuka yang responsif dan
          sistem yang skalabel melalui arsitektur yang terukur serta efisien.
          Setiap proyek yang saya kerjakan merupakan perpaduan antara
          kepemimpinan proaktif dan keunggulan teknis, memastikan setiap solusi
          yang saya bangun memiliki fondasi logis yang kuat dan performa yang
          optimal untuk jangka panjang.
        </motion.h1>
      </div>

      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <Separator className="my-8" />
      </motion.div>

      <Keahlian />
    </section>
  );
}

export function Keahlian() {
  return (
    <motion.div
      custom={5}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className="flex items-center gap-2">
        <CodeXml size={20} />
        <span className="text-xl font-semibold">Keahlian</span>
      </div>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        Keahlian saya dalam teknologi.
      </p>
      <div className="flex items-center gap-2 flex-wrap mt-8">
        <TechIconGroup
          icons={[
            "html", "css", "javascript", "typescript", "react",
            "nextjs", "tailwind", "nodejs", "postgresql", "bootstrap",
            "laravel", "php", "mysql", "github", "axios",
            "shadcn", "prisma", "zod", "tanstack",
          ]}
          size="md"
          gap={40}
        />
      </div>
    </motion.div>
  );
}