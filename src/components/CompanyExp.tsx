import { DutieItem } from "./DutieItem";

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
    <article className="experience__information">
      <h2>{title}</h2>
      <h3>{company}</h3>
      <h4>{dates}</h4>

      <ul className="experience__information__duties">
        {duties?.map((dutie, index) => (
          <DutieItem key={index * 1000} dutie={dutie}></DutieItem>
        ))}
      </ul>
    </article>
  );
};
