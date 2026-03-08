"use client";
import CardSertifikat, {
  CardSertifikatSkeleton,
} from "@/components/card/card-sertifikat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { sertifikats } from "@/utils/sertifikat";
import { useQuery } from "@tanstack/react-query";
import { FilterX, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function Pencapaian() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const { data = [], isLoading } = useQuery({
    queryKey: ["pencapaians"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return sertifikats;
    },
  });

  useEffect(() => {
    setIsFiltering(true);
    const timeout = setTimeout(() => setIsFiltering(false), 1300);
    return () => clearTimeout(timeout);
  }, [searchQuery, selectedCompany, selectedCategory]);

  const companies = useMemo(() => {
    return Array.from(new Set(data.map((s) => s.company)));
  }, [data]);

  const categories = useMemo(() => {
    return Array.from(new Set(data.map((s) => s.category)));
  }, [data]);

  const filteredSertifikats = useMemo(() => {
    return data.filter((s) => {
      const matchesSearch = s.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCompany =
        selectedCompany === "all" || s.company === selectedCompany;
      const matchesCategory =
        selectedCategory === "all" || s.category === selectedCategory;

      return matchesSearch && matchesCompany && matchesCategory;
    });
  }, [data, searchQuery, selectedCompany, selectedCategory]);

  const showSkeleton = isLoading || isFiltering;

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCompany("all");
    setSelectedCategory("all");
  };

  return (
    <section>
      <div>
        <h1 className="text-3xl font-semibold">Pencapaian Saya</h1>
        <ul className="flex items-center gap-6 mt-3 text-gray-600 dark:text-gray-400">
          <li>
            Daftar sertifikat yang telah saya dapatkan selama karir profesional
            dan akademik
          </li>
        </ul>
      </div>
      <Separator className="my-6" />
      <div className="mb-5 space-y-3">
        <p className="dark:text-gray-200 text-zinc-500 text-sm">
          Menampilkan {filteredSertifikats.length} sertifikat
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Cari judul sertifikat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center gap-3">
            <Select value={selectedCompany} onValueChange={setSelectedCompany}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Pilih Instansi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Instansi</SelectItem>
                {companies.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {(searchQuery ||
              selectedCompany !== "all" ||
              selectedCategory !== "all") && (
              <Button
                variant="secondary"
                onClick={resetFilters}
                className="text-zinc-500 cursor-pointer"
              >
                <FilterX className="mr-2 h-4 w-4" /> Reset
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {showSkeleton ? (
          sertifikats.map((_, i) => (
            <CardSertifikatSkeleton key={`skeleton-${i}`} />
          ))
        ) : filteredSertifikats.length > 0 ? (
          filteredSertifikats.map((item) => (
            <CardSertifikat key={item.id} sertifikats={item} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed rounded-xl border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-500 font-medium">
              Sertifikat tidak ditemukan.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
