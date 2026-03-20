import "@/styles/layout/ColumnsSection.css";

interface ColumnsSectionProps {
  children: React.ReactNode;
  gap: string;
  className?: string;
}
const ColumnsSection = ({ children, className = "" }: ColumnsSectionProps) => {
  return (
    <div className={`columns-section-container xl-item ${className}`}>
      {children}
    </div>
  );
};

export default ColumnsSection;
