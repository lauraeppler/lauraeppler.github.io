import Overview from "@/components/Overview.tsx";
import "@/styles/Hero.css";
import { Project } from "@/types/Project";

const Hero = (project: Project) => {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="project-hero">
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.details}</p>
        </div>
        <Overview className="project-overview" project={project} />
      </div>
    </section>
  );
};

export default Hero;
