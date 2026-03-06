import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/ui/container";
import Sidebar from "@/components/layouts/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wildan Ferdiansyah | Portfolio",
  description: "Personal Portfolio of Wildan Ferdiansyah 2026 Modern",
  keywords: [
    "portfolio",
    "website",
    "personal",
    "next js",
    "modern",
    "dashboard style portfolio",
    "2026",
    "upgrade portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Container>
              <Sidebar />
              <div className="w-full">{children}</div>
            </Container>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
