import React, { useState, useEffect } from "react";
import { options } from "../helpers/headersApi";
import { Job } from "../interface/jobinterface";

export const useFetchJobById = (jobId: string) => {
  const [jobDetails, setJobDetails] = useState({} as Job);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `https://jsearch.p.rapidapi.com/job-details?job_id=${jobId}&extended_publisher_details=false`,
        options
      );
      const resp = await data.json();

      setJobDetails(resp.data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { jobDetails, loading };
};
