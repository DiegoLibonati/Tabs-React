import { BsChevronBarRight } from "react-icons/bs";
import { DutieItemProps } from "../entities/entities";

export const DutieItem = ({ dutie }: DutieItemProps): JSX.Element => {
  return (
    <li className="exp_container_info_duties_dutie">
      <BsChevronBarRight fill="#09f"></BsChevronBarRight> {dutie}
    </li>
  );
};
