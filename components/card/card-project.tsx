import { Project } from "@/utils/project";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function CardProject({project} : {project: Project}) {
return (
    <Link href={project.href} target="_blank">
      <Card className="overflow-hidden max-w-sm hover:scale-105  transition-all duration-300 h-full flex flex-col border-zinc-200 dark:border-zinc-800 group-hover:shadow-xl">
        <div className="relative h-52 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <CardContent className="p-6 flex flex-col grow">
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-tight group-hover:text-teal-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mt-auto pt-6 flex flex-wrap gap-3">
            {project.tech.map((t, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="transition-all cursor-pointer">
                    {t.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-zinc-900 text-white border-zinc-800">
                  <p className="text-xs font-medium">{t.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}


export function CardProjectSkeleton() {
  return (
    <Card className="overflow-hidden max-w-sm h-full flex flex-col border-zinc-200 dark:border-zinc-800">
      <Skeleton className="h-52 w-full rounded-none" />

      <CardContent className="p-6 flex flex-col grow">
        <div className="space-y-3 mb-6">
          <Skeleton className="h-7 w-3/4" />
          
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>

        <div className="mt-auto pt-6 flex items-center gap-4">
          <Skeleton className="h-6 w-6 rounded-md" />
          <Skeleton className="h-6 w-6 rounded-md" />
          <Skeleton className="h-6 w-6 rounded-md" />
          <Skeleton className="h-6 w-6 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}