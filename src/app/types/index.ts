type SocialMediaListItem = {
  title: string;
  url: string;
  svgElement: React.ReactElement<React.SVGProps<SVGElement>>;
};

type ExperienceListItem = {
  companyName: string;
  companyUrl: string;
  jobSummary: string;
  jobTenure: string;
  jobTitles: string[];
  technologies: string[];
};

export type { SocialMediaListItem, ExperienceListItem };
