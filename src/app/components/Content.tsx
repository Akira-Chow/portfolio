import type { ExperienceListItem as ExperienceListItemType } from "../types";
import { ContentSection } from "./ContentSection";
import { ExperienceListItem } from "./ExperienceListItem";

const experienceListItemData: ExperienceListItemType[] = [
  {
    companyName: "CAE Inc.",
    companyUrl: "https://www.cae.com/",
    jobTenure: "Apr 2021 - Jul 2024",
    jobSummary: [
      "Maintained and enhanced core functionalities of several cross-platform solutions",
      "Reduced technical debt and churn",
      "Provided guidance to other developers to ensure day-to-day operations run smoothly",
    ],
    jobTitles: ["Senior Software Engineer", "Software Engineer"],
    technologies: [
      "Typescript",
      "React",
      "React Native",
      "Angular",
      "jQuery",
      "Azure",
      "Ionic",
      "Cordova",
    ],
  },
  {
    companyName: "RB Group.aero",
    companyUrl: "https://rosterbuster.aero/",
    jobTenure: "Jul 2019 - Apr 2021",
    jobSummary: [
      "Designed and implemented project architectures",
      "Made significant contributions to enhance user experience and application performance",
      "Lead efforts in developing company-wide best practice documentation, standardizing checklists for developers and testers, and facilitating knowledge-sharing sessions",
    ],
    jobTitles: ["Software Engineer"],
    technologies: ["Typescript", "React", "React Native"],
  },
  {
    companyName: "Inwijs",
    companyUrl: "https://www.lyceo.nl/",
    jobTenure: "Jun - Nov 2017",
    jobSummary: [
      "Build and maintain cross-platform solutions",
      "Modernize the internal web portal",
      "Ensure backend reliability by writing robust test cases",
    ],
    jobTitles: ["Junior Software Developer"],
    technologies: ["Javascript", "PHP", "Angular", "Ionic", "Symfony"],
  },
];

const introductionParagraphs: string[] = [
  `I’m a frontend engineer passionate about building impactful mobile applications and frontend solutions. I focus on creating user-centered, maintainable applications that blend technology and design to deliver seamless experiences.`,
  `Outside of work, I enjoy reading manga, watching anime, going for long walks, and playing games with friends.`,
];

export function Content() {
  return (
    <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
      <ContentSection id="about">
        <div>
          {introductionParagraphs.map((item) => (
            <p key={item} className="mb-4">
              {item}
            </p>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="experience">
        <div>
          <ol className="group/list">
            {experienceListItemData.map((item) => (
              <ExperienceListItem key={item.jobTenure} data={item} />
            ))}
          </ol>
        </div>
      </ContentSection>
    </main>
  );
}
