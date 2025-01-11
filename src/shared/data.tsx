import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const data = {
  header: {
    title: "Akira Chow",
    subtitle: "Front End Engineer",
    message: "I build intuitive, high-performance mobile and web experiences.",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akirachow",
        icon: <LinkedInLogoIcon className="h-6 w-6" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/Akira-Chow",
        icon: <GitHubLogoIcon className="h-6 w-6" />,
      },
    ],
    resume: "/resume.pdf",
  },
  content: {
    about: {
      introductionParagraphs: [
        "I’m a frontend engineer passionate about building impactful mobile applications and frontend solutions. I focus on creating user-centered, maintainable applications that blend technology and design to deliver seamless experiences.",
        "Outside of work, I enjoy reading manga, watching anime, going for long walks, and playing games with friends.",
      ],
      skills: [
        "Javscript / Typescript",
        "React / React Native",
        "Angular",
        "Next.js",
      ],
    },
    experience: [
      {
        job: {
          titles: ["Senior Software Engineer", "Software Engineer"],
          tenure: "Apr 2021 - Jul 2024",
          summaryResponsibilities: [
            "Maintained and enhanced core functionalities of several cross-platform solutions",
            "Reduced technical debt and churn",
            "Provided guidance to other developers to ensure smooth day-to-day operations",
          ],
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
        company: {
          name: "CAE Inc.",
          url: "https://www.cae.com",
        },
      },
      {
        job: {
          titles: ["Software Engineer"],
          tenure: "Jul 2019 - Apr 2021",
          summaryResponsibilities: [
            "Designed and implemented project architectures",
            "Made significant contributions to enhance user experience and application performance",
            "Lead efforts in developing company-wide best practice documentation, standardizing checklists for developers and testers, and facilitating knowledge-sharing sessions",
          ],
          technologies: ["Typescript", "React", "React Native"],
        },
        company: {
          name: "RB Group.aero",
          url: "https://rosterbuster.aero",
        },
      },
      {
        job: {
          titles: ["Junior Software Engineer"],
          tenure: "Jun - Nov 2017",
          summaryResponsibilities: [
            "Build and maintain cross-platform solutions",
            "Modernize the internal web portal",
            "Ensure backend reliability by writing robust test cases",
          ],
          technologies: ["Javascript", "PHP", "Angular", "Ionic", "Symfony"],
        },
        company: {
          name: "Inwijs",
          url: "https://www.lyceo.nl",
        },
      },
    ],
    projects: [
      {
        title: "TitanTech Dashboard",
        description:
          "Website for tracking and analyzing Tap Titans 2 game data.",
        imagePath: "/projects/titantech-dashboard.webp",
        url: "https://titantech.silical.dev",
      },
      {
        title: "Portfolio website",
        description:
          "My portfolio website built with Next.js, Tailwind CSS, and TypeScript.",
        imagePath: "/projects/portfolio-website.webp",
        url: "https://akirachow.dev",
      },
    ],
  },
};
