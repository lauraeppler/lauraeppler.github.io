import React from "react";

interface CardProps {
  title: string;
  color?: "blue" | "green" | "purple" | "default"; // Restrict colors for safety
  children: React.ReactNode; // This represents the markdown inside the tags
}

const Card = ({ title, color = "default", children }: CardProps) => {
  return (
    <div className={`mdx-card mdx-card-${color}`}>
      <div className="mdx-card-header">
        <h4 className="mdx-card-title">{title}</h4>
      </div>
      {/* Render the markdown content */}
      <div className="mdx-card-body">{children}</div>
    </div>
  );
};

export default Card;
