"use client";

import Link from "next/link";
import { LayoutDashboard, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import Navbar from "@/components/navbar";

export default function Header() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)")?.matches;

      const newTheme = isDark ? "light" : "dark";

      setTheme(newTheme);
    } else {
      const newTheme = theme === "dark" ? "light" : "dark";

      setTheme(newTheme);
    }
  }

  return (
    <header className="mb-8">
      <div className="border-b border-neutral-100 py-5 dark:border-neutral-800">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1>
              <Link href="/" className="group flex items-center gap-2">
                <LayoutDashboard className="transition-transform group-hover:rotate-90 group-focus-visible:rotate-90" />

                <span className="font-bold">Whiteboard</span>
              </Link>
            </h1>

            <div>
              <button
                className="rounded-md bg-neutral-100 p-2 transition-colors hover:bg-neutral-200 focus-visible:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus-visible:bg-neutral-700"
                type="button"
                aria-label="Change theme"
                onClick={() => toggleTheme()}
              >
                <SunMoon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </header>
  );
}
