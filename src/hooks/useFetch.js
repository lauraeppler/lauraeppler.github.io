import { useEffect, useState } from "react";

export default function useFetch(path) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(path)
      .then(res => res.text())
      .then(setContent);
  }, [path]);

  return content
}