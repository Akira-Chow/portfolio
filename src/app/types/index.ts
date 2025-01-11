type SocialMediaListItem = {
  name: string;
  url: string;
  icon: React.ReactElement<React.SVGProps<SVGElement>>;
};

type ExperienceListItem = {
  job: {
    titles: string[];
    tenure: string;
    summaryResponsibilities: string[];
    technologies: string[];
  };
  company: {
    name: string;
    url: string;
  };
};

export type { SocialMediaListItem, ExperienceListItem };
