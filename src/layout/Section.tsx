import "@/styles/layout/Section.css";

interface SectionProps {
  key: string;
  id: string;
  title: string;
  className?: string;
  wrapperSize: "normal" | "xl";
  background?: boolean;
  children: React.ReactNode;
}

const Section = ({
  id,
  title,
  className = "",
  wrapperSize = "normal",
  background = false,
  children,
}: SectionProps) => {
  const wrapperClass = wrapperSize === "xl" ? "xl-wrapper" : "wrapper";
  const backgroundClass = background ? "with-bg" : "";

  return (
    <section
      id={id}
      className={`section-container ${className} ${wrapperClass} ${backgroundClass}`}
    >
      <h2 className="heading-2">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
