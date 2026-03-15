import "@/styles/Module.css";

const Module = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <li className={`module ${className}`}>{children}</li>;
};

export default Module;
