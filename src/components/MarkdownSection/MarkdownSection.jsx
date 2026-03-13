import Markdown from "react-markdown";
import './MarkdownSection.css';

const MarkdownSection = ({section}) => {
  return (
    <section id={section.id} className="content-section">
      {section.title && <h2>{section.title}</h2>}
        <div className="project-content">
          <Markdown>{section.content}</Markdown>
        </div>
    </section>
  )
}

export default MarkdownSection;