import { useEffect, useRef, useState } from "react";

import { Job } from "../entities/entities";

import { CompanyExp } from "./CompanyExp";
import { ButtonExp } from "./ButtonExp";

import { useOpacity } from "../hooks/useOpacity";

type JobState = {
  jobs: Job[];
  activeJob: Job | null;
  loading: boolean;
};

export const Main = (): JSX.Element => {
  const [jobState, setJobState] = useState<JobState>({
    jobs: [],
    loading: false,
    activeJob: null,
  });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { opacity, setOpacity } = useOpacity();

  const job = jobState.activeJob;

  const getJobs = async () => {
    const request = await fetch("/react-tabs-project");
    const data: Job[] = await request.json();

    setJobState((jobState) => ({
      ...jobState,
      loading: false,
      jobs: data,
      activeJob: data?.length > 0 ? data[0] : null,
    }));
  };

  const handleCompany = (job: Job) => {
    setOpacity(0);

    timeoutRef.current = setTimeout(() => {
      setOpacity(1);
      setJobState((jobState) => ({ ...jobState, activeJob: job }));
    }, 400);
  };

  useEffect(() => {
    setJobState((jobState) => ({ ...jobState, loading: true }));
    getJobs();
  }, []);

  useEffect(() => {
    if (!timeoutRef.current) return;
    return () => clearTimeout(timeoutRef.current!);
  }, [timeoutRef]);

  if (jobState.loading) {
    return (
      <main className="main_container_loading">
        <div className="spinner"></div>
      </main>
    );
  }

  return (
    <main className="main_container">
      <section className="exp_container">
        <article className="exp_container_title">
          <h2>Expierence</h2>
          <div></div>
        </article>

        <article className="exp_container_btns">
          {jobState.jobs.map((job) => (
            <ButtonExp
              key={job.id}
              company={job.company}
              isActive={job.id === jobState?.activeJob?.id}
              handleActiveCompany={() => handleCompany(job)}
            ></ButtonExp>
          ))}
        </article>

        <CompanyExp
          company={job?.company!}
          title={job?.title!}
          dates={job?.dates!}
          duties={job?.duties!}
          opacity={opacity}
        ></CompanyExp>
      </section>
    </main>
  );
};
