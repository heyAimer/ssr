'use client'

import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function useArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchArticles = async() => {
      try {
        const res = await axios.get(`${BASE_URL}/anime-news`); 
        setArticles(res?.data?.articles);
        
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