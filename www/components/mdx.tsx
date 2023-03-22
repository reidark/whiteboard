import InvoicesSearch from "@/drafts/invoices-search";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Board, BoardSource } from "@/components/board";

const components = {
  Board,
  BoardSource,
  InvoicesSearch,
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-pink-600 dark:text-pink-400" {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-4 leading-7 [&:not(:first-child)]:mt-4" {...props} />
  ),
  pre: ({ ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="my-6 overflow-x-auto rounded-md p-4" {...props} />
  ),
};

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="leading-7">
      <Component components={{ ...components }} />
    </div>
  );
}
