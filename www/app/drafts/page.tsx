import type { Metadata } from "next";
import { Draft, allDrafts } from "contentlayer/generated";

import CardDraft from "@/components/card-draft";

export const metadata: Metadata = {
  title: "Drafts",
  description: "Hand picked drafts of components that can be used everywhere.",
};

export default function Page() {
  const drafts = new Map<string, Draft[]>();

  allDrafts.forEach((draft) => {
    const { category } = draft;

    drafts.set(category, [...(drafts.get(category) ?? []), draft]);
  });

  return (
    <main className="container mx-auto py-12">
      <div className="relative mx-auto mb-24 max-w-5xl">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          Drafts
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-neutral-600 dark:text-neutral-400">
          Hand picked drafts of components that can be used everywhere.
        </p>
      </div>

      <div className="space-y-16">
        {Array.from(drafts).map(([category, drafts]) => (
          <div key={category}>
            <h2 className="mb-8 text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              {category}
            </h2>

            <div className="grid gap-6 lg:grid-cols-3">
              {drafts.map(({ title, description, slug }) => (
                <CardDraft
                  key={slug}
                  href={`/drafts/${slug}`}
                  title={title}
                  description={description}
                  category={category}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
