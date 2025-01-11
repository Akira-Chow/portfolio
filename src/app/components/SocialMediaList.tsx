import Link from "next/link";
import type { SocialMediaListItem } from "../types";

type SocialMediaListProps = {
  items: SocialMediaListItem[];
};

export function SocialMediaListItem({ name, url, icon }: SocialMediaListItem) {
  return (
    <li className="mr-5 shrink-0 text-xs">
      <Link
        className="block hover:text-slate-200"
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${name} (opens in a new tab)`}
        title={name}
      >
        {icon}
        <span className="sr-only">{name}</span>
      </Link>
    </li>
  );
}

export function SocialMediaList({ items }: SocialMediaListProps) {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {items.map((i) => (
        <SocialMediaListItem key={i.name} {...i} />
      ))}
    </ul>
  );
}
