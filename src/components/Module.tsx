import "@/styles/components/Module.css";

const Module = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <li className={`module card-basic ${className}`}>{children}</li>;
};

export default Module;
