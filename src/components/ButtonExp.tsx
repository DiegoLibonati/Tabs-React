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
      className={`job-btn ${isActive && "active"}`}
      aria-label="select company"
      onClick={handleActiveCompany}
    >
      {company}
    </button>
  );
};
