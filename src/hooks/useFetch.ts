import { useEffect, useState } from "react";
import api from "../services/api";

export const useFetch = (url: string) => {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(url);
        setData(response.data);
      } catch (error) {
        setError(`An error occured while fetching data ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
