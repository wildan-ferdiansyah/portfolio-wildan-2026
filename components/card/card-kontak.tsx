import { Kontak } from "@/utils/kontak";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CardKontak({ kontak }: { kontak: Kontak }) {
  return (
    <Card className={`group w-full lg:max-w-xl border-zinc-200  dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900 py-10 shadow-none transition-colors duration-300 ${kontak.cardHoverClass}`}>
      <CardHeader className="px-8">
        <CardTitle className="mb-1 font-semibold text-3xl tracking-tighter">
          {kontak.name}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {kontak.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2 flex items-center justify-between flex-row gap-2 px-8">
        <div className="flex items-center gap-2">
          <Button asChild className={kontak.btnHoverClass} >
            <Link href={kontak.href}>
              Kunjungi {kontak.name}
            </Link>
          </Button>
        </div>
        <div className={`transition-colors duration-300 ${kontak.colorClass}`}>
          {kontak.icon}
        </div>
      </CardContent>
    </Card>
  );
}
