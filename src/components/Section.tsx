import "@/styles/Section.css";

interface SectionProps {
  key: string;
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="content-section">
      <h2>{title}</h2>
      <div className="project-content">{children}</div>
    </section>
  );
};

export default Section;
