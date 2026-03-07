"use client";
import { useState } from "react";
import {
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiAstro,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGo,
  SiPhp,
  SiLaravel,
  SiKotlin,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiDocker,
  SiNpm,
  SiYarn,
  SiPrisma,
  SiRedux,
  SiFramer,
  SiVite,
  SiGithub,
  SiShadcnui,
  SiAxios,
  SiZod,
  SiReactquery,
} from "react-icons/si";
import type { IconType } from "react-icons";

type IconSize = "sm" | "md" | "lg";

interface IconEntry {
  icon: IconType;
  bg: string;
  label: string;
}

interface TechIconProps {
  name?: string;
  size?: IconSize;
  customIcon?: IconType;
  customBg?: string;
  customLabel?: string;
}

interface TechIconGroupProps {
  icons: (string | TechIconProps)[];
  size?: IconSize;
  gap?: number;
}

const ICON_REGISTRY: Record<string, IconEntry> = {
  html: { icon: SiHtml5, bg: "#E34F26", label: "HTML5" },
  css: { icon: SiCss, bg: "#1572B6", label: "CSS3" },
  bootstrap: { icon: SiBootstrap, bg: "#7952B3", label: "Bootstrap" },
  tailwind: { icon: SiTailwindcss, bg: "#06B6D4", label: "Tailwind CSS" },
  javascript: { icon: SiJavascript, bg: "#F7DF1E", label: "JavaScript" },
  typescript: { icon: SiTypescript, bg: "#3178C6", label: "TypeScript" },
  react: { icon: SiReact, bg: "#61DAFB", label: "React" },
  vue: { icon: SiVuedotjs, bg: "#4FC08D", label: "Vue.js" },
  astro: { icon: SiAstro, bg: "#FF5D01", label: "Astro" },
  nextjs: { icon: SiNextdotjs, bg: "#313035", label: "Next.js" },
  nodejs: { icon: SiNodedotjs, bg: "#339933", label: "Node.js" },
  express: { icon: SiExpress, bg: "#404040", label: "Express.js" },
  go: { icon: SiGo, bg: "#00ADD8", label: "Go" },
  php: { icon: SiPhp, bg: "#777BB4", label: "PHP" },
  laravel: { icon: SiLaravel, bg: "#FF2D20", label: "Laravel" },
  kotlin: { icon: SiKotlin, bg: "#7F52FF", label: "Kotlin" },
  postgresql: { icon: SiPostgresql, bg: "#336791", label: "PostgreSQL" },
  mysql: { icon: SiMysql, bg: "#4479A1", label: "MySQL" },
  firebase: { icon: SiFirebase, bg: "#FFCA28", label: "Firebase" },
  supabase: { icon: SiSupabase, bg: "#3ECF8E", label: "Supabase" },
  docker: { icon: SiDocker, bg: "#2496ED", label: "Docker" },
  npm: { icon: SiNpm, bg: "#CB3837", label: "npm" },
  yarn: { icon: SiYarn, bg: "#2C8EBB", label: "Yarn" },
  prisma: { icon: SiPrisma, bg: "#2D3748", label: "Prisma" },
  redux: { icon: SiRedux, bg: "#764ABC", label: "Redux" },
  framer: { icon: SiFramer, bg: "#0055FF", label: "Framer Motion" },
  vite: { icon: SiVite, bg: "#646CFF", label: "Vite" },
  github: { icon: SiGithub, bg: "#181717", label: "GitHub" },
  shadcn: { icon: SiShadcnui, bg: "#18181B", label: "Shadcn UI" },
  axios: { icon: SiAxios, bg: "#5A29E4", label: "Axios" },
  zod: { icon: SiZod, bg: "#3068B7 ", label: "Zod" },
  tanstack: { icon: SiReactquery, bg: "#FF4154 ", label: "Tanstack Query" },
};

const BRIGHT_BGS = ["#F7DF1E", "#FFCA28", "#61DAFB", "#4FC08D", "#06B6D4"];

const SIZE_MAP: Record<
  IconSize,
  { wrapper: number; icon: number; fontSize: number }
> = {
  sm: { wrapper: 44, icon: 18, fontSize: 11 },
  md: { wrapper: 52, icon: 22, fontSize: 12 },
  lg: { wrapper: 64, icon: 28, fontSize: 13 },
};

// ─── TechIcon ─────────────────────────────────────────────────────
export function TechIcon({
  name,
  size = "md",
  customIcon,
  customBg,
  customLabel,
}: TechIconProps) {
  const [hovered, setHovered] = useState(false);

  const entry = ICON_REGISTRY[name?.toLowerCase() ?? ""] ?? {};
  const IconComponent = customIcon ?? entry.icon;
  const bg = customBg ?? entry.bg ?? "#555";
  const label = customLabel ?? entry.label ?? name;
  const iconColor = BRIGHT_BGS.includes(bg) ? "#111" : "#fff";
  const { wrapper, icon: iconSize, fontSize } = SIZE_MAP[size];

  return (
    <div
      style={{
        position: "relative",
        width: wrapper,
        height: wrapper,
        perspective: "380px",
        display: "inline-block",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={label}
      role="img"
      title={label}
    >
      {/* Back layer */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "38%",
          background: bg,
          transformOrigin: "bottom right",
          transform: hovered
            ? "rotate(25deg) translate3d(-6px,-6px,6px)"
            : "rotate(15deg)",
          transition: "transform 0.3s cubic-bezier(0.83,0,0.17,1)",
        }}
      />

      {/* Front glass layer */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "38%",
          background: "hsla(0,0%,100%,0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.30)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "80% 50%",
          transform: hovered ? "translateZ(28px)" : "translateZ(0px)",
          transition: "transform 0.3s cubic-bezier(0.83,0,0.17,1)",
        }}
      >
        {IconComponent ? (
          <IconComponent size={iconSize} color={iconColor} />
        ) : (
          <span
            style={{
              fontSize: iconSize * 0.6,
              color: iconColor,
              fontWeight: 700,
            }}
          >
            {label?.slice(0, 2).toUpperCase()}
          </span>
        )}
      </span>

      {/* Tooltip */}
      <span
        className="text-zinc-900 dark:text-zinc-100"
        style={{
          position: "absolute",
          left: "50%",
          top: "100%",
          transform: hovered ? "translate(-50%, 6px)" : "translate(-50%, 0px)",
          opacity: hovered ? 1 : 0,
          whiteSpace: "nowrap",
          fontSize,
          fontWeight: 500,
          pointerEvents: "none",
          transition:
            "opacity 0.3s ease, transform 0.3s cubic-bezier(0.83,0,0.17,1)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── TechIconGroup ────────────────────────────────────────────────
export function TechIconGroup({
  icons = [],
  size = "md",
  gap = 12,
}: TechIconGroupProps) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", gap, alignItems: "center" }}
    >
      {icons.map((item, i) =>
        typeof item === "string" ? (
          <TechIcon key={i} name={item} size={size} />
        ) : (
          <TechIcon key={i} size={size} {...item} />
        ),
      )}
    </div>
  );
}

export { ICON_REGISTRY };
export type { TechIconProps, TechIconGroupProps, IconSize };
