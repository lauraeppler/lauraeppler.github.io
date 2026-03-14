import { useState, useEffect } from "react";

const useFetch = (path: string): string => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(path);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Error fetching markdown:", error);
      }
    };

    fetchData();
  }, [path]);

  return content;
};

export default useFetch;
