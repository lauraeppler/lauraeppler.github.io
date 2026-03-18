// useScrollToTop.ts
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSmoothScrolling = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Use requestAnimationFrame to ensure the new Route content
      // is fully rendered before we scroll the container
      requestAnimationFrame(() => {
        container.scrollTo({ top: 0, behavior: "instant" });
      });
    }
  }, [pathname, hash]);
};
