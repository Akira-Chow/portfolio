import type { SocialMediaListItem } from "../types";

type SocialMediaListProps = {
  items: SocialMediaListItem[];
};

export function SocialMediaListItem({
  title,
  url,
  svgElement,
}: SocialMediaListItem) {
  return (
    <li className="mr-5 shrink-0 text-xs">
      <a
        className="block hover:text-slate-200"
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${title} (opens in a new tab)`}
        title={title}
      >
        {svgElement}
        <span className="sr-only">{title}</span>
      </a>
    </li>
  );
}

export function SocialMediaList({ items }: SocialMediaListProps) {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {items.map((i) => (
        <SocialMediaListItem key={i.title} {...i} />
      ))}
    </ul>
  );
}
