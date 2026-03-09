"use client";
import CardProject, { CardProjectSkeleton } from "@/components/card/card-project";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/utils/project";
import { useQuery } from "@tanstack/react-query";
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

export default function Proyek() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return projects;
    },
  });

  return (
    <section>
      <div>
        <motion.h1
          className="text-3xl font-semibold"
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
        >
          Proyek Saya
        </motion.h1>

        <motion.ul
          className="flex items-center gap-6 mt-3 text-gray-600 dark:text-gray-400"
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
        >
          <li>Daftar proyek yang saya bangun dengan beberapa teknologi modern</li>
        </motion.ul>
      </div>

      <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
        <Separator className="my-6" />
      </motion.div>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-y-7 sm:gap-6 gap-4">
        {isLoading ? (
          projects.map((_, i) => (
            <CardProjectSkeleton key={i} />
          ))
        ) : (
          data?.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <CardProject project={item} />
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}