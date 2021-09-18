import axios from "axios";
import { useState, useEffect } from "react";
import { $axios } from "../http";
import IUseFetch from "../interfaces/IUseFetch";

const useFetch = (url: string, params: object | null = null): IUseFetch => {
  const [data, setData] = useState<object[]>([]);
  const [error, setError] = useState<any>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let cleanup: boolean = false;
    const source = axios.CancelToken.source();

    const fetchData = async (url: string, params: object | null = null) => {
      try {
        setIsLoading(true);
         
        const res = await $axios.get(url, {
          params,
          cancelToken: source.token,
        });

        if (!cleanup) {
          setData(res.data);
          setError(null);
        }

      } catch (error) {
        if (!cleanup) {
          setData([]);
          setError(error);
        }

      } finally {
        if (!cleanup) {
          setIsLoading(false);
        }
      }
    };

    fetchData(url, params);

    return () => {
      cleanup = false;
      source.cancel();
    }
  }, [url, params]);

  return { 
    data, 
    error,
    isLoading
  }
};

export default useFetch;
