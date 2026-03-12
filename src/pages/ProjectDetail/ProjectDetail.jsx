import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useFetchProjectContent } from "../../projectData";
import { useState, useEffect } from "react";

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
      <section className="hero-section">
        <div className="project-hero">
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.details}</p>
        </div>

        <div className="project-overview">
          <div className="overview-layout">
            <dl className="overview-details">
              <div className="overview-item">
                <dt>Kontext</dt>
                <dd>{project.context}</dd>
              </div>
              <div className="overview-item">
                <dt>Rolle</dt>
                <dd>{project.role}</dd>
              </div>
              <div className="overview-item">
                <dt>Zeitraum</dt>
                <dd>{project.period}</dd>
              </div>
              {project.tools && (<div className="overview-item"><dt>Tools</dt> <dd>{project.tools}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

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