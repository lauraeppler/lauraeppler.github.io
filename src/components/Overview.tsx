import "@/styles/Overview.css";
import { ProjectOverview } from "@/types/Project.ts";

interface OverviewProps {
  overview: ProjectOverview;
  className?: string;
}

const Overview = ({ overview, className }: OverviewProps) => {
  return (
    <div className={`overview-layout ${className}`}>
      <dl className="overview-details">
        <div className="overview-item">
          <dt>Kontext</dt>
          <dd>{overview.context}</dd>
        </div>
        <div className="overview-item">
          <dt>Rolle</dt>
          <dd>{overview.role}</dd>
        </div>
        <div className="overview-item">
          <dt>Zeitraum</dt>
          <dd>{overview.period}</dd>
        </div>
        {overview.tools && (
          <div className="overview-item">
            <dt>Tools</dt> <dd>{overview.tools}</dd>
          </div>
        )}
      </dl>
    </div>
  );
};

export default Overview;
