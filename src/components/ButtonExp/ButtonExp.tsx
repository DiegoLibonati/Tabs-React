import { ButtonExpProps } from "@src/entities/props";

import "@src/components/ButtonExp/ButtonExp.css";

export const ButtonExp = ({
  company,
  isActive,
  handleActiveCompany,
}: ButtonExpProps): JSX.Element => {
  return (
    <button
      className={`button-exp ${isActive && "button-exp--active"}`}
      aria-label="select company"
      onClick={handleActiveCompany}
    >
      {company}
    </button>
  );
};
