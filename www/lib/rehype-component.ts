import fs from "fs";
import path from "path";

export function rehypeComponent() {
  return async (tree: any) => {
    for (const x in tree.children) {
      if (tree.children[x]?.name === "Board") {
        for (const y in tree.children[x]?.children) {
          for (const z in tree.children[x]?.children[y]?.attributes) {
            if (tree.children[x]?.children[y]?.attributes[z]?.name === "src") {
              const srcValue = tree.children[x]?.children[y]?.attributes[z]?.value;
              const source = getComponentSourceFileContent(srcValue);

              tree.children[x]?.children[y]?.children?.push({
                type: "element",
                tagName: "pre",
                children: [
                  {
                    type: "element",
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"],
                    },
                    children: [
                      {
                        type: "text",
                        value: source,
                      },
                    ],
                  },
                ],
              });
            }
          }
        }
      }
    }
  };
}

function getComponentSourceFileContent(src: string) {
  const filePath = path.join(process.cwd(), src);
  const source = fs.readFileSync(filePath, "utf8");

  return source;
}
