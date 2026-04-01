import { ButtonExpProps } from "@/types/props";

import "@/components/ButtonExp/ButtonExp.css";

const ButtonExp = ({ company, isActive, handleActiveCompany }: ButtonExpProps) => {
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

export default ButtonExp;
