import Markdown from "react-markdown";

const ProjectDetail = (project: any) => {
  return (
  <section className={`project-detail ${project.id}`}>
    <div className="project-hero">
      <h1>{project.title}</h1>
      <p className="project-subtitle">{project.description}</p>
    </div>

    <div className="project-overview">
      <div className="overview-layout">
        <p className="overview-description">
          {project.details}
        </p>
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

    <nav className="content-navigation" aria-label="Inhaltsverzeichnis">
      <h2>Zum Inhalt springen:</h2>
      <ul>
        <li><a href="#ziel">Projektziel</a></li>
        <li><a href="#rolle">Meine Rolle</a></li>
        <li><a href="#ergebnisse">Projektstruktur</a></li>
      </ul>
    </nav>


    {project.sections.map((section: any, idx: number) => {
        return (
         <section id={section.id} className="content-section">
           {section.title && <h2>{section.title}</h2>}
           <Markdown>{section.content}</Markdown>
         </section>
        )
    })}
    
  </section>
  );
};

export default ProjectDetail;