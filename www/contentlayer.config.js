import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";

import { rehypeComponent } from "./lib/rehype-component";

export const Draft = defineDocumentType(() => ({
  name: "Draft",
  contentType: "mdx",
  filePathPattern: `drafts/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    twitterPostUrl: {
      type: "string",
    },
    designer: {
      type: "string",
    },
    designerUrl: {
      type: "string",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (draft) =>
        draft._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Draft],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      [
        rehypePrettyCode,
        {
          theme: "dracula",
        },
      ],
    ],
  },
});
