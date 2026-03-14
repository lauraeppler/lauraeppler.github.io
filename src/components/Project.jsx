import { Link } from "react-router-dom";
import "@/styles/App.css";

const Project = ({ title, description, link, id, tags }) => (
  <div className="project">
    {tags && tags.length > 0 && (
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    )}
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={`projekt/${id}`}>Mehr erfahren</Link>
  </div>
);

export default Project;
