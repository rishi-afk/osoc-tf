import {
  Manrope as FontSans,
  Syne as FontMono,
  DM_Sans as FontSans2,
} from "next/font/google";

import localFont from "next/font/local";

export const samarkan = localFont({
  src: [
    {
      path: "../public/font.ttf",
      weight: "400",
    },
  ],
  variable: "--font-samarkan",
  display: "swap",
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const fontSans2 = FontSans2({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["400", "500", "700"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["800", "600", "700", "500", "400"],
});
