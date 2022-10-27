import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useOpacity } from "../hooks/useOpacity";
import { ButtonExp } from "./ButtonExp";
import { CompanyExp } from "./CompanyExp";

export const Main = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const { opacity, setOpacity } = useOpacity();

  const getJobs = async () => {
    const request = await fetch("https://course-api.com/react-tabs-project");
    const response = await request.json();

    setJobs(response);
    setLoading(false);
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (loading) {
    return (
      <>
        <main>
          <div className="spinner"></div>
        </main>
      </>
    );
  } else {
    const { company, dates, duties, title } = jobs[value];
    return (
      <>
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
              company={company}
              title={title}
              dates={dates}
              duties={duties}
              opacity={opacity}
            ></CompanyExp>
          </section>
        </main>
      </>
    );
  }
};
