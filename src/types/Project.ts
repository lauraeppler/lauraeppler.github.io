export interface Project {
  id: string;
  component: React.ElementType;
  title: string;
  description: string;
  details: string;
  images: string[];
  link: string;
  tags: string[];
  overview: ProjectOverview;
}

export interface ProjectOverview {
  context: string;
  role: string;
  period: string;
  tools: string;
}
