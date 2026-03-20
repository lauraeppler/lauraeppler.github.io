import "@/styles/components/Card.css";

interface CardProps {
  className?: string;
  link?: string;
  title: string;
  img?: string;
  alt?: string;
}

const Card = ({ className = "", link, title, img, alt = "" }: CardProps) => {
  const isClickable = !!link;
  const cardClasses =
    `card card-basic ${isClickable ? "card-animation" : ""} ${className}`.trim();

  return (
    <li className={cardClasses}>
      {img && (
        <div className="img-wrapper">
          <img src={img} alt={alt} loading="lazy" />
        </div>
      )}

      <div className="card-content">
        {isClickable ? (
          /* The <a> tag is inside, but the CSS will stretch it to the whole <li> */
          <a href={link} className="main-card-link">
            <p>{title}</p>
          </a>
        ) : (
          <p>{title}</p>
        )}
      </div>
    </li>
  );
};

export default Card;
