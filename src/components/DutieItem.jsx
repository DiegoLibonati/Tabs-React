import React from "react";
import { BsChevronBarRight } from "react-icons/bs";

export const DutieItem = ({ dutie }) => {
  return (
    <li className="exp_container_info_duties_dutie">
      <BsChevronBarRight fill="#09f"></BsChevronBarRight> {dutie}
    </li>
  );
};
