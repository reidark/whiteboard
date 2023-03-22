import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export default function Navbar() {
  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Drafts",
      path: "/drafts",
    },
    {
      label: "Concepts",
    },
    {
      label: "Blog",
    },
  ];

  let pathname = usePathname() || "/";
  if (pathname.includes("/drafts/")) {
    pathname = "/drafts";
  }

  return (
    <div className="border-b border-neutral-100 dark:border-neutral-800">
      <div className="container">
        <nav className="gap-x-7 py-2 sm:flex sm:py-0">
          {navItems.map((navItem, index) => {
            const { label, path } = navItem;
            const isActive = pathname === path;

            if (path) {
              return (
                <Link
                  key={index}
                  href={path}
                  className={cn(
                    "relative block py-2 text-sm font-medium text-neutral-800 transition-colors hover:text-black focus-visible:text-black dark:text-neutral-200 dark:hover:text-white dark:focus-visible:text-white sm:py-5",
                    {
                      "before:absolute before:-left-3 before:bottom-4 sm:before:left-0 sm:before:bottom-0 sm:before:h-1 sm:before:w-full before:bg-neutral-800 dark:before:bg-neutral-100 before:w-1 before:h-1 before:rounded-full sm:before:rounded-none":
                        isActive,
                    }
                  )}
                >
                  {label}
                </Link>
              );
            }

            return (
              <span
                key={index}
                className="block cursor-not-allowed py-2 text-sm font-medium text-neutral-500 transition-colors sm:py-5"
                aria-disabled="true"
              >
                {label}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
