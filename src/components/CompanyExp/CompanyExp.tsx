import DutieItem from "@/components/DutieItem/DutieItem";

import { CompanyExpProps } from "@/types/props";

import "@/components/CompanyExp/CompanyExp.css";

const CompanyExp = ({ company, title, dates, duties }: CompanyExpProps) => {
  return (
    <article
      className="company-exp"
      role="tabpanel"
      aria-label={`${company ?? "Selected company"} work experience details`}
    >
      <h2 className="company-exp__title">{title}</h2>
      <h3 className="company-exp__company">{company}</h3>
      <h4 className="company-exp__dates">{dates}</h4>

      <ul className="company-exp__duties" aria-label={`${company ?? "Company"} responsibilities`}>
        {duties?.map((dutie, index) => (
          <DutieItem key={index * 1000} dutie={dutie}></DutieItem>
        ))}
      </ul>
    </article>
  );
};

export default CompanyExp;
