"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { SocialMediaList } from "./SocialMediaList";
import { SocialMediaListItem } from "../types";

type HeaderProps = {
  data: {
    title: string;
    subtitle: string;
    message: string;
    socials: SocialMediaListItem[];
    resume: string;
  };
  nav: string[];
};

export function Header({ data, nav }: HeaderProps) {
  const { title, subtitle, message, socials } = data;

  const scrollToSection = useCallback((sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    targetElement.scrollIntoView({
      block: "start",
    });
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
      e.preventDefault();
      scrollToSection(item.toLowerCase());
    },
    [scrollToSection]
  );

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">{title}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {subtitle}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{message}</p>
        <div className="mt-12">
          <Link
            className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
            href={data.resume}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View CV/Résumé (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span className="inline-block">
                CV/Résumé
                <ArrowTopRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </span>
          </Link>
        </div>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {nav.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`group flex items-center py-3`}
                  aria-label={`Jump to ${item} section`}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <SocialMediaList items={socials} />
    </header>
  );
}
