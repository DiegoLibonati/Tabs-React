import React from "react";
import { DutieItem } from "./DutieItem";

export const CompanyExp = ({ company, title, dates, duties, opacity }) => {
  return (
    <>
      <article className="exp_container_info" style={{ opacity }}>
        <h2>{title}</h2>
        <h3>{company}</h3>
        <h4>{dates}</h4>

        <ul className="exp_container_info_duties">
          {duties.map((dutie, index) => (
            <DutieItem key={index * 1000} dutie={dutie}></DutieItem>
          ))}
        </ul>
      </article>
    </>
  );
};
