import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { TabContextProvider } from "@/contexts/tab-context";
import React from "react";
import "./globals.css";

import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  openGraph: {
    type: "website",
    url: "https://bernardorocha.me",
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    images: [
      {
        url: "https://github.com/bernardovieirarocha/cv/blob/main/src/images/logos/banner.jpeg?raw=true",
        width: 400,
        height: 400,
        alt: "Banner do Currículo de Bernardo Vieira Rocha",
      },
    ],
  },
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <TabContextProvider>{children}</TabContextProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
