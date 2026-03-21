import "@/styles/layout/ColumnsSection.css";

interface ColumnsSectionProps {
  layout?: "half-half" | "one-two" | "two-one";
  gap?: string;
  children: React.ReactNode;
  className?: string;
}
const ColumnsSection = ({
  children,
  layout = "half-half",
  className = "",
}: ColumnsSectionProps) => {
  return (
    <div className={`columns-section-container xl-item ${layout} ${className}`}>
      {children}
    </div>
  );
};

export default ColumnsSection;
