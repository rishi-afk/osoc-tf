import {
  Manrope as FontSans,
  Syne as FontMono,
  DM_Sans as FontSans2,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const fontSans2 = FontSans2({
  subsets: ["latin"],
  variable: "--font-sanx",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["800", "600", "700", "500", "400"],
  display: "swap",
});
