import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { TechnologyStackItem } from "./TechnologyStackItem";
import type { ExperienceListItem } from "../types";

type ExperienceListItemProps = {
  data: ExperienceListItem;
};

export function ExperienceListItem({ data }: ExperienceListItemProps) {
  const {
    companyName,
    companyUrl,
    jobSummary,
    jobTenure,
    jobTitles,
    technologies,
  } = data;

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label={jobTenure}
        >
          {jobTenure}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                href={companyUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${jobTitles[0]} at ${companyName} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {jobTitles[0]} ·{" "}
                  <span className="inline-block">
                    {companyName}{" "}
                    <ArrowTopRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                  </span>
                </span>
              </a>
            </div>
            {jobTitles?.length > 1 ? (
              <div>
                {jobTitles.slice(1).map((i) => (
                  <div key={i} className="text-slate-500" aria-hidden="true">
                    {i}
                  </div>
                ))}
              </div>
            ) : null}
          </h3>
          <p className="mt-2 text-sm leading-normal">{jobSummary}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((i) => (
              <TechnologyStackItem key={i} text={i} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
