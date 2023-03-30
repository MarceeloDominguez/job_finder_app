import { useState, useEffect } from "react";
import { options } from "../helpers/headersApi";
import { Job } from "../interface/jobinterface";

export const useSearch = (job: string, currentPage: number) => {
  const [jobResults, setJobResults] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const dataFetch = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${job}&page=${currentPage}&num_pages=1`,
        options
      );
      const resp = await dataFetch.json();
      setJobResults(job === "" ? [] : [...jobResults, ...resp.data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [job, currentPage]);

  return { jobResults, loading };
};
