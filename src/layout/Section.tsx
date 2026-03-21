import "@/styles/layout/Section.css";

interface SectionProps {
  key: string;
  id: string;
  title: string;
  background?: boolean;
  children: React.ReactNode;
  wrapperSize: "normal" | "xl";
}

const Section = ({
  id,
  title,
  children,
  wrapperSize = "normal",
  background = false,
}: SectionProps) => {
  const wrapperClass = wrapperSize === "xl" ? "xl-wrapper" : "wrapper";
  const backgroundClass = background ? "with-bg" : "";

  return (
    <section
      id={id}
      className={`section-container ${wrapperClass} ${backgroundClass}`}
    >
      <h2 className="heading-2">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
