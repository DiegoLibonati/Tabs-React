import { BsChevronBarRight } from "react-icons/bs";

interface DutieItemProps {
  dutie: string;
}

export const DutieItem = ({ dutie }: DutieItemProps): JSX.Element => {
  return (
    <li className="experience__information__duties__dutie">
      <BsChevronBarRight fill="#09f"></BsChevronBarRight> {dutie}
    </li>
  );
};
