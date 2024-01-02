import { ButtonExpProps } from "../entities/entities";

export const ButtonExp = ({
  company,
  index,
  value,
  setValue,
  setOpacity,
}: ButtonExpProps): JSX.Element => {
  const handleCompany: React.MouseEventHandler<HTMLButtonElement> = () => {
    setOpacity(0);

    setTimeout(() => {
      setOpacity(1);
      setValue(index);
    }, 400);
  };

  return (
    <button
      className={`job-btn ${index === value && "active"}`}
      onClick={(e) => handleCompany(e)}
    >
      {company}
    </button>
  );
};
