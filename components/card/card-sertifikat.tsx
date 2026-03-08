import { Sertifikat } from "@/utils/sertifikat";
import { Award, Building2, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import Link from "next/link";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export default function CardSertifikat({
  sertifikats,
}: {
  sertifikats: Sertifikat;
}) {
  return (
    <Link href={sertifikats.href}>
      <Card className="overflow-hidden group hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-300 h-full flex flex-col border-zinc-200 dark:border-zinc-800">
        <div className="relative h-52 w-full overflow-hidden border border-zinc-200  dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900">
          {sertifikats.image ? (
            <Image
              src={sertifikats.image}
              alt={sertifikats.title}
              loading="lazy"
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full text-zinc-400">
              <Award size={48} className="mb-2 opacity-50" />
              <span className="text-sm font-medium">Gambar tidak tersedia</span>
            </div>
          )}
        </div>

        <CardContent className="p-5 flex flex-col grow">
          <div className="flex justify-between items-start gap-3 mb-3">
            <CardTitle className="line-clamp-2 text-lg leading-snug font-bold">
              {sertifikats.title}
            </CardTitle>
          </div>

          {/* Metadata (Company & Date) */}
          <div className="space-y-2 mb-4 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium text-xs">{sertifikats.company}</span>
              <span className="text-xs">{sertifikats.date}</span>
            </div>
          </div>

          <div className="mt-auto space-y-3">
            <div className="flex items-center justify-between">
              <Badge
                variant="secondary"
                className="bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 font-medium"
              >
                {sertifikats.category}
              </Badge>
            </div>
            <div className="text-xs font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800/50 p-2 rounded-md">
              ID: {sertifikats.credential || "-"}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function CardSertifikatSkeleton() {
  return (
    <Card className="overflow-hidden h-full flex flex-col border-zinc-200 dark:border-zinc-800">
      <Skeleton className="h-52 w-full rounded-none" />

      <CardContent className="p-5 flex flex-col grow space-y-3">
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>

        <div className="flex justify-between items-center py-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-12" />
        </div>

        <div className="mt-auto space-y-3">
          <div className="flex items-center">
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>

          <Skeleton className="h-8 w-full rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}
