"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";

interface CardDraftProps {
  href: string;
  title: string;
  description: string;
  category?: string;
}

export default function CardDraft({
  href,
  title,
  description,
  category,
}: CardDraftProps) {
  return (
    <Link
      className="block rounded-xl bg-neutral-400/10 shadow-md outline-none backdrop-blur-lg transition-colors hover:bg-neutral-400/20 focus-visible:bg-neutral-400/20 dark:bg-neutral-800/10 dark:hover:bg-neutral-800/50 dark:focus-visible:bg-neutral-800/50"
      href={href}
    >
      <div className="p-4">
        <h3 className="mb-4 font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-lg">
          {title}
        </h3>

        <p className="line-clamp-2">{description}</p>
      </div>

      {category && (
        <div className="flex items-center gap-2 border-t border-neutral-200 py-2 px-4 text-sm dark:border-neutral-800">
          <div className="relative rounded-md bg-neutral-100 p-2 shadow-reflective shadow-black/40 after:absolute after:inset-px after:rounded-md after:shadow-highlight after:shadow-white/90 dark:bg-neutral-900 dark:shadow-black dark:after:shadow-white/10">
            <Bookmark size={12} />
          </div>

          <div>{category}</div>
        </div>
      )}
    </Link>
  );
}
