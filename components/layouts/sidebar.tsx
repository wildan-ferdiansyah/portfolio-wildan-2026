"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, CheckCircle2 } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Menus } from "@/utils/menu";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div 
        className={cn(
          "lg:hidden fixed top-0 left-0 w-full h-16 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b z-50 px-6 flex items-center justify-between transition-transform duration-300 ease-in-out",
          isOpen ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="flex items-center gap-3">
          <Image 
            src="/myprofil.jpeg" 
            width={32} 
            height={32} 
            alt="Profil" 
            className="rounded-full object-cover w-10 h-10 border border-zinc-200" 
          />
          <span className="font-bold tracking-tight text-sm">Wildan Ferdiansyah</span>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu size={24} />
        </Button>
      </div>

      <header 
        className={cn(
          "fixed inset-y-0 left-0 z-60 w-72 bg-white dark:bg-zinc-950 lg:bg-transparent lg:dark:bg-transparent border-r lg:border-none transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-fit lg:max-w-65 lg:sticky lg:top-14",
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        )}
      >
        <aside className="h-full flex flex-col p-8 lg:p-0 overflow-y-auto lg:overflow-visible relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden absolute top-4 right-4 text-zinc-500" 
            onClick={toggleSidebar}
          >
            <X size={24} />
          </Button>

          <div className="flex flex-col items-center mt-4 lg:mt-0">
            <Image
              src="/myprofil.jpeg"
              width={100}
              height={100}
              alt="Wildan Ferdiansyah"
              className="rounded-full object-cover w-24 h-24 shadow-lg hover:scale-110 transition-transform duration-300"
              priority
            />
            <div className="flex items-center gap-1.5 mt-4">
              <Link href="/" className="font-bold text-xl tracking-tight hover:text-teal-500 transition-colors">
                Wildan Ferdiansyah
              </Link>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CheckCircle2 size={16} className="text-blue-500 fill-blue-500/10" />
                </TooltipTrigger>
                <TooltipContent><p>Verified Developer</p></TooltipContent>
              </Tooltip>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-mono mt-1">@wildanferdiansyah</p>
          </div>

          <div className="flex items-center justify-center mt-6">
            <ThemeToggle />
          </div>

          <Separator className="my-6" />

          <nav className="flex flex-col space-y-1.5">
            {Menus?.map((menu) => {
              const Icon = menu.icon;
              const isActive = pathname === menu.href;
              return (
                <Link
                  href={menu.href}
                  key={menu.title}
                  onClick={() => setIsOpen(false)} 
                  className={cn(
                    "group rounded-lg px-4 py-2.5 flex items-center justify-between gap-3 transition-all duration-200 text-sm font-medium",
                    isActive
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/20"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={18}
                      className={cn(
                        "transition-transform duration-300",
                        isActive ? "text-white" : "group-hover:-rotate-12"
                      )}
                    />
                    <span>{menu.title}</span>
                  </div>
                  {isActive && <ArrowRight size={16} className="animate-pulse" />}
                </Link>
              );
            })}
          </nav>

          <Separator className="my-6" />

          <div className="mt-auto lg:mt-6 pb-6 lg:pb-0">
            <p className="text-[10px] text-center text-zinc-400 uppercase tracking-widest leading-loose">
              &copy; {new Date().getFullYear()} Wildan Ferdiansyah <br />
              All Rights Reserved
            </p>
          </div>
        </aside>
      </header>

      <div 
        className={cn(
          "fixed inset-0 bg-zinc-950/60 backdrop-blur-sm z-55 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleSidebar}
      />
    </>
  );
}