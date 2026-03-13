import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useFetchProjectContent } from "../../projectData";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import './ProjectDetail.css';

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
      <nav className="content-navigation" aria-label="Inhaltsverzeichnis">
        <h2>Zum Inhalt springen:</h2>
        <ul>
          <li><a href="#ziel">Projektziel</a></li>
          <li><a href="#rolle">Meine Rolle</a></li>
          <li><a href="#ergebnisse">Projektstruktur</a></li>
        </ul>
      </nav>


      {project.sections.map((section) => {
          return (
          <section id={section.id} className="content-section">
            {section.title && <h2>{section.title}</h2>}
              <div className="project-content">
                <Markdown>{section.content}</Markdown>
              </div>
          </section>
          )
      })}
  </section>
  )
};

export default ProjectDetail;