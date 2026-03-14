import Overview from '@/components/Overview';
import '@/styles/Hero.css';

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