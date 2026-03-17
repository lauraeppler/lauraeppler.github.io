import "@/styles/Section.css";

interface SectionProps {
  key: string;
  id: string;
  title: string;
  children: React.ReactNode;
  wrapperSize: "normal" | "xl";
}

const Section = ({ id, title, children, wrapperSize = "normal" }: SectionProps) => {
  const wrapperClass = wrapperSize === "xl" ? "xl-wrapper" : "wrapper";

  return (
    <section id={id} className={`content-section ${wrapperClass}`}>
      <h2>{title}</h2>
      <div className="project-content">{children}</div>
    </section>
  );
};

export default Section;
