import "@/styles/Overview.css";
import { Project } from "@/types/Project";

const Overview = ({
  project,
  className,
}: {
  project: Project;
  className: string;
}) => {
  return (
    <div className={`overview-layout ${className}`}>
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
        {project.tools && (
          <div className="overview-item">
            <dt>Tools</dt> <dd>{project.tools}</dd>
          </div>
        )}
      </dl>
    </div>
  );
};

export default Overview;
