import { allDrafts } from "contentlayer/generated";

import CardDraft from "@/components/card-draft";

export default function Home() {
  const drafts = allDrafts.slice(-3).reverse();

  return (
    <main className="container mx-auto py-12">
      <div className="relative mx-auto mb-24 max-w-5xl">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          New concepts based on things we all want to create one day.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-neutral-600 dark:text-neutral-400">
          Drafts and concepts of components using great{" "}
          <span className="text-pink-600 dark:text-pink-500">design</span>,{" "}
          <span className="text-pink-600 dark:text-pink-500">criativity</span>{" "}
          and <span className="italic">cool</span>{" "}
          <span className="text-pink-600 dark:text-pink-500">tech</span>.
        </p>
      </div>

      <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
        Latest drafts
      </h2>

      <div className="grid gap-6 lg:grid-cols-3">
        {drafts.map(({ title, description, category, slug }) => (
          <CardDraft
            key={slug}
            href={`/drafts/${slug}`}
            title={title}
            description={description}
            category={category}
          />
        ))}
      </div>
    </main>
  );
}
