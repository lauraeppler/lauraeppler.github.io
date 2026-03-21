import "@/styles/layout/Column.css";

interface ColumnProps {
  className?: string;
  children: React.ReactNode;
}
const Column = ({ children, className = "" }: ColumnProps) => {
  return (
    <div className={`column-child-container ${className}`}>{children}</div>
  );
};

export default Column;
