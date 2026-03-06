"use client";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
import { Separator } from "../ui/separator";
import { Menus } from "@/utils/menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <header className="w-full max-w-65">
      <aside>
        <Image
          src="/myprofil.jpeg"
          width={100}
          height={100}
          alt="Profil Saya"
          className="rounded-full mx-auto object-cover w-25 h-25 shadow-md hover:scale-110 transition-all"
          priority
        />
        <div className="flex items-center gap-2 justify-center mt-3">
          <Link href="/" className="text-center font-semibold text-xl">
            Wildan Ferdiansyah
          </Link>
          <Tooltip>
            <TooltipTrigger>
              <Image
                src="/check.png"
                width={16}
                height={16}
                alt="Icon Verified"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Verified</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-center text-gray-500 text-sm ">@wildanferdiansyah</p>
        <div className="flex items-center gap-3 justify-center mt-6">
          <ThemeToggle />
        </div>
        <Separator className="my-3" />
        <nav className="flex flex-col space-y-2">
          {Menus?.map((menu) => {
            const Icon = menu.icon;
            const isActive = pathname == menu.href;
            return (
              <Link
                href={menu.href}
                key={menu.title}
    
                className={cn(
                  "group rounded-lg px-3 py-2 flex items-center gap-2 transition-colors text-base",
                  isActive
                    ? "bg-teal-400 dark:bg-teal-6   00 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-gray-400 hover:scale-105 transition-all ease-in-out hover:font-medium",
                )}
              >
                <Icon
                  size={20}
                  className={cn(
                    "transition-transform duration-300 ease-in-out inline-block",
                    isActive
                      ? "text-white"
                      : 
                        "text-zinc-700 group-hover:-rotate-45 dark:text-gray-400",
                  )}
                />
                <span>{menu.title}</span>
              </Link>
            );
          })}
        </nav>
        <Separator className="my-3" />
        <div>
          <p className="text-sm text-center text-gray-300">Hak Cipta &copy; {new Date().getFullYear()}</p>
          <p className="text-sm text-center mt-2 text-gray-300">Wildan Ferdiansyah. Seluruh hak cipta dilindungi undang-undang.</p>
        </div>
      </aside>
    </header>
  );
}
