import "@/styles/CardList.css";

const CardList = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <ul className={`card-list xl-item ${className}`}>{children}</ul>;
};

export default CardList;
