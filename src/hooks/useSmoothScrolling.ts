import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// smooth scroll to same-site links
// because native HTML <a href="#"> behavior
// is not working with React Router

const useSmoothScrolling = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
};

export default useSmoothScrolling;
