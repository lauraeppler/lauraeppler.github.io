import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Project = ({ title, description, link }) => (
  <div className="project">
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={link}>Mehr erfahren</Link>
  </div>
);

export default Project;
