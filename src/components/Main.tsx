import { useEffect } from "react";
import { useState } from "react";
import { useOpacity } from "../hooks/useOpacity";
import { ButtonExp } from "./ButtonExp";
import { CompanyExp } from "./CompanyExp";
import { Job } from "../entities/entities";

export const Main = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [value, setValue] = useState<number>(0);
  const { opacity, setOpacity } = useOpacity();

  const getJobs = async () => {
    const request = await fetch("https://course-api.com/react-tabs-project");
    const response: Job[] = await request.json();

    setJobs(response);
    setLoading(false);
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (loading) {
    return (
      <main>
        <div className="spinner"></div>
      </main>
    );
  } else {
  
    return (
      <main className="main_container">
        <section className="exp_container">
          <article className="exp_container_title">
            <h2>Expierence</h2>
            <div></div>
          </article>

          <article className="exp_container_btns">
            {jobs.map((job, index) => (
              <ButtonExp
                key={index * 500}
                company={job.company}
                index={index}
                setValue={setValue}
                value={value}
                setOpacity={setOpacity}
              ></ButtonExp>
            ))}
          </article>

          <CompanyExp
            company={jobs[value].company}
            title={jobs[value].title}
            dates={jobs[value].dates}
            duties={jobs[value].duties}
            opacity={opacity}
          ></CompanyExp>
        </section>
      </main>
    );
  }
};
