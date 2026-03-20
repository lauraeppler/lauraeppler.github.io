interface ColumnsSectionProps {
  columns?: string;
  children: React.ReactNode;
  gap: string;
  className?: string;
}
const ColumnsSection = ({
  children,
  columns = "2",
  gap = "3em",
  className = "",
}: ColumnsSectionProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(" + columns + ", 1fr)",
        gridColumn: "xlwrapper",
        gap: gap,
        alignItems: "center",
      }}
      className={`columns-section-container ${className}`}
    >
      {children}
    </div>
  );
};

export default ColumnsSection;
