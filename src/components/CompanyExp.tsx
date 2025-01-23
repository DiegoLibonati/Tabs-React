import { DutieItem } from "./DutieItem";

import "./CompanyExp.css";

interface CompanyExpProps {
  company: string;
  title: string;
  dates: string;
  duties: string[];
}

export const CompanyExp = ({
  company,
  title,
  dates,
  duties,
}: CompanyExpProps): JSX.Element => {
  return (
    <article className="company-exp">
      <h2 className="company-exp__title">{title}</h2>
      <h3 className="company-exp__company">{company}</h3>
      <h4 className="company-exp__dates">{dates}</h4>

      <ul className="company-exp__duties">
        {duties?.map((dutie, index) => (
          <DutieItem key={index * 1000} dutie={dutie}></DutieItem>
        ))}
      </ul>
    </article>
  );
};
