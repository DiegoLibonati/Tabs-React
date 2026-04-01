import { BsChevronBarRight } from "react-icons/bs";

import { DutieItemProps } from "@/types/props";

import "@/components/DutieItem/DutieItem.css";

const DutieItem = ({ dutie }: DutieItemProps) => {
  return (
    <li className="dutie-item">
      <BsChevronBarRight fill="#09f" className="dutie-item__icon"></BsChevronBarRight> {dutie}
    </li>
  );
};

export default DutieItem;
