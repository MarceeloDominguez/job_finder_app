import { useEffect, useState } from "react";
import { options } from "../helpers/headersApi";
import { Job } from "../interface/jobinterface";

interface JobsState {
  typeJob: Job[];
  urgentlyNeedJob: Job[];
}

export const useFetch = (job: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState<JobsState>({
    typeJob: [],
    urgentlyNeedJob: [],
  });

  const getData = async () => {
    setLoading(true);
    try {
      const dataJobsType = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${job}&page=1&num_pages=1`,
        options
      );
      const respJobsType = await dataJobsType.json();

      const dataUrgentlyNeedJob = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${job}&page=1&num_pages=1`,
        options
      );
      const respUrgentlyNeedJob = await dataUrgentlyNeedJob.json();

      const resp = await Promise.all([respJobsType, respUrgentlyNeedJob]);

      setJobs({ typeJob: resp[0].data, urgentlyNeedJob: resp[1].data });
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
  }, [job]);

  return { ...jobs, loading, error };
};
