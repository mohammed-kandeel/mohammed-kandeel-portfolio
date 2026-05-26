export interface IProject {
  badge: string;
  image: string;
  liveLink: string;
  gitHubLink: string;
  liveText: string;
  techStack: TechStack[];
  title: string;
  description: string;
  keySystems: KeySystem[];
  footerTags: string;
  colors: ProjectColors;
}

interface TechStack {
  name: string;
  color: string;
}

interface KeySystem {
  icon: string;
  description: string;
}

interface ProjectColors {
  card: string;
  badge: string;
  live: string;
  title: string;
  footerTags: {
    live: string;
  };
}
