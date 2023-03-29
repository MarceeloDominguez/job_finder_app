import { useEffect, useState } from "react";
import { options } from "../helpers/headersApi";
import { Job } from "../interface/jobinterface";

export const useFetchUrgentlyNeedJob = (job: string) => {
  const [urgentlyNeedJob, setUrgentlyNeedJob] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const dataFetch = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${job}&page=1&num_pages=1`,
        options
      );
      const resp = await dataFetch.json();
      setUrgentlyNeedJob(resp.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    setTimeout(getData, 1500);
  }, [job]);

  return { urgentlyNeedJob, loading, error };
};
