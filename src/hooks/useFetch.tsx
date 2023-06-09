import { useEffect, useState } from "react";
import { options } from "../helpers/headersApi";
import { Job } from "../interface/jobinterface";

export const useFetch = (typeJob: string) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const dataJobsType = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${typeJob}&page=1&num_pages=1`,
        options
      );
      const respJobsType = await dataJobsType.json();

      setJobs(respJobsType.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [typeJob]);

  return { jobs, loading, error };
};
