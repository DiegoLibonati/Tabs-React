import { BsChevronBarRight } from "react-icons/bs";

import type { JSX } from "react";
import type { DutieItemProps } from "@/types/props";

import "@/components/DutieItem/DutieItem.css";

const DutieItem = ({ dutie }: DutieItemProps): JSX.Element => {
  return (
    <li className="dutie-item">
      <BsChevronBarRight
        fill="#09f"
        className="dutie-item__icon"
        aria-hidden="true"
      ></BsChevronBarRight>
      {dutie}
    </li>
  );
};

export default DutieItem;
