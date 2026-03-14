export interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  context: string;
  role: string;
  period: string;
  tools?: string; // The '?' makes this optional, since 'ShuffleData' is missing it!
  images: string[];
  link: string;
  tags: string[];
  sections: ProjectSection[];
}

export interface ProjectSection {
  id: string;
  title: string;
  // Note: Replace 'any' with whatever your useFetch hook actually returns
  // (e.g., string | null, or { data: string, loading: boolean })
  filePath: string;
}
