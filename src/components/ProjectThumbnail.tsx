import { Link } from "react-router-dom";
import "@/styles/ProjectThumbnail.css";
import { Project } from "@/types/Project";

const ProjectThumbnail = ({ title, description, id, tags }: Project) => (
  <div className="project-thumbnail">
    {tags && tags.length > 0 && (
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    )}
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={`projekt/${id}`}>Mehr erfahren</Link>
  </div>
);

export default ProjectThumbnail;
