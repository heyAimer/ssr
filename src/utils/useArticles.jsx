import { useEffect, useState } from "react";

export default function useArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch("http://localhost:3001/articles"); // backend API
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        setError("Failed to load articles");
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return { articles, loading, error };
}