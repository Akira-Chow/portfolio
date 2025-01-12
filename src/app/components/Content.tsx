import Link from "next/link";
import type { ExperienceListItem as ExperienceListItemType } from "../types";
import { ContentSection } from "./ContentSection";
import { ExperienceListItem } from "./ExperienceListItem";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const getSentenceParts = (sentence: string) => {
  const indexOfLastSpace = sentence.lastIndexOf(" ");
  const sentenceWithoutLastWord = sentence.slice(0, indexOfLastSpace);
  const lastWord = sentence.slice(indexOfLastSpace + 1);

  return { sentenceWithoutLastWord, lastWord };
};

type ContentProps = {
  data: {
    about: { introductionParagraphs: string[]; skills: string[] };
    experience: ExperienceListItemType[];
    projects: {
      title: string;
      description: string;
      url: string;
      imagePath: string;
    }[];
  };
};

export function Content({ data }: ContentProps) {
  const { about, experience, projects } = data;
  return (
    <main id="content" className="pt-24 lg:w-[52%] lg:py-24 text-lg">
      <ContentSection id="about">
        <div>
          {about.introductionParagraphs.map((item) => (
            <p key={item} className="mb-4">
              {item}
            </p>
          ))}
          {about.skills.length > 0 && (
            <>
              <p className="mb-4">
                Here are a few technologies I’ve worked with:
              </p>
              <ul className="fancy-list">
                {about.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </ContentSection>

      <ContentSection id="experience">
        <div>
          <ol className="group/list">
            {experience.map((item) => (
              <ExperienceListItem key={item.job.tenure} data={item} />
            ))}
          </ol>
        </div>
      </ContentSection>

      <ContentSection id="projects">
        <div>
          <ul className="group/list">
            {projects.map((project) => {
              const { sentenceWithoutLastWord, lastWord } = getSentenceParts(
                project.title
              );

              return (
                <li key={project.title} className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <Link
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.title} (opens in a new tab)`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            {sentenceWithoutLastWord}{" "}
                            <span className="inline-block">
                              {lastWord}
                              <ArrowTopRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                          </span>
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        {project.description}
                      </p>
                    </div>
                    <Image
                      className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      alt={project.title}
                      loading="lazy"
                      width={200}
                      height={48}
                      decoding="async"
                      src={project.imagePath}
                    ></Image>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </ContentSection>
    </main>
  );
}
