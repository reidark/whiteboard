import { cache } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Draft, allDrafts } from "contentlayer/generated";
import { ArrowLeft, MessageCircle, Pencil } from "lucide-react";

import "@/styles/mdx.css";
import { siteLinks } from "@/config/site";
import Mdx from "@/components/mdx";

interface PageParams {
  params: {
    slug: string;
  };
}

interface DraftMetaProps {
  label: string;
  value: string;
  href?: string;
}

const getDraft = cache((slug: string): Draft | null => {
  const draft = allDrafts.find((draft) => draft.slug === slug);

  return draft ?? null;
});

export async function generateStaticParams(): Promise<PageParams["params"][]> {
  return allDrafts.map((draft) => ({
    slug: draft.slug,
  }));
}

export async function generateMetadata({ params }: PageParams) {
  const draft = getDraft(params.slug);

  const { url } = siteLinks;
  const { title, description, slug, date: publishedTime } = draft ?? {};

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${url}/drafts/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function DraftMeta({ label, value, href }: DraftMetaProps) {
  return (
    <div className="rounded-md bg-neutral-100 p-3 dark:bg-neutral-800">
      <h2 className="mb-2 text-xs text-neutral-700 dark:text-neutral-300">
        {label}
      </h2>

      {href ? (
        <a
          className="font-bold outline-none hover:text-neutral-600 focus-visible:text-neutral-600 dark:hover:text-neutral-300 dark:focus-visible:text-neutral-300"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        <span className="font-bold">{value}</span>
      )}
    </div>
  );
}

export default async function Page({ params }: PageParams) {
  const draft = getDraft(params.slug);

  if (!draft) {
    notFound();
  }

  const {
    title,
    date,
    body,
    twitterPostUrl,
    designer,
    designerUrl,
    _raw: { sourceFilePath },
  } = draft;
  const { repositoryContent, twitter } = siteLinks;
  const formattedDate = new Intl.DateTimeFormat("en-US").format(new Date(date));
  const githubUrl = `${repositoryContent}/${sourceFilePath}`;

  return (
    <main className="pb-12">
      <div className="container">
        <Link
          className="flex items-center gap-x-2 text-sm font-semibold outline-none hover:text-neutral-600 focus-visible:text-neutral-600 dark:hover:text-neutral-300 dark:focus-visible:text-neutral-300"
          href="/drafts"
        >
          <ArrowLeft size={20} />
          Drafts
        </Link>

        <h1 className="mt-8 mb-4 text-xl font-bold">{title}</h1>

        <div className="mb-8 grid gap-3 sm:grid-cols-[repeat(2,_minmax(150px,_auto))_repeat(4,_minmax(0,_1fr))]">
          {designer && (
            <div>
              <DraftMeta
                label="Designed by"
                value={designer}
                href={designerUrl}
              />
            </div>
          )}

          <div>
            <DraftMeta label="Created in" value={formattedDate} />
          </div>

          <div className="border-neutral-100 dark:border-neutral-700 sm:col-span-4 sm:border-l sm:pl-3">
            <div className="flex h-full gap-3">
              <a
                className="flex h-full w-16 items-center justify-center rounded-md bg-neutral-100 p-3 outline-none transition-colors hover:bg-neutral-200 focus-visible:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus-visible:bg-neutral-700"
                href={twitterPostUrl ?? twitter}
                target="_blank"
                rel="noopener noreferrer"
                title="Write a comment about this draft"
              >
                <MessageCircle />
              </a>

              <a
                className="flex h-full w-16 items-center justify-center rounded-md bg-neutral-100 p-3 outline-none transition-colors hover:bg-neutral-200 focus-visible:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus-visible:bg-neutral-700"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Edit draft"
              >
                <Pencil />
              </a>
            </div>
          </div>
        </div>

        <Mdx code={body.code} />
      </div>
    </main>
  );
}
