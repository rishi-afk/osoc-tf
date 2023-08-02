import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col dark:bg-[#212121] bg-[#EFEFEF] before:pointer-events-none before:absolute before:inset-0 before:block before:h-full before:w-full before:bg-[url('/background-pattern.svg')] before:bg-cover before:bg-no-repeat dark:before:opacity-10 before:opacity-20 before:grayscale font-sans antialiased">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            {/* <div className="w-full text-center py-8 z-10">
              <p>Made with ❤️ in Next.JS</p>
            </div> */}
          </div>
          <TailwindIndicator />
          <ThemeToggle />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
