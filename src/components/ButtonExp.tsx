import "./ButtonExp.css";

interface ButtonExpProps {
  company: string;
  isActive: boolean;
  handleActiveCompany: React.MouseEventHandler<HTMLButtonElement>;
}

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
