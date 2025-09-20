import { BsChevronBarRight } from "react-icons/bs";

import "@src/components/DutieItem.css";

interface DutieItemProps {
  dutie: string;
}

export const DutieItem = ({ dutie }: DutieItemProps): JSX.Element => {
  return (
    <li className="dutie-item">
      <BsChevronBarRight
        fill="#09f"
        className="dutie-item__icon"
      ></BsChevronBarRight>{" "}
      {dutie}
    </li>
  );
};
