import './Hero.css';

const Hero = ({project}) => {
  return (
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
  )
}

export default Hero;