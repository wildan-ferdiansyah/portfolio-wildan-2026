"use client";
import CardKontak from "@/components/card/card-kontak";
import { Separator } from "@/components/ui/separator";
import { kontaks } from "@/utils/kontak";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Kontak() {
  return (
    <section>
      <div>
        <motion.h1
          className="text-3xl font-semibold"
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
        >
          Kontak Saya
        </motion.h1>

        <motion.ul
          className="flex items-center gap-6 mt-3 text-gray-600 dark:text-gray-400"
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
        >
          <li>Daftar kontak yang saya miliki</li>
        </motion.ul>
      </div>

      <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
        <Separator className="my-6" />
      </motion.div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {kontaks?.map((kontak, i) => (
          <motion.div
            key={kontak.name}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <CardKontak kontak={kontak} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}