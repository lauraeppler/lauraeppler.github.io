import Overview from "@/components/Overview.tsx";
import { ProjectOverview } from "@/types/Project.ts";
import "@/styles/sections/Hero.css";

interface HeroProps {
  title: string;
  details: string;
  overview: ProjectOverview;
}

const Hero = ({ title, details, overview }: HeroProps) => {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="project-hero">
          <h1>{title}</h1>
          <p className="project-subtitle">{details}</p>
        </div>
        <Overview className="project-overview" overview={overview} />
      </div>
    </section>
  );
};

export default Hero;
