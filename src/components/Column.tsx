interface ColumnProps {
  span?: string;
  children: React.ReactNode;
}
const Column = ({ children, span = "" }: ColumnProps) => {
  return (
    <div
      style={{
        gridColumn: `${span}`,
        display: "grid",
        rowGap: "1em",
      }}
      className="column-child-container"
    >
      {children}
    </div>
  );
};

export default Column;
