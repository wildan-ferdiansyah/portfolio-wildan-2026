"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "rounded-full w-10 h-10 transition-all duration-300 cursor-pointer",
        "bg-zinc-100 dark:bg-zinc-800", 
        "hover:bg-teal-100 dark:hover:bg-zinc-900", 
        "hover:scale-110 shadow-sm"
      )}
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-zinc-700" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}