import { Project } from "@/types/Project";
import { projectsData } from "@/content/projectData";

export function useProjectData(): Project[];
export function useProjectData(id?: string | undefined): Project | undefined;
export function useProjectData(id?: string): Project | Project[] | undefined {
  if (id) {
    return projectsData[id];
  }
  return Object.values(projectsData);
}
