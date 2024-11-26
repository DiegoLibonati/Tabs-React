import { useEffect, useState } from "react";

import { Job } from "../entities/entities";

import { CompanyExp } from "./CompanyExp";
import { ButtonExp } from "./ButtonExp";

import { getTabs } from "../services/get/getTabs/getTabs";

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

  const job = jobState.activeJob;

  const getJobs = async () => {
    const data = await getTabs();

    setJobState((jobState) => ({
      ...jobState,
      loading: false,
      jobs: data,
      activeJob: data?.length > 0 ? data[0] : null,
    }));
  };

  const handleCompany = (job: Job) => {
    setJobState((jobState) => ({ ...jobState, activeJob: job }));
  };

  useEffect(() => {
    setJobState((jobState) => ({ ...jobState, loading: true }));
    getJobs();
  }, []);

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
        ></CompanyExp>
      </section>
    </main>
  );
};
