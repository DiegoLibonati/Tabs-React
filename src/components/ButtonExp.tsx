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
      className={`experience__btn ${isActive && "experience__btn--active"}`}
      aria-label="select company"
      onClick={handleActiveCompany}
    >
      {company}
    </button>
  );
};
