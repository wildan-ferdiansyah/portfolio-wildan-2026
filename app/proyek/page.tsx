"use client";
import CardProject, { CardProjectSkeleton } from "@/components/card/card-project";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/utils/project";
import { useQuery } from "@tanstack/react-query";

export default function Proyek() {
  const {data, isLoading} = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return projects;
    }
  });
  return (
    <section>
      <div>
        <h1 className="text-3xl font-semibold">Proyek Saya</h1>
        <ul className="flex items-center gap-6 mt-3 text-gray-600 dark:text-gray-400">
          <li>
            Daftar proyek yang saya bangun dengan beberapa teknologi modern
          </li>
        </ul>
      </div>
      <Separator className="my-6" />
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-0 sm:gap-6 gap-4">
        {isLoading ? (
          projects.map((_, i) => (
            <CardProjectSkeleton key={i} />
          ))
        ) : (
          data && data?.map((item) => (
            <CardProject key={item.id} project={item} />
          ))
        )}
      </div>
    </section>
  );
}
