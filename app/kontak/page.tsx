import CardKontak from "@/components/card/card-kontak";
import { Separator } from "@/components/ui/separator";
import { kontaks } from "@/utils/kontak";

export default function Kontak() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-semibold">Kontak Saya</h1>
        <ul className="flex items-center gap-6 mt-3 text-gray-600 dark:text-gray-400">
          <li>
            Daftar kontak yang saya miliki
          </li>
        </ul>
      </div>
      <Separator className="my-6" />
      <div className="grid grid-cols-2 gap-6">
        {kontaks && kontaks?.map((kontak) => (
          <CardKontak key={kontak.name} kontak={kontak} />
        ))}
      </div>
    </section>
  )
}