import { useEffect, useState } from "react";

import { Tab } from "@/types/app";
import { JobState } from "@/types/states";

import ButtonExp from "@/components/ButtonExp/ButtonExp";
import CompanyExp from "@/components/CompanyExp/CompanyExp";

import { tabsService } from "@/services/tabsService";

import "@/pages/TabsPage/TabsPage.css";

const TabsPage = () => {
  const [jobState, setJobState] = useState<JobState>({
    jobs: [],
    loading: false,
    activeJob: null,
  });

  const job = jobState.activeJob;

  const getJobs = async () => {
    const data = await tabsService.getAll();

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
      <main className="main-spinner">
        <div className="spinner"></div>
      </main>
    );
  }

  return (
    <main className="main-app">
      <section className="tabs">
        <article className="tabs__header">
          <h2 className="tabs__title">Expierence</h2>
          <div className="tabs__separator"></div>
        </article>

        <article className="tabs__btns">
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
