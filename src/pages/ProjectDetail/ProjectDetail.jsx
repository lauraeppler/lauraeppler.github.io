import { useParams } from "react-router-dom";
import { useFetchProjectContent } from "../../projectData";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import MarkdownSection from "@/components/MarkdownSection";
import '@/styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const project = useFetchProjectContent(id);
 
  useEffect(() => {
    if (project !== undefined) {
      setLoading(false);
    }
  }, [project]);

  if(loading) {
    return (
      <section className="project-detail not-found">
        <h1>Loading...</h1>
      </section>
    );
  }
  return (
    <section className={`project-detail ${project.id}`}>
      <Hero project={project} />
      {project.sections.map((section, index) => 
        <MarkdownSection key={`${section.title}_${index}`} section={section} />
      )}
  </section>
  )
};

export default ProjectDetail;