import './Hero.css';
import Overview from '../Overview/Overview';

const Hero = ({project}) => {
  return (
    <section className="hero-section">
      <div className='hero-wrapper'>
        <div className="project-hero">
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.details}</p>
        </div>
        <Overview className="project-overview" project={project} />
      </div>
    </section>
  )
}

export default Hero;