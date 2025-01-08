import type { ExperienceListItem as ExperienceListItemType } from "../types";
import { ContentSection } from "./ContentSection";
import { ExperienceListItem } from "./ExperienceListItem";

const experienceListItemData: ExperienceListItemType[] = [
  {
    companyName: "CAE Inc.",
    companyUrl: "https://www.cae.com/",
    jobTenure: "Apr 2021 - Jul 2024",
    jobSummary:
      "Maintained and enhanced core functionalities for a B2C mobile application tailored for airline pilots and a B2B admin dashboard aimed at helping airlines manage ground crew operations at airports. Collaborated with an international team of developers, product owners, designers, and testers, while also providing mentoring to junior developers and interns.",
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
    jobSummary:
      "Designed project architectures and contributed significantly to core functionalities for a B2C mobile application tailored for airline pilots and a B2B admin dashboard aimed at helping airlines manage ground crew operations at airports.",
    jobTitles: ["Software Engineer"],
    technologies: ["Typescript", "React", "React Native"],
  },
  {
    companyName: "Inwijs",
    companyUrl: "https://www.lyceo.nl/",
    jobTenure: "Jun - Nov 2017",
    jobSummary:
      "Build and maintain hybrid mobile applications, modernize parts of an internal web portal, and ensure backend reliability by designing and implementing thorough test cases.",
    jobTitles: ["Junior Software Developer"],
    technologies: ["Javascript", "PHP", "Angular", "Ionic", "Symfony"],
  },
];

const introductionParagraphs: string[] = [
  `I’m a frontend engineer passionate about building impactful mobile applications and frontend solutions. I focus on creating user-centered, maintainable applications that blend technology and design to deliver seamless experiences.`,
  `Most recently, I worked as a Senior Software Engineer at CAE Inc., where I maintained and enhanced mobile apps for airline pilots and an admin dashboard that helps airlines manage ground crew operations. I collaborated daily with a talented international team and mentored junior developers and interns to foster growth and ensure the success of our products.`,
  `Previously, I worked at RB Group.aero, where I designed project architectures and contributed to the development of mobile apps and operational solutions for airlines. At Inwijs, I helped build hybrid mobile applications and modernize internal web portals.`,
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
