import { Inter as FontSans } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeProvider from "@/components/theme-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";

import { siteLinks } from "@/config/site";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Whiteboard",
    template: "%s | Whiteboard",
  },
  description:
    "Drafts and concepts of components using great design, criativity and cool tech.",
  openGraph: {
    title: "Whiteboard",
    description:
      "Drafts and concepts of components using great design, criativity and cool tech.",
    url: siteLinks.url,
    siteName: "Whiteboard",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Whiteboard",
    description:
      "Drafts and concepts of components using great design, criativity and cool tech.",
    siteId: "1624419696714940416",
    creator: "@notreidark",
    creatorId: "1624419696714940416",
    images: ["/og.png"],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          "bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-50",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          {children}

          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
