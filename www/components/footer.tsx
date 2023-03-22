interface FooterAnchorProps {
  children: React.ReactNode;
  href: string;
}

function FooterAnchor({ children, href }: FooterAnchorProps) {
  return (
    <a
      className="text-neutral-800 outline-none transition-colors hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-50 dark:focus-visible:text-neutral-50"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <div className="container">
      <div className="pb-8 pt-4 text-neutral-600 dark:text-neutral-400">
        Built by{" "}
        <FooterAnchor href="https://twitter.com/notreidark">
          reidark
        </FooterAnchor>
        , hosted on{" "}
        <FooterAnchor href="https://vercel.com/">Vercel</FooterAnchor> and
        available on{" "}
        <FooterAnchor href="https://github.com/reidark/whiteboard">
          Github
        </FooterAnchor>
        .
      </div>
    </div>
  );
}
