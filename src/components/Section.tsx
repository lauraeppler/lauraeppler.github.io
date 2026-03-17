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
    <section id={id} className={`section-container ${wrapperClass}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
