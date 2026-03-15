import "@/styles/ModuleList.css";

const ModuleList = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <ul className={`module-list ${className}`}>{children}</ul>;
};

export default ModuleList;
