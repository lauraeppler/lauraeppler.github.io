import { useState } from "react";
import "@/styles/Accordion.css";

interface AccordionProps {
  title: string;
  open: boolean;
  img?: string;
  alt?: string;
  children: React.ReactNode;
}
const Accordion = ({ title, children, img, alt = "", open = false }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(open);

  // Use onToggle instead of onClick on the summary.
  // onToggle fires when the details state changes natively.
  const handleToggle = (event: React.SyntheticEvent<HTMLDetailsElement, Event>) => {
    setIsOpen((event.target as HTMLDetailsElement).open);
  };

  return (
    <details className="accordion-container card-basic" open={isOpen} onToggle={handleToggle}>
      <summary className="accordion-title">
        {img && (
          <div className="img-wrapper">
            <img src={img} alt={alt} loading="lazy" />
          </div>
        )}
        {title}
      </summary>
      <div className="accordion-content">{children}</div>
    </details>
  );
};

export default Accordion;
