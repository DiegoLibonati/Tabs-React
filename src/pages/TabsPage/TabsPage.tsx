import { useEffect, useState } from "react";

import { Tab } from "@/types/app";
import { JobState } from "@/types/states";

import ButtonExp from "@/components/ButtonExp/ButtonExp";
import CompanyExp from "@/components/CompanyExp/CompanyExp";

import tabService from "@/services/tabService";

import "@/pages/TabsPage/TabsPage.css";

const TabsPage = () => {
  const [jobState, setJobState] = useState<JobState>({
    jobs: [],
    loading: false,
    activeJob: null,
  });

  const job = jobState.activeJob;

  const getJobs = async () => {
    const data = await tabService.getAll();

    setJobState((jobState) => ({
      ...jobState,
      loading: false,
      jobs: data,
      activeJob: data?.length > 0 ? data[0] : null,
    }));
  };

  const handleCompany = (job: Tab) => {
    setJobState((jobState) => ({ ...jobState, activeJob: job }));
  };

  useEffect(() => {
    setJobState((jobState) => ({ ...jobState, loading: true }));
    getJobs();
  }, []);

  if (jobState.loading) {
    return (
      <main className="main-spinner" aria-busy="true" aria-label="Loading work experience data">
        <div className="spinner" role="status" aria-label="Loading"></div>
      </main>
    );
  }

  return (
    <main className="main-app" aria-label="Work experience">
      <section className="tabs" aria-label="Work experience tabs">
        <article className="tabs__header">
          <h2 className="tabs__title">Expierence</h2>
          <div className="tabs__separator"></div>
        </article>

        <article className="tabs__btns" role="tablist" aria-label="Work experience companies">
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
          company={job?.company}
          title={job?.title}
          dates={job?.dates}
          duties={job?.duties}
        ></CompanyExp>
      </section>
    </main>
  );
};

export default TabsPage;
