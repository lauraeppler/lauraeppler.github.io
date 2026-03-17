import "@/styles/ModuleList.css";

const ModuleList = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <ul className={`module-list xl-item ${className}`}>{children}</ul>;
};

export default ModuleList;
