import "@/styles/layout/Column.css";

interface ColumnProps {
  children: React.ReactNode;
}
const Column = ({ children }: ColumnProps) => {
  return <div className="column-child-container">{children}</div>;
};

export default Column;
