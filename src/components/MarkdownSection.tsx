import Markdown from "react-markdown";
import "@/styles/MarkdownSection.css";
import { ProjectSection } from "@/types/Project";
import useFetch from "@/hooks/useFetch.ts";

interface MarkdownSectionProps extends ProjectSection {
  key: string;
}

const MarkdownSection = ({ id, title, filePath }: MarkdownSectionProps) => {
  const content = useFetch(filePath);
  return (
    <section id={id} className="content-section">
      {title && <h2>{title}</h2>}
      <div className="project-content">
        <Markdown>{content}</Markdown>
      </div>
    </section>
  );
};

export default MarkdownSection;
